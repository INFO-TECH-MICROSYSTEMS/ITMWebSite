import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitBranch, CheckCircle2 } from 'lucide-react';
import { ENGAGEMENT_PROCESS_STEPS } from '../../data/enterpriseData';

export const DeliveryFrameworkSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-[#070a16] border-t border-slate-200 dark:border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-400 dark:border-cyan-500/30 mb-3 font-mono">
            <GitBranch className="w-3.5 h-3.5" />
            <span>{t('process.badge', 'DELIVERY EXCELLENCE & METHODOLOGY')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] mb-4">
            {t('process.title', 'How Info Tech Microsystems Engages')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('process.subtitle', 'A battle-tested 4-stage engagement blueprint engineered for predictable timelines, complete transparency, shift-left quality, and lasting client self-sufficiency.')}
          </p>
        </div>

        {/* 4 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGEMENT_PROCESS_STEPS.map((step, idx) => {
            const phase = t(`processData.step${idx + 1}.phase`, step.phase);
            const title = t(`processData.step${idx + 1}.title`, step.title);
            const description = t(`processData.step${idx + 1}.description`, step.description);

            return (
              <div 
                key={step.step}
                className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Timeline Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-['Outfit'] text-cyan-600 dark:text-cyan-400">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                      {step.duration}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold uppercase text-cyan-700 dark:text-cyan-400 block mb-1">
                    {phase}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit'] mb-3">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {description}
                  </p>
                </div>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-2">
                    {t('process.verifiedDeliverables', 'Verified Deliverables:')}
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {step.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
