// ============================================================
//  portfolio.config.js  —  YOUR SINGLE SOURCE OF TRUTH
//  Update everything about yourself right here.
//  All sections are clearly labelled below.
// ============================================================

// ─────────────────────────────────────────────────────────────
//  SECTION 1 · PERSONAL DETAILS
//  Your name, job title, tagline, location, and social links.
// ─────────────────────────────────────────────────────────────

export const PERSONAL = {
  // The short brand / logo text shown in the top-left navbar
  brand: "DEV.DS",

  // Your full name
  name: "Your Name",

  // The roles that cycle on the hero section (add or remove any)
  roles: [
    "Software Developer",
    "Data Science Undergraduate",
    "Frontend Engineer",
    "React Developer",
  ],

  // One-line tagline shown below the hero headline
  tagline:
    "Building clean, responsive frontend applications and studying data science — turning ideas into intuitive digital experiences.",

  // Availability text shown in the Contact section
  location: "Available Worldwide · Remote & On-Site",

  // Your contact email (shown in Contact section with a copy button)
  email: "nexoradigitalway@gmail.com",

  // Your GitHub profile URL
  github: "https://github.com/pasindu157",

  // Your LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/pasindu-herath-077697250/",
};

// ─────────────────────────────────────────────────────────────
//  SECTION 2 · HERO STATS
//  The 4 small stat boxes below the hero headline.
//  Update the value and label to reflect your real numbers.
// ─────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: "3", label: "Frontend Demo Apps" },
  { value: "B.Sc", label: "Data Science Study" },
  { value: "10+", label: "Core Tech Stack" },
  { value: "100%", label: "UI Craft Focus" },
];

// ─────────────────────────────────────────────────────────────
//  SECTION 3 · SERVICES / CAPABILITIES
//  The 4 cards in the Services section.
//  Edit the title, description, and tags for each service you offer.
//  accent: 'cyan' | 'indigo' | 'violet' | 'emerald'
//  iconName: 'Code2' | 'BarChart3' | 'BrainCircuit' | 'Sparkles'
// ─────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "frontend",
    iconName: "Code2",
    accent: "cyan",
    subtitle: "UI Development",
    title: "Frontend Web Development",
    description:
      "Building responsive, interactive web applications using React, modern JavaScript, and Tailwind CSS with smooth animations and clean component architecture.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "datascience",
    iconName: "BarChart3",
    accent: "indigo",
    subtitle: "Academic & Learning",
    title: "Data Science & Analytics",
    description:
      "Studying statistical modeling, machine learning fundamentals, data visualization, and predictive analytics as part of my B.Sc. Data Science program.",
    tags: ["Python", "Pandas", "Scikit-learn", "Data Visualization"],
  },
  {
    id: "uiux",
    iconName: "Sparkles",
    accent: "violet",
    subtitle: "Design & Motion",
    title: "UI/UX Design & Motion",
    description:
      "Crafting fluid 2D micro-interactions and 3D WebGL scenes using Framer Motion and Three.js to create visually memorable and intuitive web experiences.",
    tags: ["Three.js", "Framer Motion", "Responsive Design", "WebGL"],
  },
  {
    id: "tools",
    iconName: "BrainCircuit",
    accent: "emerald",
    subtitle: "Tooling & Workflow",
    title: "Dev Tooling & Clean Code",
    description:
      "Working with modern developer workflows including Git, Vite, component-driven architecture, and writing well-structured, maintainable code.",
    tags: ["Git", "Vite", "ESLint", "Component Architecture"],
  },
];

// ─────────────────────────────────────────────────────────────
//  SECTION 4 · PROJECTS
//  Your 3 demo projects. Update titles, descriptions, tech, and links.
//  previewType: 'hotel' | 'restaurant' | 'gym'  (controls the preview UI graphic)
//  For accent, borderAccent, badgeColor — a few preset combos are listed.
// ─────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: "hotel-app",
    previewType: "hotel",

    // ── Displayed labels ──
    title: "LuxeStay — Hotel Booking UI Demo",
    category: "Frontend Demo · React UI",

    // Short description on the card
    shortDesc:
      "A frontend-only hotel reservation and room showcase demo featuring interactive room browsing, date selection UI, and responsive booking flows.",

    // Full description shown inside the case study modal
    fullDesc:
      "LuxeStay is a frontend demonstration project focused on hospitality UI/UX. It showcases room filtering, interactive booking steps, and a simulated property overview interface built purely on the client side with static/mock data — no backend, database, or ML involved.",

    // Tech stack tags (what you actually used)
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],

    // 3 small metric boxes on the card
    metrics: [
      { label: "Scope", value: "Frontend" },
      { label: "Data Source", value: "Mock UI" },
      { label: "Design", value: "Responsive" },
    ],

    // Bullet points inside the case study modal
    features: [
      "Interactive room showcase with client-side filtering & category views",
      "Multi-step reservation & booking summary UI flow",
      "Clean hospitality layout with responsive mobile & desktop breakpoints",
      "Pure frontend demo using static mock data — no backend or database",
    ],

    // ── Links ──
    githubUrl: "https://github.com/yourusername/hotel-app", // ← your real repo
    liveUrl: "https://your-hotel-demo.vercel.app", // ← live URL or '#contact'

    // ── Filter tag — which tab this project appears under ──
    // Options: 'Frontend' | 'Full-Stack' | 'Data Science' | 'ML / AI' | 'Mobile' | 'Other'
    filterTag: "Frontend",

    // ── Styling (leave as-is or swap to another preset) ──
    accent: "from-cyan-500/20 via-sky-500/10 to-indigo-500/20",
    borderAccent: "group-hover:border-cyan-400/50",
    badgeColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
  },

  {
    id: "restaurant-app",
    previewType: "restaurant",

    title: "Savoria — Restaurant Menu & Ordering Demo",
    category: "Frontend Demo · Interactive UI",

    shortDesc:
      "A frontend-only digital dining and menu ordering demo featuring interactive dish filtering, cart state management, and table booking UI.",

    fullDesc:
      "Savoria is a client-side restaurant web app demo designed around smooth food discovery and ordering UX. Users can browse categorized menus, manage a live client-side cart, and preview table reservation forms — using mock data with no backend, database, or ML.",

    tech: ["React", "JavaScript", "Tailwind CSS", "Client State"],

    metrics: [
      { label: "Scope", value: "Frontend" },
      { label: "Cart State", value: "Client-Side" },
      { label: "Data Source", value: "Mock UI" },
    ],

    features: [
      "Interactive digital menu with category tabs and dietary filter UI",
      "Client-side shopping cart drawer with quantity & subtotal updates",
      "Table reservation form UI and order confirmation preview",
      "Pure frontend demo using static mock data — no backend or database",
    ],

    githubUrl: "https://github.com/yourusername/restaurant-app",
    liveUrl: "https://your-restaurant-demo.vercel.app",

    // ── Filter tag ──
    filterTag: "Frontend",

    accent: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    borderAccent: "group-hover:border-amber-400/50",
    badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/30",
  },

  {
    id: "gym-app",
    previewType: "gym",

    title: "PulseFit — Gym & Fitness UI Demo",
    category: "Frontend Demo · Fitness UI",

    shortDesc:
      "A frontend-only fitness club and workout interface demo featuring class schedules, workout plan cards, and membership tier layouts.",

    fullDesc:
      "PulseFit is a frontend demonstration project for a modern fitness brand. It highlights workout split cards, class timetable views, and interactive membership plan comparisons built entirely on the frontend with mock data — no backend, database, or ML.",

    tech: ["React", "JavaScript", "Tailwind CSS", "UI Animations"],

    metrics: [
      { label: "Scope", value: "Frontend" },
      { label: "Data Source", value: "Mock UI" },
      { label: "Layout", value: "Interactive" },
    ],

    features: [
      "Interactive workout split & exercise program showcase cards",
      "Class schedule timetable & membership plan comparison UI",
      "Responsive dashboard-style progress UI with static sample metrics",
      "Pure frontend demo using static mock data — no backend or database",
    ],

    githubUrl: "https://github.com/yourusername/gym-app",
    liveUrl: "https://your-gym-demo.vercel.app",

    // ── Filter tag ──
    filterTag: "Frontend",

    accent: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    borderAccent: "group-hover:border-emerald-400/50",
    badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
  },

  // ──────────────────────────────────────────────────────────────────
  //  ADD YOUR FUTURE PROJECTS BELOW — just copy one block above,
  //  paste it here, and fill in your details.
  //
  //  filterTag options (pick one per project):
  //    'Frontend'      — React / HTML / CSS UI projects
  //    'Full-Stack'    — projects with a backend & database
  //    'Data Science'  — data analysis, visualization, notebooks
  //    'ML / AI'       — machine learning or AI-powered projects
  //    'Mobile'        — mobile apps (React Native, Flutter, etc.)
  //    'Other'         — anything else
  //
  //  You can also add NEW tag names — the filter tabs will appear
  //  automatically in the Projects section. No other code change needed.
  // ──────────────────────────────────────────────────────────────────
];

// ─────────────────────────────────────────────────────────────
//  SECTION 5 · SKILLS
//  Shown as animated progress bars in the About section.
//  level: 0–100  (percentage filled)
//  color: 'cyan' | 'indigo' | 'emerald'
// ─────────────────────────────────────────────────────────────

export const SKILLS = [
  {
    group: "Software Development",
    color: "cyan",
    items: [
      { name: "React & Modern JavaScript", level: 85 }, // ← adjust to your honest level
      { name: "HTML & CSS / Tailwind", level: 90 },
      { name: "Git & Version Control", level: 80 },
      { name: "REST API Integration", level: 75 },
    ],
  },
  {
    group: "Data Science (Academic)",
    color: "indigo",
    items: [
      { name: "Python (Pandas, NumPy)", level: 55 },
      { name: "Statistics & Probability", level: 60 },
      { name: "Data Visualization", level: 65 },
      { name: "Machine Learning Fundamentals", level: 70 },
    ],
  },
  {
    group: "UI, 3D & Tooling",
    color: "emerald",
    items: [
      { name: "Responsive UI & Accessibility", level: 88 },
      { name: "Framer Motion & Animations", level: 65 },
      { name: "Three.js / WebGL Basics", level: 45 },
      { name: "Vite, ESLint & Dev Tooling", level: 80 },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
//  SECTION 6 · ABOUT — TIMELINE
//  Shown as the vertical timeline in the About section.
//  Add, remove, or reorder items freely.
// ─────────────────────────────────────────────────────────────

export const TIMELINE = [
  {
    period: "Present",
    title: "Data Science Undergraduate (B.Sc.)",
    org: "Sri Lanka Institute of Information Technology(SLIIT)", // ← update this
    detail:
      "Specializing in statistical modeling, machine learning fundamentals, data engineering pipelines, and applied predictive analytics.",
  },
  {
    period: "Ongoing",
    title: "Fullstack Developer",
    org: "Self-Taught & Demo Projects",
    detail:
      "Building responsive demo projects including LuxeStay (Hotel UI), Savoria (Restaurant UI), and PulseFit (Gym UI) with React and motion design.",
  },
  {
    period: "Focus",
    title: "Learning Full-Stack & ML",
    org: "Next Goal",
    detail:
      "Working toward adding backend skills (Node.js / FastAPI) and applying data science knowledge to real production applications.",
  },
];

// ─────────────────────────────────────────────────────────────
//  SECTION 7 · ABOUT — SHORT BIO
//  The paragraph shown inside the About card.
// ─────────────────────────────────────────────────────────────

export const BIO =
  "I love building clean, responsive web interfaces that feel great to use. Through my frontend demo projects I focus on smooth motion design, intuitive UX, and well-structured React code. As a Data Science undergraduate I'm deepening my foundation in Python, statistical modeling, and machine learning — with a goal to bring both disciplines together in future full-stack and data-driven products.";

// ─────────────────────────────────────────────────────────────
//  SECTION 8 · CONTACT — AVAILABILITY TEXT
//  Shown in the Contact section header.
// ─────────────────────────────────────────────────────────────

export const CONTACT_INFO = {
  headline: "Let's Build Something Remarkable",
  subtext:
    "Open to frontend developer internships, software engineering roles, freelance UI projects, and collaborative data science work.",
};
