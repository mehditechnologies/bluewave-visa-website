import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe
} from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { CONTACT_INFO } from '../data/websiteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 pt-16 pb-12 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="Blue Wave Visa Consultant" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo.jpg';
                }}
              />
              <div>
                <span className="text-xl font-black font-heading text-slate-900 tracking-tight block">
                  Blue Wave
                </span>
                <span className="text-[10px] font-extrabold text-brand-700 tracking-widest uppercase block">
                  Visa Consultant
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Operating since 2010 with registered offices in Islamabad, Pakistan, and Baku, Azerbaijan. Delivering verified document dossiers, official invitation arrangements, and 98% approval records across 26+ destinations worldwide.
            </p>

            {/* Social Media Icons via react-social-icons */}
            <div className="pt-2 flex items-center space-x-2.5">
              <SocialIcon
                url={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 36, width: 36 }}
                className="hover:scale-110 transition-transform shadow-2xs rounded-full"
              />
              <SocialIcon
                url={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 36, width: 36 }}
                className="hover:scale-110 transition-transform shadow-2xs rounded-full"
              />
              <SocialIcon
                url={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 36, width: 36 }}
                className="hover:scale-110 transition-transform shadow-2xs rounded-full"
              />
              <SocialIcon
                url={`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}`}
                network="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 36, width: 36 }}
                className="hover:scale-110 transition-transform shadow-2xs rounded-full"
              />
              <SocialIcon
                url={`mailto:${CONTACT_INFO.email}`}
                network="email"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 36, width: 36 }}
                className="hover:scale-110 transition-transform shadow-2xs rounded-full"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#destinations" className="hover:text-brand-700 transition-colors">
                  26+ Destinations
                </a>
              </li>
              <li>
                <a href="#bumper-offers" className="hover:text-brand-700 transition-colors font-semibold text-brand-700">
                  Featured Programs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-700 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#mobile-app" className="hover:text-brand-700 transition-colors">
                  Client Tracking App
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-brand-700 transition-colors">
                  Leadership & Team
                </a>
              </li>
              <li>
                <a href="#offices" className="hover:text-brand-700 transition-colors">
                  Islamabad & Baku Offices
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-700 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Top Countries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Popular Programs
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇨🇦 Canada TRV</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇳🇿 New Zealand</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇧🇪 Belgium Schengen</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇦🇺 Australia 600</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇯🇵 Japan Visit</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇹🇯 Tajikistan 10-Day</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇦🇿 Azerbaijan Baku</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇪🇸 Spain Tourist</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇩🇪 Germany Study</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇺🇸 USA B1/B2/F1</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇮🇹 Italy DSU</a>
              <a href="#destinations" className="hover:text-brand-700 transition-colors">🇹🇭 Thailand E-Visa</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Global Offices & Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Islamabad:</strong> Office No. 35, 1st Floor, Al Anayat Mall, G-11 Markaz, Islamabad.
                </span>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Baku:</strong> 1511B, Fatali khan Khoyski (Near Nariman Narimanov Metro), Baku, Azerbaijan.
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-mono font-bold text-slate-800">
                  0322-2271478 / 0322-2271440
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-brand-700 font-semibold">www.bluewavevisaconsultant.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} <strong>Blue Wave Visa Consultant</strong>. All Rights Reserved. Official domain: <a href="http://www.bluewavevisaconsultant.com" className="text-brand-700 font-medium hover:underline">www.bluewavevisaconsultant.com</a>.
          </p>

          <p className="text-[11px] text-slate-400 max-w-xl text-center md:text-right">
            Disclaimer: Blue Wave Visa Consultant is a private, registered visa advisory organization. Visa issuance is subject to the sole jurisdiction and decisions of foreign embassies and immigration authorities.
          </p>
        </div>

      </div>
    </footer>
  );
};
