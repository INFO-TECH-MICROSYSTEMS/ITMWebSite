import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Landmark, HeartPulse, Cloud, Lock } from 'lucide-react';
import { INDUSTRY_VERTICALS, COMPLIANCE_STANDARDS, type IndustryVertical, type ComplianceStandard } from '../../data/enterpriseData';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Landmark,
  HeartPulse,
  Cloud
};

export const IndustrySolutionsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#070b19]/60 border-t border-b border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-400 dark:border-cyan-500/30 mb-3 font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t('industries.badge', 'SPECIALIZED SECTORS & DOMAIN EXPERTISE')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] mb-4">
            {t('industries.title', 'Engineering Tailored to Regulated Industries')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('industries.subtitle', 'We combine hands-on technical architecture with deep regulatory comprehension, delivering software solutions that satisfy stringent audits, zero-downtime requirements, and data sovereignty laws.')}
          </p>
        </div>

        {/* 4 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INDUSTRY_VERTICALS.map((industry: IndustryVertical) => {
            const Icon = iconMap[industry.iconName] || Building2;
            const title = String(t(`industriesData.${industry.id}.name`, industry.name));
            const badge = String(t(`industriesData.${industry.id}.badge`, industry.badge));
            const summary = String(t(`industriesData.${industry.id}.summary`, industry.summary));
            const outcome = String(t(`industriesData.${industry.id}.benchmarkOutcome`, industry.benchmarkOutcome));

            return (
              <div 
                key={industry.id}
                className="rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200/60 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 block mb-1">
                    {badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit'] mb-3">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {summary}
                  </p>
                  
                  {/* Compliance drivers list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 mb-4">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold block">
                      {t('industries.regulatoryFrameworks', 'Regulatory Frameworks:')}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.complianceDrivers.map((cd: string, idx: number) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {cd}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-cyan-800 dark:text-cyan-300 bg-cyan-50/50 dark:bg-cyan-950/30 p-2.5 rounded-lg">
                  <span className="font-bold block text-[10px] uppercase text-cyan-700 dark:text-cyan-400 mb-0.5">
                    {t('industries.targetBenchmark', 'Target Benchmark:')}
                  </span>
                  {outcome}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Compliance & Trust Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#0a1228] to-slate-900 border border-cyan-500/30 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                <Lock className="w-3.5 h-3.5" />
                <span>{t('compliance.badge', 'INSTITUTIONAL TRUST & INTEGRITY')}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
                {t('compliance.title', 'Security, Data Sovereignty & Canadian Compliance')}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('compliance.desc', 'Info Tech Microsystems operates under rigorous compliance baselines, ensuring non-disclosure security, sovereign data containment, and audit traceability for government and enterprise partners.')}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPLIANCE_STANDARDS.map((std: ComplianceStandard) => (
                <div key={std.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90 space-y-1.5 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                      {std.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {std.governanceScope}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-['Outfit'] pt-1">
                    {std.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

