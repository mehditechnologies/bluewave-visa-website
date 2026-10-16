import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  Building2, 
  CheckCircle2
} from 'lucide-react';
import { OFFICES, CONTACT_INFO, DESTINATIONS } from '../data/websiteData';

export const OfficesAndContact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    destination: 'Canada',
    visaType: 'Visit / Tourist Visa',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Visa Inquiry via Blue Wave Website*\n\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📞 *Phone/WhatsApp:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'N/A'}\n` +
      `🌍 *Destination Country:* ${formData.destination}\n` +
      `📋 *Visa Category:* ${formData.visaType}\n` +
      `💬 *Message:* ${formData.message || 'I would like more information on application steps and fee structure.'}`
    );

    window.open(`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="offices" className="py-24 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-brand-600" />
            <span>Dual Global Offices • Islamabad & Baku</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Visit Our Global Branches or{' '}
            <span className="text-brand-700">
              Consult an Officer
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Walk into our offices in Islamabad or Baku for an in-person assessment, or contact our dedicated consultants directly via WhatsApp.
          </p>
        </div>

        {/* Dual Offices Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {OFFICES.map((office) => (
            <div
              key={office.city}
              className="group bg-slate-50 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200 uppercase tracking-wider shadow-2xs">
                    {office.type}
                  </span>
                  <span className="text-2xl">{office.country === 'Pakistan' ? '🇵🇰' : '🇦🇿'}</span>
                </div>

                <h3 className="text-2xl font-black font-heading text-slate-900">
                  {office.city} Office, {office.country}
                </h3>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">{office.address}</div>
                      {office.nearBy && (
                        <div className="text-xs text-brand-700 font-bold mt-0.5">{office.nearBy}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <span>{office.timing}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <span className="font-mono font-medium">{office.phone}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 mt-6 grid grid-cols-2 gap-3">
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5 transition-colors shadow-2xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>Google Maps Pin</span>
                </a>

                <a
                  href={`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${encodeURIComponent(`Hello! I want to visit the Blue Wave ${office.city} office. Please share directions.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold text-center flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>WhatsApp Office</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Clean Corporate Inquiry Form & Information Box */}
        <div className="mt-16 rounded-3xl bg-slate-50 p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Direct Inquiries */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Prompt Consultation
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-tight">
                Send an Inquiry or Schedule a Callback
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Submit your profile summary. Our senior evaluation officer will review your criteria and respond with specific document requirements.
              </p>

              {/* Contact Info Pills */}
              <div className="space-y-3 pt-2 text-xs">
                <a
                  href={`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/50 flex items-center space-x-3 transition-colors shadow-2xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Direct WhatsApp Helpline</div>
                    <div className="text-emerald-700 font-mono font-semibold">0322-2271478</div>
                  </div>
                </a>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center space-x-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Official Correspondence Email</div>
                    <div className="text-slate-600">{CONTACT_INFO.email}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Official Social Channels:
                </span>
                <div className="flex items-center space-x-2">
                  <a
                    href={CONTACT_INFO.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-blue-50 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-pink-50 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={CONTACT_INFO.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-cyan-50 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Clean White Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0322 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Destination *
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-slate-50 text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      {DESTINATIONS.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.flag} {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Visa Stream *
                    </label>
                    <select
                      value={formData.visaType}
                      onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                      className="w-full bg-slate-50 text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="Visit / Tourist Visa">✈️ Visit / Tourist Visa</option>
                      <option value="Study Visa">🎓 Study Visa</option>
                      <option value="Featured Campaign Package">📋 Featured Campaign Package</option>
                      <option value="Refusal Recovery">🔄 Refusal Re-Appeal Case</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Requirements / Background
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your education, prior travel history, or any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm rounded-xl transition-all shadow-xs flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-emerald-300" />
                  <span>Send Inquiry to Visa Consultant on WhatsApp</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center font-bold flex items-center justify-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Inquiry generated! Your WhatsApp chat is opening now...</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
