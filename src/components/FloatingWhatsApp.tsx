import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/websiteData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent("Hello Blue Wave Visa Consultant! I am visiting your website and would like to speak with a visa specialist.");
    window.open(`https://wa.me/${CONTACT_INFO.primaryWhatsApp.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col space-y-2">
      {/* Tooltip message bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs py-1.5 px-3 rounded-2xl shadow-lg border border-slate-200 flex items-center space-x-2 max-w-xs transition-opacity duration-300">
          <span>👋 <strong>Need Visa Guidance?</strong> Chat on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-110 transition-all duration-300 ring-4 ring-white"
        aria-label="Chat on WhatsApp (0322-2271478)"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-[9px] font-black">
          1
        </span>
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
