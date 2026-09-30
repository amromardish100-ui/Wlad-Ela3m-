/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { LocationMapSection } from './components/LocationMapSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { WhatsAppModal } from './components/WhatsAppModal';
import { ImageModal } from './components/ImageModal';
import { PortfolioItem } from './data/companyData';

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} />

        {/* 2. Services Section */}
        <ServicesSection />

        {/* 3. Why Us Section */}
        <WhyUsSection />

        {/* 4. Portfolio Section */}
        <PortfolioSection onSelectImage={(item) => setSelectedPortfolioItem(item)} />

        {/* 5. Interactive Quote & WhatsApp Builder */}
        <InteractiveQuoteCalculator />

        {/* 6. Location & Google Map */}
        <LocationMapSection />

        {/* 7. Client Testimonials */}
        <TestimonialsSection />

        {/* 8. FAQs */}
        <FaqSection />

        {/* 9. Contact Us Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Bar on Mobile Devices */}
      <MobileStickyBar onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} />

      {/* Desktop Floating WhatsApp Quick Button */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex flex-col items-center gap-3">
        <button
          onClick={() => setIsWhatsAppModalOpen(true)}
          className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="تواصل واتساب"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-slate-900 animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-slate-900"></span>
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-white whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            محادثة واتساب سريعة
          </span>
        </button>
      </div>

      {/* Modals */}
      <WhatsAppModal 
        isOpen={isWhatsAppModalOpen} 
        onClose={() => setIsWhatsAppModalOpen(false)} 
      />

      <ImageModal 
        item={selectedPortfolioItem} 
        onClose={() => setSelectedPortfolioItem(null)} 
      />

    </div>
  );
}
