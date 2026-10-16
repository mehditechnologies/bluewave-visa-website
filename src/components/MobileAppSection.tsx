import React, { useState } from 'react';
import { 
  Smartphone, 
  Download, 
  Bell, 
  FileCheck, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { CONTACT_INFO } from '../data/websiteData';

export const MobileAppSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stepper' | 'documents'>('stepper');

  return (
    <section id="mobile-app" className="py-24 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & App Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5 text-brand-600" />
              <span>Digital Transparency • Mobile Client Application</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.15]">
              Real-Time Visa Application Tracking from Your{' '}
              <span className="text-brand-700">
                Smartphone
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Every client registered with Blue Wave receives individual portal credentials. Monitor your file movement through every embassy milestone, review verified documents, and receive real-time push alerts.
            </p>

            {/* Direct APK Download Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-11 h-11 rounded-xl bg-brand-700 flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                    Official Android Client Application
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">
                    Blue Wave Visa Tracker (v1.0)
                  </div>
                </div>
              </div>

              {/* Direct APK Download Button (Google Drive Verified Cloud) */}
              <a
                href={CONTACT_INFO.apkGoogleDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-300" />
                <span>Download Android APK</span>
              </a>
            </div>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-left">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center mb-2.5">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">5-Stage Status Stepper</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Step-by-step progress from document vetting, embassy filing, biometrics, to final visa decision.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Document Dossier Vault</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Inspect verified scans (Passport, CNIC, NADRA FRC, Bank Statement) and get clear approval notes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
                  <Bell className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Push Notifications</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Instant smartphone alerts when your case consultant updates your application status or appointment slot.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Encrypted Cloud Storage</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Enterprise-grade security ensuring complete confidentiality of personal and financial records.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean White Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Phone Outer Shell */}
              <div className="relative rounded-[46px] p-3 bg-slate-900 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700">
                
                {/* Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30" />

                {/* Inner Screen */}
                <div className="relative rounded-[36px] overflow-hidden bg-slate-50 text-slate-800 pt-8 pb-6 px-4 space-y-3.5 border border-slate-200">
                  
                  {/* Mock App Header */}
                  <div className="flex items-center justify-between pt-2 pb-2 border-b border-slate-200">
                    <div className="flex items-center space-x-2">
                      <img src="/images/logo.png" alt="Logo" className="w-7 h-7 object-contain" />
                      <div>
                        <div className="text-[11px] font-black tracking-tight text-slate-900">Blue Wave Tracker</div>
                        <div className="text-[9px] font-semibold text-brand-700">ID: BW-2026-682</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Active
                    </span>
                  </div>

                  {/* Client Passport Banner */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Applicant:</span>
                      <span className="font-bold text-slate-900">Arslan Mumtaz</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] mt-1">
                      <span className="text-slate-500 font-medium">Destination:</span>
                      <span className="font-bold text-brand-700">🇨🇦 Canada (Study Visa)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] mt-1">
                      <span className="text-slate-500 font-medium">Passport:</span>
                      <span className="font-mono text-slate-700">BG45678</span>
                    </div>
                  </div>

                  {/* Tabs Toggle within Mockup */}
                  <div className="grid grid-cols-2 gap-1 p-1 bg-slate-200/80 rounded-xl text-center text-[10px] font-bold">
                    <button
                      onClick={() => setActiveTab('stepper')}
                      className={`py-1.5 rounded-lg transition-colors ${activeTab === 'stepper' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
                    >
                      Status Stepper
                    </button>
                    <button
                      onClick={() => setActiveTab('documents')}
                      className={`py-1.5 rounded-lg transition-colors ${activeTab === 'documents' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
                    >
                      Document Dossier
                    </button>
                  </div>

                  {/* Stepper View */}
                  {activeTab === 'stepper' && (
                    <div className="space-y-2.5 py-1 text-[11px]">
                      <div className="flex items-start space-x-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900">1. Documents Dossier Vetted</div>
                          <div className="text-[9px] text-slate-500">Passport, FRC, Bank certified</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900">2. Embassy File Prepared</div>
                          <div className="text-[9px] text-slate-500">SOP & Legal Affidavits ready</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5">
                        <div className="w-5 h-5 rounded-full bg-brand-700 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <div className="flex-1 bg-blue-50/80 p-2 rounded-xl border border-blue-200">
                          <div className="font-bold text-brand-800">3. In Process by Embassy</div>
                          <div className="text-[9px] text-slate-600">Under official consular review</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5 opacity-50">
                        <div className="w-5 h-5 rounded-full bg-slate-300 text-slate-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          4
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-600">4. Decision Ready</div>
                          <div className="text-[9px] text-slate-400">Awaiting embassy dispatch</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2.5 opacity-40">
                        <div className="w-5 h-5 rounded-full bg-slate-300 text-slate-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          5
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-600">5. Visa Stamped & Dispatched</div>
                          <div className="text-[9px] text-slate-400">Passport collection ready</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Documents View */}
                  {activeTab === 'documents' && (
                    <div className="space-y-2 py-1 text-[10px]">
                      <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-slate-900">Original Passport Scan</div>
                          <div className="text-[9px] text-slate-500">186.1 KB • Verified</div>
                        </div>
                        <span className="text-[9px] font-bold text-emerald-700">✓ Approved</span>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-slate-900">NADRA Smart CNIC</div>
                          <div className="text-[9px] text-slate-500">Front & Back • Verified</div>
                        </div>
                        <span className="text-[9px] font-bold text-emerald-700">✓ Approved</span>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-slate-900">NADRA FRC Certificate</div>
                          <div className="text-[9px] text-slate-500">806.1 KB • Verified</div>
                        </div>
                        <span className="text-[9px] font-bold text-emerald-700">✓ Approved</span>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-slate-900">Bank Statement 6 Months</div>
                          <div className="text-[9px] text-slate-500">Stamped with Acct Cert</div>
                        </div>
                        <span className="text-[9px] font-bold text-emerald-700">✓ Approved</span>
                      </div>
                    </div>
                  )}

                  {/* Push Alert Notification */}
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[10px] flex items-center space-x-2 text-emerald-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>
                      <strong>Status Alert:</strong> Embassy file submitted successfully.
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
