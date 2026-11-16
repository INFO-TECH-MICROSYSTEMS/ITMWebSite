import React from 'react';
import { useTranslation } from 'react-i18next';

const ECOSYSTEM_PARTNERS = [
  { name: 'Amazon Web Services', category: 'Cloud Architecture & GovCloud', tag: 'AWS' },
  { name: 'Microsoft Azure', category: 'Enterprise Cloud & Sovereign Data', tag: 'Azure' },
  { name: 'Google Cloud Platform', category: 'Data & Containerized Infrastructure', tag: 'GCP' },
  { name: 'HashiCorp Terraform', category: 'Infrastructure-as-Code & Vault', tag: 'IaC' },
  { name: 'Kubernetes & Docker', category: 'Container Orchestration & Microservices', tag: 'K8s' },
  { name: 'GitHub Enterprise', category: 'CI/CD & DevSecOps Workflows', tag: 'DevOps' },
  { name: 'Playwright & Cypress', category: 'Shift-Left Test Automation Harnesses', tag: 'QA' },
  { name: 'SonarQube Enterprise', category: 'Static Code Quality & Security Gating', tag: 'Security' },
];

export const EcosystemPartnersStrip: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 border-t border-b border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b18]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
            {t('ecosystem.title', 'ENTERPRISE TOOLCHAINS & CLOUD ECOSYSTEM FLUENCY')}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
          {ECOSYSTEM_PARTNERS.map((partner, idx) => (
            <div 
              key={idx}
              className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all shadow-sm group"
            >
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 font-mono group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {partner.tag}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5" title={partner.name}>
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
