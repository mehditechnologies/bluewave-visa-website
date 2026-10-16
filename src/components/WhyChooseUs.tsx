import React from 'react';
import { 
  ShieldCheck, 
  Star, 
  Lock, 
  CreditCard 
} from 'lucide-react';
import { WHY_CHOOSE_US, TESTIMONIALS, FAQS } from '../data/websiteData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Metrics Container - Clean White & Slate Design */}
        <div className="rounded-3xl bg-slate-50 p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Verified Track Record Since 2010
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Why Discerning Travelers & Students Trust Blue Wave
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-brand-300 transition-colors">
                <div className="text-3xl sm:text-4xl font-black font-heading text-brand-700">
                  {item.stat}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1">
                  {item.label}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 leading-tight">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Three Trust Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-200 text-xs sm:text-sm">
            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <CreditCard className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">100% Fee Transparency</strong>
                <span className="text-slate-600">Pay official embassy visa fees directly from your own bank card. Zero hidden charges or surprise markups.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Refusal Case Justifications</strong>
                <span className="text-slate-600">Our senior consultants retrieve official GCMS refusal notes and file structured legal appeal files.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Confidential Document Vault</strong>
                <span className="text-slate-600">Your passports, FRCs, and financial assets are handled strictly under non-disclosure security standards.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Verified Client Feedback
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Authentic Stories from Successful Applicants
            </h3>
            <p className="text-slate-600 text-sm">
              Read how Blue Wave guided travelers and students toward their visa approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{t.name}</div>
                    <div className="text-[10px] text-brand-700 font-semibold">{t.country}</div>
                  </div>
                  <span className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div id="faqs" className="mt-24 max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Frequently Asked Questions
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Clarifications & Advisory Guidelines
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs"
              >
                <h4 className="text-base font-bold text-slate-900 flex items-start space-x-2">
                  <span className="text-brand-700 font-black">Q{idx+1}.</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
