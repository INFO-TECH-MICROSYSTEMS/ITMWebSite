import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calculator, CheckCircle2, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EngagementModel {
  id: string;
  name: string;
  ratePerWeek: number;
  description: string;
  deliverables: string[];
}

const MODELS: EngagementModel[] = [
  {
    id: 'advisory',
    name: 'Strategic Architecture & Code Audit',
    ratePerWeek: 7500,
    description: 'Fractional Principal Architect embedding for system reviews, technical due diligence, DORA gap assessments, and roadmap governance.',
    deliverables: ['Executive Audit Deck', 'Technical Debt Matrix', 'Risk & Gating Checklist']
  },
  {
    id: 'squad',
    name: 'Turnkey Embedded Engineering Squad',
    ratePerWeek: 18500,
    description: 'Cross-functional delivery unit (Lead Architect, 2 Senior Engineers, 1 QA Automation Lead) delivering cloud microservices or pipeline modernization.',
    deliverables: ['Production Microservices', 'Automated CI/CD Test Pipeline', 'Runbooks & Training']
  },
  {
    id: 'qa-framework',
    name: 'Shift-Left QA & Test Automation Harness',
    ratePerWeek: 12000,
    description: 'Design and implementation of custom automated test frameworks (Playwright, Cypress, synthetic data generators) achieving >90% test coverage.',
    deliverables: ['Unified E2E Automation Repo', 'Synthetic Data Factory', 'SonarQube Quality Gates']
  },
  {
    id: 'upskilling',
    name: 'Workforce Elevation & Academy Mentorship',
    ratePerWeek: 9000,
    description: 'Structured technical pairing and intensive workshop curriculum upskilling client teams in automated test design and cloud-native practices.',
    deliverables: ['Custom Workshop Curriculum', 'Paired Code Reviews', 'Team Certification Audits']
  }
];

export const EngagementEstimator: React.FC = () => {
  const { t } = useTranslation();

  const [selectedModel, setSelectedModel] = useState<string>('squad');
  const [durationWeeks, setDurationWeeks] = useState<number>(12);
  const [complianceRequired, setComplianceRequired] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const currentModel = MODELS.find(m => m.id === selectedModel) || MODELS[1];
  const complianceFactor = complianceRequired ? 1.15 : 1.0;
  const estimatedCost = Math.round(currentModel.ratePerWeek * durationWeeks * complianceFactor);

  const summaryText = 
    `INFO TECH MICROSYSTEMS - ENGAGEMENT SCOPE SUMMARY\n` +
    `--------------------------------------------------\n` +
    `Engagement Model: ${currentModel.name}\n` +
    `Target Duration: ${durationWeeks} Weeks (~${Math.round(durationWeeks / 4)} Months)\n` +
    `Regulatory / Sovereign Data Containment: ${complianceRequired ? 'YES (PIPEDA / SOC 2 / Protected B Baseline)' : 'Standard Enterprise'}\n` +
    `Estimated Investment Range: $${(estimatedCost * 0.95).toLocaleString()} - $${(estimatedCost * 1.05).toLocaleString()} CAD\n` +
    `Primary Deliverables:\n` +
    currentModel.deliverables.map(d => ` • ${d}`).join('\n') + `\n` +
    `--------------------------------------------------\n` +
    `Inquiries: contact@infotechmicrosystems.com / +1 613 266 5285`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 shadow-xl space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30 mb-2">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t('estimator.badge', 'INTERACTIVE ENGAGEMENT SCOPE & BUDGET ESTIMATOR')}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
          {t('estimator.title', 'Configure Your Consulting Engagement Scope')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
          {t('estimator.subtitle', 'Model projected timelines, deliverables, and resource allocations for planning board approvals and technical procurement.')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Select Model */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold mb-3">
              {t('estimator.selectModel', '1. Select Delivery Unit & Engagement Model:')}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MODELS.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedModel === model.id
                      ? 'bg-cyan-50/80 border-cyan-500 dark:bg-cyan-950/60 dark:border-cyan-400 text-slate-900 dark:text-white shadow-md'
                      : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm font-['Outfit'] mb-1 text-slate-900 dark:text-white">
                    {model.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
                    {model.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Duration Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold">
                {t('estimator.engagementDuration', '2. Engagement Duration (Weeks):')}
              </label>
              <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                {durationWeeks} {t('estimator.weeks', 'Weeks')} (~{Math.round(durationWeeks / 4)} {t('estimator.months', 'Months')})
              </span>
            </div>
            <input 
              type="range"
              min={4}
              max={52}
              step={2}
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(Number(e.target.value))}
              className="w-full accent-cyan-600 dark:accent-cyan-400 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
              <span>4 Weeks (Sprint Pilot)</span>
              <span>12 Weeks (Quarterly Modernization)</span>
              <span>24 Weeks (Half-Year)</span>
              <span>52 Weeks (Full Program)</span>
            </div>
          </div>

          {/* Regulatory / Compliance Toggle */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white font-['Outfit'] block">
                {t('estimator.complianceSupport', 'Regulated Sector / Sovereign Data Gating')}
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {t('estimator.complianceHelp', 'Requires PIPEDA, SOC 2 Type II, or Canadian Protected B cryptographic safeguards and security runbooks.')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setComplianceRequired(prev => !prev)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                complianceRequired ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            >
              <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                complianceRequired ? 'translate-x-7' : 'translate-x-1'
              }`}></span>
            </button>
          </div>

        </div>

        {/* Output Estimation Card */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0a1226] border border-cyan-500/40 text-white shadow-xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              {t('estimator.summaryTitle', 'Estimated Scope Summary')}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              CAD Currency
            </span>
          </div>

          <div>
            <span className="text-xs text-slate-400 font-mono block">
              {t('estimator.projectedCostRange', 'Projected Investment Range:')}
            </span>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-['Outfit'] mt-1">
              ${(estimatedCost * 0.95).toLocaleString()} – ${(estimatedCost * 1.05).toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Based on {durationWeeks} weeks of embedded delivery ({currentModel.name}).
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              {t('estimator.includedDeliverables', 'Standard Verified Deliverables:')}
            </span>
            <ul className="space-y-1.5">
              {currentModel.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t('common.copied', 'Copied to Clipboard!') : t('estimator.copyScope', 'Copy Scope Summary')}</span>
            </button>
            <Link
              to="/contact"
              className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/50"
            >
              <span>{t('estimator.requestFormalProposal', 'Request Formal Proposal →')}</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
