import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Interactive 3D WebGL neural-lattice & orbital data-constellation scene.
 * Responds smoothly to mouse movement and window resizing.
 */
export default function HeroScene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Master group shifted slightly right on desktop for balanced hero composition
    const masterGroup = new THREE.Group();
    const isDesktop = width >= 1024;
    masterGroup.position.set(isDesktop ? 2.1 : 0, isDesktop ? 0.1 : 0.4, 0);
    scene.add(masterGroup);

    // 1. Outer geodesic wireframe lattice
    const outerGeo = new THREE.IcosahedronGeometry(2.15, 1);
    const outerWire = new THREE.WireframeGeometry(outerGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.34,
    });
    const outerMesh = new THREE.LineSegments(outerWire, outerMat);
    masterGroup.add(outerMesh);

    // 2. Inner glowing data core
    const innerGeo = new THREE.OctahedronGeometry(1.15, 2);
    const innerWire = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.52,
    });
    const innerMesh = new THREE.LineSegments(innerWire, innerMat);
    masterGroup.add(innerMesh);

    // 3. Glowing vertex nodes on outer icosahedron
    const posAttr = outerGeo.attributes.position;
    const uniqueVerts = [];
    const seen = new Set();
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i).toFixed(2);
      const vy = posAttr.getY(i).toFixed(2);
      const vz = posAttr.getZ(i).toFixed(2);
      const key = `${vx},${vy},${vz}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueVerts.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      }
    }
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.Float32BufferAttribute(uniqueVerts, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.09,
      transparent: true,
      opacity: 0.9,
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    masterGroup.add(nodePoints);

    // 4. Dual orbital rings
    const ringGeo1 = new THREE.TorusGeometry(3.0, 0.014, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.25,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.6;
    ring1.rotation.y = Math.PI / 6;
    masterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.45, 0.012, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.22,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = -Math.PI / 5;
    masterGroup.add(ring2);

    // 5. Orbital satellite spheres
    const satGeo = new THREE.SphereGeometry(0.075, 16, 16);
    const sat1 = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: 0x34d399 }));
    const sat2 = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: 0x22d3ee }));
    const sat3 = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: 0xc084fc }));
    masterGroup.add(sat1, sat2, sat3);

    // 6. Ambient 3D particle constellation
    const particleCount = 420;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const cCyan = new THREE.Color(0x22d3ee);
    const cIndigo = new THREE.Color(0x818cf8);
    const cEmerald = new THREE.Color(0x34d399);

    for (let i = 0; i < particleCount; i++) {
      const r = 4.2 + Math.random() * 9.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi) - 2;

      const pick = i % 3 === 0 ? cCyan : i % 3 === 1 ? cIndigo : cEmerald;
      particleColors[i * 3] = pick.r;
      particleColors[i * 3 + 1] = pick.g;
      particleColors[i * 3 + 2] = pick.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Mouse parallax state
    const targetMouse = { x: 0, y: 0 };
    const currentMouse = { x: 0, y: 0 };

    const handlePointerMove = (e) => {
      targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      const desktop = w >= 1024;
      masterGroup.position.set(desktop ? 2.1 : 0, desktop ? 0.1 : 0.4, 0);
    };
    window.addEventListener('resize', handleResize);

    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;

      // Smooth organic rotation
      outerMesh.rotation.y = t * 0.16 + currentMouse.x * 0.45;
      outerMesh.rotation.x = t * 0.1 + currentMouse.y * 0.35;
      nodePoints.rotation.copy(outerMesh.rotation);

      innerMesh.rotation.y = -t * 0.24 - currentMouse.x * 0.25;
      innerMesh.rotation.z = t * 0.15;

      ring1.rotation.z = t * 0.18;
      ring2.rotation.z = -t * 0.14;

      // Satellites orbiting along tilted paths
      sat1.position.set(Math.cos(t * 0.9) * 3.0, Math.sin(t * 0.9) * 1.1, Math.sin(t * 0.9) * 2.4);
      sat2.position.set(Math.sin(t * 0.7 + 2) * 3.45, Math.cos(t * 0.7 + 2) * 1.6, Math.cos(t * 0.7 + 2) * 2.2);
      sat3.position.set(Math.cos(t * 1.1 + 4) * 2.3, Math.sin(t * 1.1 + 4) * 2.2, Math.sin(t * 1.1 + 4) * 1.2);

      // Gentle breathing scale
      const pulse = 1 + Math.sin(t * 1.6) * 0.03;
      innerMesh.scale.setScalar(pulse);

      starField.rotation.y = t * 0.025 + currentMouse.x * 0.08;
      starField.rotation.x = currentMouse.y * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      outerGeo.dispose();
      outerWire.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerWire.dispose();
      innerMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      satGeo.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
}
