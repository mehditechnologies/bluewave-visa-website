import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Menu, 
  X, 
  Mail
} from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { CONTACT_INFO } from '../data/websiteData';

interface NavbarProps {
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#bumper-offers' },
    { label: 'Services', href: '#services' },
    { label: 'Client App', href: '#mobile-app' },
    { label: 'Our Team', href: '#team' },
    { label: 'Offices', href: '#offices' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Blue Wave Visa Consultant! I would like to inquire about visa opportunities.");
    window.open(`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - Clean Single Line */}
      <div className="bg-slate-50 text-slate-600 text-xs py-1.5 px-4 border-b border-slate-200 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5 text-slate-600 text-[11px] xl:text-xs">
            <span className="flex items-center whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 mr-1 text-brand-700 flex-shrink-0" />
              Islamabad HQ: G-11 Markaz • Baku: Fatali Khan Khoyski
            </span>
            <span className="text-slate-300">|</span>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="flex items-center text-slate-700 hover:text-brand-700 transition-colors whitespace-nowrap"
            >
              <SocialIcon network="email" style={{ height: 18, width: 18, marginRight: 5 }} />
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="flex items-center space-x-3 text-[11px] xl:text-xs font-medium text-slate-600">
            <span className="flex items-center text-slate-800 font-semibold whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 mr-1 text-emerald-600 flex-shrink-0" />
              0322-2271478
            </span>
            <span className="text-slate-300">|</span>
            <div className="flex items-center space-x-1.5">
              <SocialIcon 
                url={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ height: 20, width: 20 }} 
                className="hover:scale-110 transition-transform" 
              />
              <SocialIcon 
                url={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ height: 20, width: 20 }} 
                className="hover:scale-110 transition-transform" 
              />
              <SocialIcon 
                url={CONTACT_INFO.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ height: 20, width: 20 }} 
                className="hover:scale-110 transition-transform" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Clean, Compact, Fits Perfectly On All Screens */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5' 
          : 'bg-white py-3 border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo: "Blue Wave" on top, "Visa Consultant" underneath */}
            <a href="#" className="flex items-center space-x-2.5 flex-shrink-0 group">
              <img 
                src="/images/logo.png" 
                alt="Blue Wave Visa Consultant" 
                className="h-10 sm:h-11 w-auto object-contain flex-shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo.jpg';
                }}
              />
              <div className="flex flex-col text-left justify-center">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-heading leading-tight whitespace-nowrap">
                  Blue Wave
                </span>
                <span className="text-[10px] font-extrabold text-brand-700 tracking-wider uppercase whitespace-nowrap -mt-0.5">
                  Visa Consultant
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Compact & Never Crowded */}
            <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-brand-700 transition-colors rounded-lg hover:bg-slate-50 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons - Balanced and guaranteed to fit inside screen */}
            <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
              <button
                onClick={onOpenAssessment}
                className="px-3 xl:px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-brand-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-xl transition-all shadow-2xs whitespace-nowrap"
              >
                Free Assessment
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="px-3 xl:px-3.5 py-2 text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-xl transition-all shadow-xs flex items-center space-x-2 whitespace-nowrap"
                title="Chat with Visa Consultant"
              >
                <SocialIcon network="whatsapp" style={{ height: 18, width: 18 }} />
                <span className="hidden xl:inline font-bold">0322-2271478</span>
                <span className="xl:hidden font-bold">WhatsApp</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2 flex-shrink-0">
              <button
                onClick={handleWhatsAppClick}
                className="p-1.5 text-white bg-brand-700 rounded-xl shadow-xs"
                aria-label="WhatsApp"
              >
                <SocialIcon network="whatsapp" style={{ height: 22, width: 22 }} />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-brand-700 rounded-xl focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAssessment();
                  }}
                  className="w-full py-2.5 text-center text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  Free Profile Assessment
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="w-full py-2.5 text-center text-sm font-bold text-white bg-brand-700 rounded-xl flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp: 0322-2271478</span>
                </button>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 text-center">
                Email: {CONTACT_INFO.email}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
