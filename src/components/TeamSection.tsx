import React from 'react';
import { 
  Users, 
  Award, 
  MessageCircle,
  Briefcase
} from 'lucide-react';
import { TEAM_MEMBERS, CONTACT_INFO, type TeamMember } from '../data/websiteData';

export const TeamSection: React.FC = () => {
  const leadership = TEAM_MEMBERS.filter(m => m.department === 'Executive Leadership' || m.department === 'Operations & Management');
  const staff = TEAM_MEMBERS.filter(m => m.department !== 'Executive Leadership' && m.department !== 'Operations & Management');

  const handleConsultWith = (member: TeamMember) => {
    const phone = member.phone || CONTACT_INFO.primaryWhatsApp;
    const cleanPhone = phone.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('92') ? cleanPhone : `92${cleanPhone.replace(/^0/, '')}`;
    
    const text = encodeURIComponent(
      `Hello ${member.name}! I would like to schedule a consultation regarding visa options with Blue Wave Visa Consultant.`
    );
    window.open(`https://wa.me/${formattedPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-brand-600" />
            <span>Dedicated Immigration Leadership & Visa Experts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Meet Our Leadership &{' '}
            <span className="text-brand-700">
              Visa Case Officers
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Our team blends deep legal immigration knowledge, consular dossier expertise, and client care across Islamabad, Pakistan, and Baku, Azerbaijan.
          </p>
        </div>

        {/* Executive Co-Founders Spotlight (CEO AsadUllah Khan & COO Muhammad Huzaifah Ali) */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200">
              Executive Co-Founders
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="group bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                {/* High-Definition 4:5 Portrait Container - Never stretched or blurry */}
                <div className="w-44 sm:w-48 aspect-[4/5] rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-300 bg-slate-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-bold text-brand-700 mt-0.5 flex items-center justify-center sm:justify-start">
                      <Award className="w-4 h-4 mr-1 text-amber-500" />
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Specializations */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Expertise:
                    </span>
                    <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                      {leader.specialization.map((spec, idx) => (
                        <span key={idx} className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct WhatsApp Consultation Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleConsultWith(leader)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 px-4 py-2.5 rounded-xl transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Direct Advisory on WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Consulting Team & Staff Grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-600 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
              Visa Case Officers & Department Specialists
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {staff.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Dedicated 4:5 Vertical Portrait - High Definition & Proportional */}
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs relative mb-4">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-brand-50 text-brand-700 font-black text-xl">
                        <Users className="w-10 h-10 text-brand-600 mb-2" />
                        <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-md text-brand-800 border border-slate-200 shadow-2xs">
                      {member.department}
                    </span>
                  </div>

                  {/* Member Info */}
                  <div>
                    <h4 className="text-lg font-extrabold text-slate-900 font-heading">
                      {member.name}
                    </h4>
                    <p className="text-xs font-bold text-brand-700 mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {member.specialization.map((s, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action or Support Badge (No inquiry button on Office Assistant) */}
                <div className="pt-4 border-t border-slate-100 mt-5">
                  {member.canInquire ? (
                    <button
                      onClick={() => handleConsultWith(member)}
                      className="w-full py-2.5 px-3 bg-slate-50 hover:bg-brand-50 text-slate-800 hover:text-brand-800 font-bold text-xs rounded-xl transition-colors border border-slate-200 flex items-center justify-center space-x-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquiry from {member.name}</span>
                    </button>
                  ) : (
                    <div className="text-center py-2.5 text-xs text-slate-500 font-semibold bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center space-x-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>Office Administration & Logistics</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
