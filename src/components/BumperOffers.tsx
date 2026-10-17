import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Gift, 
  FileText, 
  X, 
  Briefcase,
  ArrowLeft
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUMPER_OFFERS, type BumperOffer, CONTACT_INFO } from '../data/websiteData';

export const BumperOffers: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Combo Packages' | 'Single Country' | 'Europe & Schengen'>('All');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPoster(null);
    };
    if (selectedPoster) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPoster]);

  const filteredOffers = BUMPER_OFFERS.filter(offer => {
    if (activeFilter === 'Combo Packages') return offer.features.some(f => f.toLowerCase().includes('free') || offer.title.includes('&'));
    if (activeFilter === 'Single Country') return !offer.title.includes('&') && !offer.title.includes('+');
    if (activeFilter === 'Europe & Schengen') return offer.country.toLowerCase().includes('belgium') || offer.country.toLowerCase().includes('spain');
    return true;
  });

  const handleClaimOffer = (offer: BumperOffer) => {
    const text = encodeURIComponent(
      `Hello Blue Wave Visa Consultant! I would like to inquire about the "${offer.title}" package (${offer.price || 'Special Program'}). Please share the eligibility requirements, required documents, and procedure.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="bumper-offers" className="py-24 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-brand-600" />
            <span>Featured Visa Streams & Transparent Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Comprehensive Visa Packages with{' '}
            <span className="text-brand-700">
              Clear Inclusions
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Directly from Blue Wave official campaign announcements. Every package includes verified invitation letters, complete embassy document support, and transparent fee payments.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {(['All', 'Combo Packages', 'Single Country', 'Europe & Schengen'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-brand-700 text-white shadow-2xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Offers Grid - High-End Corporate Cards with Scenic Destination Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-brand-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Scenic Destination Photography Header (Replaces raw social media posters) */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={offer.cardImage}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('/countries/')) {
                        target.src = target.src.replace('/countries/', '/images/destinations/');
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-xs font-bold px-3 py-1 rounded-full shadow-xs bg-brand-700 text-white">
                      {offer.badge}
                    </span>
                  </div>

                  {/* Country Name on Image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-cyan-300 block mb-0.5 uppercase tracking-wider">
                      {offer.country}
                    </span>
                    <h4 className="text-lg font-black font-heading leading-tight drop-shadow-sm">
                      {offer.title}
                    </h4>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  {/* Pricing / Campaign Fee */}
                  {offer.price ? (
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-xs text-slate-500 block font-medium">Consultancy & Processing:</span>
                        <div className="flex items-baseline space-x-2 mt-0.5">
                          <span className="text-2xl font-black text-brand-800 font-heading">
                            {offer.price}
                          </span>
                          {offer.originalPrice && (
                            <span className="text-xs text-slate-400 line-through">
                              {offer.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        Official Campaign Rate
                      </span>
                    </div>
                  ) : (
                    <div className="border-b border-slate-100 pb-3">
                      <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                        Specialized Program Stream
                      </span>
                    </div>
                  )}

                  {/* Highlight */}
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {offer.highlight}
                  </p>

                  {/* Bonus Highlight Bar */}
                  {offer.bonusText && (
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center space-x-2 text-xs font-semibold text-amber-900">
                      <Gift className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{offer.bonusText}</span>
                    </div>
                  )}

                  {/* Key Features Bullet List */}
                  <ul className="space-y-2 text-xs text-slate-700 pt-1">
                    {offer.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-brand-700 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons & Optional Notice Preview */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => handleClaimOffer(offer)}
                  className="w-full py-2.5 px-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center space-x-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
                  <span>Inquire Package on WhatsApp</span>
                </button>

                <button
                  onClick={() => setSelectedPoster(offer.posterImage)}
                  className="w-full py-1.5 text-slate-500 hover:text-slate-800 text-xs font-semibold flex items-center justify-center space-x-1 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>View Official Campaign Flyer</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Full Poster Lightbox Modal with Clear Back & Close Navigation */}
        {selectedPoster && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedPoster(null)}
          >
            {/* Top Navigation & Close Bar */}
            <div 
              className="w-full max-w-3xl flex items-center justify-between pb-3 text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPoster(null)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>← Back to Packages</span>
              </button>

              <span className="text-xs sm:text-sm font-semibold text-slate-200 hidden sm:inline">
                Official Campaign Notice
              </span>

              <button
                onClick={() => setSelectedPoster(null)}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
                title="Close Flyer"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Poster Image Container */}
            <div 
              className="relative max-w-3xl max-h-[75vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 my-auto flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPoster}
                alt="Official Campaign Notice"
                className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Bottom Inquire / Back Bar */}
            <div 
              className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-xs text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-slate-300 text-center sm:text-left text-xs font-medium">
                Blue Wave Visa Consultant • Official Campaign Publication
              </span>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedPoster(null)}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors"
                >
                  ✕ Close Flyer
                </button>
                <a
                  href={`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${encodeURIComponent("Hello! I want to inquire about the promotional offer shown in your official notice.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-colors inline-flex items-center justify-center space-x-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
