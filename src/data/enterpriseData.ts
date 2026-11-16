/**
 * Copyright (c) 2026 Info Tech Microsystems. All Rights Reserved.
 * 
 * Enterprise Case Studies, Industry Verticals, Delivery Framework & Compliance Specifications
 */

export interface CaseStudy {
  id: string;
  slug: string;
  industry: string;
  clientType: string;
  title: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
    context: string;
  }[];
  tags: string[];
  duration: string;
}

export interface IndustryVertical {
  id: string;
  name: string;
  badge: string;
  iconName: string;
  summary: string;
  complianceDrivers: string[];
  coreOfferings: string[];
  benchmarkOutcome: string;
}

export interface EngagementProcessStep {
  step: string;
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ComplianceStandard {
  id: string;
  badge: string;
  name: string;
  description: string;
  governanceScope: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-bfsi',
    slug: 'tier1-banking-microservices',
    industry: 'Banking & Financial Services',
    clientType: 'North American Tier-1 Retail & Commercial Bank',
    title: 'Core Banking API Modernization & Zero-Downtime Pipeline',
    challenge: 'A legacy monolithic core banking core was suffering from 48-hour release cadences, high defect leakage into production staging, and brittle regression testing bottlenecks.',
    solution: 'Info Tech Microsystems embedded a specialized architecture squad to decouple payment flows into event-driven cloud-native microservices, authoring automated contract verification and canary deployment gates.',
    results: [
      { metric: '78%', label: 'Release Lead Time Reduction', context: 'From 48 hours down to under 10.5 hours' },
      { metric: '0', label: 'Unplanned Deployment Outages', context: 'Across 14 consecutive production release cycles' },
      { metric: '91%', label: 'Automated API Test Coverage', context: 'Shift-left synthetic verification in CI/CD' }
    ],
    tags: ['Microservices', 'Spring Boot', 'Kubernetes', 'Contract Testing', 'Zero Downtime'],
    duration: '6 Months Embedded Execution'
  },
  {
    id: 'cs-health',
    slug: 'healthcare-saas-quality-transformation',
    industry: 'Healthcare & Life Sciences',
    clientType: 'Enterprise Telehealth & Clinical EHR Provider',
    title: 'HIPAA & PIPEDA-Compliant Automated Quality Engineering Architecture',
    challenge: 'Expanding regulatory scrutiny and cross-platform mobile/web releases caused testing delays and inconsistent compliance audit trails across multi-tenant hospital deployments.',
    solution: 'Engineered a unified, end-to-end automated test framework using Playwright, Cypress, and custom synthetic data generators, fully isolating patient health data while verifying strict compliance gates.',
    results: [
      { metric: '94%', label: 'Regression Suite Automation', context: 'Replaced 120 manual hours with a 22-minute parallel CI run' },
      { metric: '65%', label: 'Defect Escape Reduction', context: 'Critical defects caught prior to staging delivery' },
      { metric: '100%', label: 'Audit Compliance Pass Rate', context: 'Certified against HIPAA and PIPEDA technical controls' }
    ],
    tags: ['Healthcare QA', 'Playwright', 'Synthetic Data', 'PIPEDA', 'SOC 2'],
    duration: '4 Months Targeted Engagement'
  },
  {
    id: 'cs-public',
    slug: 'public-sector-dora-acceleration',
    industry: 'Public Sector & Crown Corporations',
    clientType: 'Canadian Federal Agency Digital Services',
    title: 'Cloud Transformation & Engineering Workforce Capability Elevation',
    challenge: 'Development teams struggled with siloed waterfall handoffs, fragmented test scripts, and prolonged procurement-to-production deployment cycles.',
    solution: 'Instituted modern agile engineering disciplines, pair-programming academies, and automated shift-left security tooling, upskilling 45+ civil service engineers into high-velocity cloud delivery practitioners.',
    results: [
      { metric: '4.2x', label: 'Deployment Frequency Multiplier', context: 'Transitioned from quarterly releases to bi-weekly sprints' },
      { metric: '45+', label: 'Engineers Certified & Mentored', context: 'In modern automated test design and CI/CD operations' },
      { metric: '55%', label: 'Mean Time to Recovery (MTTR) Improvement', context: 'Automated monitoring alerts and rollback scripts' }
    ],
    tags: ['Workforce Upskilling', 'AWS GovCloud', 'DORA Acceleration', 'Infrastructure as Code'],
    duration: '8 Months Turnkey Transformation'
  }
];

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    id: 'bfsi',
    name: 'Banking, Financial Services & Insurance (BFSI)',
    badge: 'FinTech & Core Banking',
    iconName: 'Building2',
    summary: 'High-throughput transactional resilience, open banking APIs, real-time settlement architectures, and rigorous financial audit readiness.',
    complianceDrivers: ['PCI-DSS Level 1', 'OSFI B-10 / B-13 Guidance', 'SOC 2 Type II', 'ISO 20022'],
    coreOfferings: ['Core Monolith Decoupling', 'Automated Financial Reconciliation Test Suites', 'Real-Time Fraud Gating Architecture'],
    benchmarkOutcome: 'Sub-second API execution with 99.999% SLA availability.'
  },
  {
    id: 'public-sector',
    name: 'Government & Public Sector Services',
    badge: 'Federal & Provincial',
    iconName: 'Landmark',
    summary: 'Secure citizen-facing portals, accessibility adherence, bilingual accessibility frameworks, and Canadian sovereign cloud engineering.',
    complianceDrivers: ['Canadian Protected B Readiness', 'Treasury Board Standard on Systems Quality', 'WCAG 2.1 AA Compliance', 'PIPEDA'],
    coreOfferings: ['Cloud Migration & DevSecOps Hardening', 'Accessibility & Usability Audits', 'Engineering Workforce Upskilling'],
    benchmarkOutcome: 'Full adherence to Canadian Government digital delivery standards.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare, MedTech & Life Sciences',
    badge: 'Clinical Data & EHR',
    iconName: 'HeartPulse',
    summary: 'Fault-tolerant electronic health records, interoperable HL7/FHIR microservices, and synthetic privacy-preserving quality verification.',
    complianceDrivers: ['PIPEDA (Canada)', 'HIPAA Security Rule', 'ISO 13485 (Software as Medical Device)', 'GDPR'],
    coreOfferings: ['Synthetic Patient Data Generators', 'EHR Microservice Architecture', 'Automated HIPAA Compliance Verification'],
    benchmarkOutcome: 'Zero-leakage patient data isolation in continuous integration pipelines.'
  },
  {
    id: 'saas-tech',
    name: 'Enterprise Cloud SaaS & Scale-Ups',
    badge: 'High-Growth Tech',
    iconName: 'Cloud',
    summary: 'Multi-tenant cloud infrastructure, DORA metric optimization, zero-downtime blue/green deployments, and staff augmentation.',
    complianceDrivers: ['SOC 2 Type II', 'AWS / Azure Well-Architected Framework', 'GDPR', 'ISO 27001'],
    coreOfferings: ['Automated End-to-End Regression Harnesses', 'Elite DORA Metrics Engineering', 'Technical Leadership Advisory'],
    benchmarkOutcome: 'Continuous daily deployment frequency with less than 1 hour MTTR.'
  }
];

export const ENGAGEMENT_PROCESS_STEPS: EngagementProcessStep[] = [
  {
    step: '01',
    phase: 'Discovery & Architectural Health Check',
    duration: 'Weeks 1 – 2',
    title: 'Deep-Dive Diagnostic & Baseline Assessment',
    description: 'We audit your codebases, CI/CD pipelines, test coverage telemetry, and team workflows to quantify technical debt and target ROI bottlenecks.',
    deliverables: ['Executive Architectural Audit Report', 'DORA Baseline Scorecard', 'Actionable 90-Day Engineering Roadmap']
  },
  {
    step: '02',
    phase: 'Architecture & Framework Engineering',
    duration: 'Weeks 3 – 8',
    title: 'Embedded Delivery & Systems Modernization',
    description: 'Our senior specialists embed alongside your staff to build production-grade microservices, automated regression suites, or CI/CD pipelines.',
    deliverables: ['Modular Cloud-Native Components', 'Automated Test Automation Harness', 'Infrastructure-as-Code Declarations']
  },
  {
    step: '03',
    phase: 'Shift-Left QA & Pipeline Hardening',
    duration: 'Weeks 9 – 14',
    title: 'Continuous Verification & Security Gates',
    description: 'Implementation of synthetic test data pipelines, automated contract tests, accessibility checkers, and performance benchmarking suites.',
    deliverables: ['Zero-Downtime Deployment Blueprints', 'Automated Compliance & Security Gates', 'Defect Escape Monitoring Telemetry']
  },
  {
    step: '04',
    phase: 'Workforce Elevation & Knowledge Handoff',
    duration: 'Weeks 15 – 16+',
    title: 'Institutional Knowledge & Long-Term Independence',
    description: 'Through hands-on pairing, comprehensive documentation, and structured workshops, we empower your internal engineering organization for enduring self-sufficiency.',
    deliverables: ['Comprehensive System Architecture Runbooks', 'Technical Training & Pair Programming Workshops', 'Quarterly Executive Review Framework']
  }
];

export const COMPLIANCE_STANDARDS: ComplianceStandard[] = [
  {
    id: 'pipeda',
    badge: 'Canadian Privacy Law',
    name: 'PIPEDA & Sovereign Data Compliance',
    description: 'Engineering systems that strictly uphold Canada\'s Personal Information Protection and Electronic Documents Act, ensuring data residency and encryption at rest and in transit.',
    governanceScope: 'Commercial & Cross-Border Data Privacy'
  },
  {
    id: 'soc2',
    badge: 'Security & Availability',
    name: 'SOC 2 Type II Architecture Alignment',
    description: 'Auditable CI/CD controls, role-based access controls, immutable infrastructure logs, and shift-left static vulnerability scanning.',
    governanceScope: 'Enterprise SaaS & Cloud Infrastructure'
  },
  {
    id: 'wcag',
    badge: 'Digital Accessibility',
    name: 'WCAG 2.1 AA & Section 508 Certification',
    description: 'Accessible UI component design, dual-coded visual indicators, keyboard-only traversals, and screen-reader compliant digital experiences.',
    governanceScope: 'Public Sector & Global Consumer Applications'
  },
  {
    id: 'govcloud',
    badge: 'Protected B Readiness',
    name: 'Canadian Public Sector Security Safeguards',
    description: 'Adherence to Canadian federal and provincial security guidelines, cryptographic key management, and zero-trust perimeter network architectures.',
    governanceScope: 'Government Agencies & Crown Corporations'
  }
];
