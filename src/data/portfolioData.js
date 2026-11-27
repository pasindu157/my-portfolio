// ─────────────────────────────────────────────────────────────
//  portfolioData.js
//  Re-exports all data from the central config file so that
//  existing component imports continue to work unchanged.
//
//  ✏️  To update your portfolio details, edit:
//      src/config/portfolio.config.js
// ─────────────────────────────────────────────────────────────

import {
  BIO,
  CONTACT_INFO,
  HERO_STATS,
  PERSONAL,
  PROJECTS,
  SERVICES,
  SKILLS,
  TIMELINE,
} from '../config/portfolio.config.js';

// Build the PROFILE object that components import
export const PROFILE = {
  brand:    PERSONAL.brand,
  name:     PERSONAL.name,
  roles:    PERSONAL.roles,
  tagline:  PERSONAL.tagline,
  location: PERSONAL.location,
  email:    PERSONAL.email,
  github:   PERSONAL.github,
  linkedin: PERSONAL.linkedin,
  stats:    HERO_STATS,
};

export { BIO, CONTACT_INFO, PROJECTS, SERVICES, SKILLS, TIMELINE };
