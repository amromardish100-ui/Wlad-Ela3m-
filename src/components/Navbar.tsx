import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Radio, Video, Volume2, MapPin } from 'lucide-react';
import { COMPANY_INFO, CONTACT_PERSONS } from '../data/companyData';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCallDropdown, setShowCallDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'معرض الأعمال', href: '#portfolio' },
    { name: 'طلب تسعيرة', href: '#calculator' },
    { name: 'موقعنا', href: '#location' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-black/40 py-2.5'
          : 'bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 p-[2px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                <div className="flex items-center justify-center text-amber-400">
                  <Radio className="w-5 h-5 absolute -translate-x-1 -translate-y-1 opacity-70" />
                  <Video className="w-5 h-5 absolute translate-x-1 translate-y-1 text-cyan-400" />
                  <Volume2 className="w-4 h-4 text-amber-300" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-1.5 font-['Cairo']">
                {COMPANY_INFO.name}
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-amber-400/90 font-medium hidden sm:inline">
                دش • كاميرات مراقبة • ساوند سيستم
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 rounded-lg hover:bg-slate-900/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Call dropdown / button */}
            <div className="relative">
              <button
                onClick={() => setShowCallDropdown(!showCallDropdown)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md shadow-amber-500/20 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>اتصل بنا الآن</span>
              </button>

              {showCallDropdown && (
                <div className="absolute left-0 mt-2 w-64 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95">
                  <div className="text-xs text-slate-400 px-3 py-1 font-semibold border-b border-slate-800 mb-1">
                    اختر الرقم للاتصال المباشر:
                  </div>
                  {CONTACT_PERSONS.map((person) => (
                    <a
                      key={person.id}
                      href={`tel:${person.phone}`}
                      onClick={() => setShowCallDropdown(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs">
                          {person.name[0]}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-100 group-hover:text-amber-400">
                            {person.name}
                          </div>
                          <div className="text-[11px] text-slate-400">{person.specialty}</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400 dir-ltr bg-amber-500/10 px-2 py-1 rounded-md">
                        {person.displayPhone}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp Trigger */}
            <button
              onClick={onOpenWhatsAppModal}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>واتساب</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenWhatsAppModal}
              className="p-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-4 pb-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-4">
          <div className="space-y-1 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/80 rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="border-t border-slate-800/80 pt-4 space-y-2">
            <div className="text-xs font-semibold text-amber-400 px-2 mb-2">
              الاتصال الهاتفي المباشر:
            </div>
            {CONTACT_PERSONS.map((person) => (
              <a
                key={person.id}
                href={`tel:${person.phone}`}
                className="flex items-center justify-between px-3 py-2 bg-slate-900/60 rounded-xl text-sm"
              >
                <span className="font-semibold text-slate-200">
                  {person.name} ({person.specialty})
                </span>
                <span className="font-mono text-amber-400 dir-ltr text-xs bg-amber-500/10 px-2 py-1 rounded">
                  {person.displayPhone}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
