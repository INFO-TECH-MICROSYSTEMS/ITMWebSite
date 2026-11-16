import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const BASE_HTML = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(BASE_HTML)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(BASE_HTML, 'utf8');

// List of all application routes to generate as static HTML pages
const routes = [
  {
    path: '/about',
    title: 'About Us & Corporate Mission | Info Tech Microsystems',
    desc: 'Info Tech Microsystems closes the gap between high-level technology strategy and production-grade software delivery with architectural rigor and shift-left quality.'
  },
  {
    path: '/services',
    title: 'Enterprise Software Services (7 Core Disciplines) | Info Tech Microsystems',
    desc: 'Explore our 7 enterprise disciplines: Software Development, Lifecycle Architecture Consulting, Workforce Training, Quality Assurance, Technical Recruitment, KPIs & Audits, and Performance Management.'
  },
  {
    path: '/services/software-development',
    title: 'Software Development & Maintenance | Info Tech Microsystems',
    desc: 'Production-ready cloud microservices, reactive web applications, and resilient legacy system modernizations.'
  },
  {
    path: '/services/software-consulting',
    title: 'Architectural & Lifecycle Consulting | Info Tech Microsystems',
    desc: 'System architecture modernization, cloud migrations (AWS, Azure, GCP), and enterprise technology strategy.'
  },
  {
    path: '/services/workforce-training',
    title: 'Workforce & Team Technical Training | Info Tech Microsystems',
    desc: 'Curriculum-driven technical academies, pair-programming workshops, and automated test design upskilling.'
  },
  {
    path: '/services/quality-assurance',
    title: 'Quality Assurance & Test Engineering | Info Tech Microsystems',
    desc: 'Shift-left automated test frameworks (Playwright, Cypress), synthetic data generation, and continuous CI/CD gating.'
  },
  {
    path: '/services/technical-recruitment',
    title: 'Technical Staffing & Talent Recruitment | Info Tech Microsystems',
    desc: 'Rigorous technical screening and talent acquisition for top 5% software engineers, architects, and QA leads.'
  },
  {
    path: '/services/kpis-and-audits',
    title: 'Software Metrics, KPIs & Quality Audits | Info Tech Microsystems',
    desc: 'Quantitative software metrics, DORA benchmarks, SonarQube quality gates, and technical due diligence.'
  },
  {
    path: '/services/performance-management',
    title: 'Personnel & Team Performance Management | Info Tech Microsystems',
    desc: 'Objective engineering evaluations, sprint predictability analysis, and capability matrices.'
  },
  {
    path: '/tools',
    title: 'Interactive Engineering Tools & Scope Estimator | Info Tech Microsystems',
    desc: 'Interactive engagement scope estimator, DORA velocity health calculator, QA audit checklists, and squad capacity modelers.'
  },
  {
    path: '/contact',
    title: 'Contact Corporate Inquiries & Headquarters | Info Tech Microsystems',
    desc: 'Connect directly with Info Tech Microsystems headquarters in Ottawa, Canada for consultation, master service agreements, and proposal requests.'
  }
];

let count = 0;
for (const route of routes) {
  const dirPath = path.join(DIST_DIR, route.path.replace(/^\//, ''));
  fs.mkdirSync(dirPath, { recursive: true });

  let pageHtml = template;
  // Customize per-page title and meta description for SEO & social cards
  pageHtml = pageHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );
  pageHtml = pageHtml.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${route.desc}" />`
  );

  const outHtmlPath = path.join(dirPath, 'index.html');
  fs.writeFileSync(outHtmlPath, pageHtml, 'utf8');
  count++;
  console.log(`✓ Generated multi-page static route: ${route.path}/index.html`);
}

console.log(`\nSuccessfully pre-rendered ${count} multi-page static routes for production!`);
