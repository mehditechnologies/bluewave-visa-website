import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Star,
  Compass,
  Award
} from 'lucide-react';
import { DESTINATIONS, CONTACT_INFO } from '../data/websiteData';

interface HeroProps {
  onOpenAssessment: () => void;
  onSelectCountry?: (countryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment }) => {
  const [selectedCountry, setSelectedCountry] = useState('canada');
  const [selectedVisaType, setSelectedVisaType] = useState('Tourist');

  const handleQuickInquire = () => {
    const countryObj = DESTINATIONS.find(c => c.id === selectedCountry);
    const countryName = countryObj ? countryObj.name : selectedCountry;
    const msg = encodeURIComponent(
      `Hello Blue Wave Visa Consultant! I would like to inquire about a ${selectedVisaType} Visa for ${countryName}. Please guide me regarding requirements, process timeline, and fee structure.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/90 overflow-hidden text-slate-800">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-brand-800 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-700 flex-shrink-0" />
              <span>Certified Visa Advisory • Islamabad HQ & Baku Office</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black font-heading tracking-tight text-slate-900 leading-[1.15]">
              Professional Visa Advisory for Your{' '}
              <span className="text-brand-700">
                Study & Travel
              </span>{' '}
              Aspirations
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Specialized consultancy for <strong className="text-slate-900 font-semibold">Canada, New Zealand, Australia, Schengen Europe, Japan, USA</strong>, and 26+ destinations with official invitation dossiers and transparent fee processing.
            </p>

            {/* High-Impact Trust Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-700 font-semibold pt-1">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>98% Document Approval Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Islamabad & Baku Offices</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Pay Fee from Your Own Card</span>
              </div>
            </div>

            {/* Quick Consultation Search Box */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/40 text-left">
              <div className="text-xs uppercase font-extrabold tracking-wider text-slate-600 mb-3 flex items-center">
                <Compass className="w-4 h-4 mr-1.5 text-brand-700" />
                Select Destination Country & Visa Stream
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Country Select */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Target Country
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full bg-slate-50 text-slate-800 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    {DESTINATIONS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.region})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Visa Type Select */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Visa Stream
                  </label>
                  <select
                    value={selectedVisaType}
                    onChange={(e) => setSelectedVisaType(e.target.value)}
                    className="w-full bg-slate-50 text-slate-800 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Tourist / Visit">✈️ Tourist / Visit Visa</option>
                    <option value="Study">🎓 Study Visa</option>
                    <option value="Invitation / Business">💼 Invitation / Business Visa</option>
                  </select>
                </div>

                {/* Action Button */}
                <div className="flex items-end">
                  <button
                    onClick={handleQuickInquire}
                    className="w-full py-2.5 px-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center space-x-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs sm:text-sm">
              <a
                href="#bumper-offers"
                className="font-bold text-brand-700 hover:text-brand-800 flex items-center space-x-1.5 bg-brand-50 hover:bg-brand-100 px-4 py-2 rounded-xl transition-colors border border-brand-200"
              >
                <span>Explore Featured Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenAssessment}
                className="font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 px-4 py-2 rounded-xl border border-slate-300 transition-colors shadow-2xs"
              >
                Free Profile Assessment
              </button>
            </div>

          </div>

          {/* Right Column: Clean Corporate Showcase Card (Properly proportioned) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-md lg:ml-auto">
              
              <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white p-3.5 sm:p-4">
                
                {/* Landmark Photo with Proper Proportional Aspect Ratio */}
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden group shadow-xs">
                  <img
                    src="/countries/azerbaijan.jpg"
                    alt="Baku Azerbaijan Caspian Skyline"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Verified Rating Pill */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm border border-slate-200">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>4.9 / 5.0 Rated Consultancy</span>
                  </div>

                  {/* Overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-cyan-300 block mb-0.5 uppercase tracking-wider">
                      Islamabad HQ • Baku Branch
                    </span>
                    <h3 className="text-lg font-extrabold font-heading">
                      Specialized Dossier Filing & Fast-Track Visas
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                      Multiple entry tourist visas, official invitation arrangements, and complete university admissions.
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-100 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-[11px] text-slate-500 font-medium">Turnaround</div>
                    <div className="text-xs font-extrabold text-slate-900 mt-0.5">2 - 7 Days</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-[11px] text-slate-500 font-medium">Visa Ratio</div>
                    <div className="text-xs font-extrabold text-emerald-600 mt-0.5">98% Verified</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-[11px] text-slate-500 font-medium">Global Presence</div>
                    <div className="text-xs font-extrabold text-brand-700 mt-0.5">Islamabad & Baku</div>
                  </div>
                </div>

                {/* In-Card Credential Note */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-brand-700 flex-shrink-0" />
                    <span className="font-semibold text-slate-900">Registered Firm • Legal Embassy Compliance</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Est. 2010</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
