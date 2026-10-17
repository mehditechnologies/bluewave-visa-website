import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Globe2, 
  CheckCircle,
  Filter
} from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { DESTINATIONS, type DestinationCountry, CONTACT_INFO } from '../data/websiteData';
import { CountryFlag } from './CountryFlag';

interface DestinationsProps {
  onOpenAssessment: () => void;
}

export const Destinations: React.FC<DestinationsProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredDestinations = DESTINATIONS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.popularPlaces.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;
    
    const matchesCategory = selectedCategory === 'All' || 
      item.category.includes(selectedCategory as any);

    return matchesSearch && matchesRegion && matchesCategory;
  });

  const handleApplyCountry = (country: DestinationCountry) => {
    const text = encodeURIComponent(
      `Hello Blue Wave Visa Consultant! I am interested in applying for a visa to ${country.name} (${country.category.join('/')} Visa). Please guide me on required documents, appointment dates, and processing fees.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="destinations" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5 text-brand-600" />
            <span>26+ Countries • Study, Tourist & Visit Visas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Explore Worldwide Destinations with{' '}
            <span className="text-brand-700">
              Complete Confidence
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            From North America and Schengen Europe to East Asia and Eurasia. Discover iconic tourist places, top global universities, and streamlined visa processing with Blue Wave.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-12 bg-slate-50 p-4 sm:p-5 rounded-2xl shadow-xs border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search country or visit place (e.g. Canada, Baku, Cape Town)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800"
              />
            </div>

            {/* Region Filter Buttons */}
            <div className="md:col-span-7 flex flex-wrap items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {['All', 'Europe', 'Americas', 'Asia & Pacific', 'Central Asia & Middle East'].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    selectedRegion === region
                      ? 'bg-brand-700 text-white shadow-2xs'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {region === 'All' ? 'All Regions' : region}
                </button>
              ))}
            </div>

          </div>

          {/* Category Toggle */}
          <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-200 text-xs">
            <div className="flex items-center space-x-2 text-slate-500 font-medium">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter by Visa Category:</span>
              {(['All', 'Study', 'Tourist', 'Visit'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-slate-800 text-white'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {cat === 'All' ? 'All Visas' : `${cat} Visa`}
                </button>
              ))}
            </div>

            <div className="text-slate-500 font-semibold pt-1 sm:pt-0">
              Showing <span className="text-brand-700 font-bold">{filteredDestinations.length}</span> destinations
            </div>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredDestinations.map((country) => (
            <div
              key={country.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header with Scenery */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={country.image}
                    alt={`${country.name} scenic destination`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('/countries/')) {
                        target.src = target.src.replace('/countries/', '/images/destinations/');
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Flag & Region Banner on Image - Using Real PNG Flag Image */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-slate-200">
                    <CountryFlag code={country.code} name={country.name} className="w-5 h-3.5" />
                    <span className="text-xs font-bold text-slate-800">
                      {country.region}
                    </span>
                  </div>

                  {/* Badge */}
                  {country.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-700 text-white shadow-xs">
                        {country.badge}
                      </span>
                    </div>
                  )}

                  {/* Bottom Image Info: Country Name & Popular Places */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-2xl font-black font-heading tracking-tight flex items-center space-x-2">
                      <CountryFlag code={country.code} name={country.name} className="w-6 h-4 shadow-xs" />
                      <span>{country.name}</span>
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {country.popularPlaces.slice(0, 3).map((place, idx) => (
                        <span key={idx} className="text-[10px] bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full text-slate-200 flex items-center">
                          <MapPin className="w-2.5 h-2.5 mr-0.5 text-cyan-300" />
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Metrics Bar */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div>
                      <span className="block text-[11px] text-slate-500 font-medium">Turnaround</span>
                      <span className="text-xs font-bold text-slate-800 flex items-center justify-center mt-0.5">
                        <Clock className="w-3 h-3 mr-1 text-brand-700" />
                        {country.processingTime}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-500 font-medium">Approval Ratio</span>
                      <span className="text-xs font-bold text-emerald-600 flex items-center justify-center mt-0.5">
                        <ShieldCheck className="w-3 h-3 mr-1" />
                        {country.approvalRate}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {country.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {country.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {country.category.map((cat) => (
                      <span 
                        key={cat} 
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-brand-50 text-brand-800 border border-brand-200"
                      >
                        {cat} Visa
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleApplyCountry(country)}
                  className="w-full py-2.5 px-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center space-x-2"
                >
                  <SocialIcon network="whatsapp" style={{ width: 18, height: 18 }} />
                  <span>Apply for {country.name} on WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 mt-8">
            <Globe2 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800">No destinations match your search</h4>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We process visas for over 26+ countries worldwide. Contact our visa consultant directly on WhatsApp to inquire about your target destination.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-brand-700 text-white font-bold rounded-xl text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
