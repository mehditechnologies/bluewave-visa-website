import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BumperOffers } from './components/BumperOffers';
import { Destinations } from './components/Destinations';
import { Services } from './components/Services';
import { MobileAppSection } from './components/MobileAppSection';
import { TeamSection } from './components/TeamSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OfficesAndContact } from './components/OfficesAndContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AssessmentModal } from './components/AssessmentModal';

export function App() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenAssessment={() => setAssessmentModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick Country Finder */}
        <Hero onOpenAssessment={() => setAssessmentModalOpen(true)} />

        {/* Bumper Offers Section (Extracted from real promotional graphics) */}
        <BumperOffers />

        {/* All 26+ Destination Countries with Scenic Landmark Photos */}
        <Destinations onOpenAssessment={() => setAssessmentModalOpen(true)} />

        {/* Comprehensive Visa Services */}
        <Services onOpenAssessment={() => setAssessmentModalOpen(true)} />

        {/* Proprietary Client Mobile Tracking App Showcase & APK Download */}
        <MobileAppSection />

        {/* Dedicated Team & Leadership (CEO AsadUllah Khan, COO Muhammad Huzaifah Ali, Consultants) */}
        <TeamSection />

        {/* Why Choose Us, Verified Client Stories, and FAQs */}
        <WhyChooseUs />

        {/* Dual Offices (Islamabad & Baku), Google Maps Pins, and Interactive Contact Form */}
        <OfficesAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 24/7 WhatsApp Quick-Chat Button */}
      <FloatingWhatsApp />

      {/* Interactive Visa Assessment & Eligibility Calculator Modal */}
      <AssessmentModal 
        isOpen={assessmentModalOpen} 
        onClose={() => setAssessmentModalOpen(false)} 
      />
    </div>
  );
}

export default App;
