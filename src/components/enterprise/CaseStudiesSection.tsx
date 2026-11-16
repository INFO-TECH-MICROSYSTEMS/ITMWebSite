import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../../data/enterpriseData';

export const CaseStudiesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 dark:border-purple-500/30 mb-3 font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t('caseStudies.badge', 'PROVEN DELIVERY TRACK RECORD')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
            {t('caseStudies.title', 'Enterprise Case Studies & Tangible ROI')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
            {t('caseStudies.subtitle', 'Real-world transformation outcomes delivered across banking microservices, regulated healthcare QA frameworks, and public sector modernization programs.')}
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center space-x-2 text-xs font-semibold font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shrink-0"
        >
          <span>{t('caseStudies.discussSimilar', 'Discuss a Similar Engagement →')}</span>
        </Link>
      </div>

      {/* Case Studies Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((cs) => {
          const industry = t(`caseStudiesData.${cs.id}.industry`, cs.industry);
          const clientType = t(`caseStudiesData.${cs.id}.clientType`, cs.clientType);
          const title = t(`caseStudiesData.${cs.id}.title`, cs.title);
          const challenge = t(`caseStudiesData.${cs.id}.challenge`, cs.challenge);
          const solution = t(`caseStudiesData.${cs.id}.solution`, cs.solution);

          return (
            <div 
              key={cs.id}
              className="rounded-3xl p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-5">
                {/* Header Tag and Client Category */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-700 dark:text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/30">
                    {industry}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {cs.duration}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  {clientType}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit'] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {title}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-200 block mb-0.5 font-mono uppercase text-[10px] tracking-wider text-rose-600 dark:text-rose-400">
                      {t('caseStudies.theChallenge', 'The Challenge:')}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">{challenge}</p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-200 block mb-0.5 font-mono uppercase text-[10px] tracking-wider text-cyan-600 dark:text-cyan-400">
                      {t('caseStudies.theSolution', 'Our Solution:')}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">{solution}</p>
                  </div>
                </div>

                {/* Key Quantifiable Results Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-100 dark:border-slate-800/80 text-center">
                      <div className="text-lg sm:text-xl font-black text-cyan-600 dark:text-cyan-400 font-['Outfit']">
                        {res.metric}
                      </div>
                      <div className="text-[9px] font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 line-clamp-2 mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags footer */}
              <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 mt-5 flex flex-wrap gap-1.5">
                {cs.tags.map((tTag, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    #{tTag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
