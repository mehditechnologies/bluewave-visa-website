import React from 'react';
import { 
  GraduationCap, 
  Plane, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  Smartphone, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { SERVICES, CONTACT_INFO } from '../data/websiteData';

interface ServicesProps {
  onOpenAssessment: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAssessment }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-brand-700" />;
      case 'Plane': return <Plane className="w-6 h-6 text-brand-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-700" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-purple-700" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-700" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-700" />;
      default: return <Sparkles className="w-6 h-6 text-brand-700" />;
    }
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hello Blue Wave Visa Consultant! I am interested in your "${serviceTitle}" service. Please provide information on process, documentation, and pricing.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Comprehensive Immigration Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            End-to-End Visa Services for{' '}
            <span className="text-brand-700">
              Students & Travelers
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            From preliminary profile evaluation and university admissions to VFS biometric booking and interview coaching, our registered officers handle every stage with diligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-300 transition-all shadow-xs">
                  {getIcon(srv.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-brand-700 transition-colors">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2 text-xs text-slate-700">
                  {srv.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Popular Countries */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Frequent Streams:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {srv.popularCountries.map((c, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-200 mt-6">
                <button
                  onClick={() => handleServiceInquiry(srv.title)}
                  className="w-full py-2.5 px-4 bg-white hover:bg-brand-700 text-slate-700 hover:text-white font-bold text-xs rounded-xl transition-all border border-slate-200 hover:border-brand-700 flex items-center justify-center space-x-2 shadow-2xs"
                >
                  <SocialIcon network="whatsapp" style={{ width: 18, height: 18 }} />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Free Assessment Banner Callout - Light Corporate Design */}
        <div className="mt-16 rounded-3xl bg-brand-50 p-8 sm:p-10 border border-brand-200 text-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
              Unsure about which visa fits your profile?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Request a Complimentary 15-Minute Profile Assessment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Our registered consultants will evaluate your educational credentials, travel records, and financial standing to outline the most promising country path.
            </p>
          </div>

          <button
            onClick={onOpenAssessment}
            className="px-6 py-3.5 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-sm transition-all shadow-sm whitespace-nowrap hover:scale-102 flex items-center space-x-2"
          >
            <span>Start Free Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
