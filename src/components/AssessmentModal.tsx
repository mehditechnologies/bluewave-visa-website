import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  MessageCircle
} from 'lucide-react';
import { DESTINATIONS, CONTACT_INFO } from '../data/websiteData';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('Canada');
  const [visaType, setVisaType] = useState('Visit / Tourist');
  const [travelHistory, setTravelHistory] = useState('Fresh Passport (No Prior Travel)');
  const [bankStatement, setBankStatement] = useState('Available with Healthy Balance');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const calculateScore = () => {
    let score = 80;
    if (travelHistory.includes('Frequent')) score += 15;
    if (travelHistory.includes('Moderate')) score += 10;
    if (bankStatement.includes('Healthy')) score += 8;
    return Math.min(score, 99);
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const score = calculateScore();
    const text = encodeURIComponent(
      `*Free Visa Assessment Result (${score}% Match)*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone/WhatsApp:* ${phone}\n` +
      `🌍 *Target Country:* ${country}\n` +
      `📋 *Visa Category:* ${visaType}\n` +
      `✈️ *Travel History:* ${travelHistory}\n` +
      `💼 *Bank Statement:* ${bankStatement}\n\n` +
      `Please provide me with a customized checklist and earliest appointment slot.`
    );

    window.open(`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 text-slate-800">
        
        {/* Header - Clean Corporate Light Design */}
        <div className="bg-slate-50 p-6 border-b border-slate-200 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Profile Evaluation Calculator</span>
          </div>

          <h3 className="text-xl font-extrabold font-heading text-slate-900">
            Complimentary Profile Assessment
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Step {step} of 2 • Calculate your approval probability for 26+ countries
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  1. Which Country Do You Want to Visit or Study in?
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {DESTINATIONS.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.flag} {c.name} ({c.region})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  2. What Type of Visa?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Visit / Tourist', 'Study Visa', 'Featured Package', 'Invitation Base'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setVisaType(t)}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                        visaType === t
                          ? 'bg-brand-50 border-brand-500 text-brand-700 ring-1 ring-brand-500'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  3. Your Current Travel History
                </label>
                <select
                  value={travelHistory}
                  onChange={(e) => setTravelHistory(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="Fresh Passport (No Prior Travel)">Fresh Passport (No Prior Travel - Japan, Tajikistan, New Zealand, Canada eligible)</option>
                  <option value="Moderate (Central Asia, Gulf, Malaysia, Turkey)">Moderate (Traveled to Turkey, UAE, Malaysia, Baku, etc.)</option>
                  <option value="Frequent Traveler (UK, Schengen, US, Australia)">Frequent Traveler (Previous UK, Schengen, US, or Australian Visas)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  4. Bank Statement Status
                </label>
                <select
                  value={bankStatement}
                  onChange={(e) => setBankStatement(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="Available with Healthy Balance">Available with Stamped 6-Month History</option>
                  <option value="Available with Low Balance">Available with Low Balance (We have Low Statement Options!)</option>
                  <option value="Need Guidance on Financial Proof">Need Guidance from Blue Wave on Financial Proof</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <span>Continue to View Result →</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleFinish} className="space-y-4">
              
              {/* Calculated Probability Score Box */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                  Profile Compatibility
                </span>
                <div className="text-3xl font-black font-heading text-emerald-700">
                  {calculateScore()}% Strong Approval Probability
                </div>
                <p className="text-xs text-emerald-800">
                  Your profile meets standard qualifying criteria for <strong className="font-bold">{country}</strong>.
                </p>
              </div>

              <div className="text-xs text-slate-600">
                Enter your name and WhatsApp number below to receive your personalized document dossier checklist:
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asad Ali"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0322 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 border border-slate-300 text-slate-700 font-bold rounded-xl text-xs sm:text-sm hover:bg-slate-50"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Send Checklist to WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
