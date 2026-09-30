import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Tv, 
  Video, 
  Volume2, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO, CONTACT_PERSONS } from '../data/companyData';

interface HeroProps {
  onOpenWhatsAppModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with layered gradients and high-tech glow */}
      <div className="absolute inset-0 bg-slate-950 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        ></div>
        
        {/* Gradient fade to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Location & Verified Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-amber-500/5">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{COMPANY_INFO.address}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">خدمة سريعة في جميع أنحاء الأقصر</span>
          </div>

          {/* Main Institution Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4 leading-tight">
            {COMPANY_INFO.name}
          </h1>

          {/* Subtitle / Field */}
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 mb-6">
            {COMPANY_INFO.tagline}
          </div>

          {/* Mottos / Exact requested phrase */}
          <div className="relative mb-8 max-w-2xl px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xl">
            <p className="text-lg sm:text-xl font-bold text-slate-200 leading-relaxed">
              "{COMPANY_INFO.motto}"
            </p>
          </div>

          {/* Key pillars icons */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl mb-10">
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2">
                <Tv className="w-6 h-6" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-200">الدش والستالايت</span>
              <span className="text-[11px] text-slate-400 hidden sm:block">فردي ومركزي</span>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-200">كاميرات المراقبة</span>
              <span className="text-[11px] text-slate-400 hidden sm:block">Hikvision وذكاء</span>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                <Volume2 className="w-6 h-6" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-200">الساوند سيستم</span>
              <span className="text-[11px] text-slate-400 hidden sm:block">نقاء صوت عالي</span>
            </div>
          </div>

          {/* Primary Action Buttons (Requested in brief: اتصل بنا, واتساب, موقعنا) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl mb-10">
            {/* Call button */}
            <a
              href="#contact"
              className="flex-1 sm:flex-initial min-w-[150px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-5 h-5" />
              <span>اتصل بنا</span>
            </a>

            {/* WhatsApp button */}
            <button
              onClick={onOpenWhatsAppModal}
              className="flex-1 sm:flex-initial min-w-[150px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>واتساب</span>
            </button>

            {/* Location button */}
            <a
              href="#location"
              className="flex-1 sm:flex-initial min-w-[150px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-amber-400/60 hover:text-amber-400 transition-all transform hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>موقعنا</span>
            </a>

            {/* Request Quote button */}
            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>احسب تكلفة طلبك فوراً</span>
            </a>
          </div>

          {/* Quick Direct Contacts Strip */}
          <div className="w-full border-t border-slate-800/80 pt-6">
            <p className="text-xs font-semibold text-slate-400 mb-3">
              للتواصل المباشر والطلبات الفورية (اضغط على الرقم للاتصال أو الواتساب):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CONTACT_PERSONS.map((person) => (
                <div
                  key={person.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/30 transition-colors"
                >
                  <div className="text-right">
                    <span className="block text-xs font-bold text-slate-300">
                      {person.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      {person.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${person.phone}`}
                      className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 font-mono text-xs font-bold dir-ltr flex items-center gap-1 transition-colors"
                      title={`اتصال بـ ${person.name}`}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{person.displayPhone}</span>
                    </a>
                    <a
                      href={person.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title={`واتساب ${person.name}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-500 hover:text-amber-400 transition-colors">
        <a href="#services" className="animate-bounce p-1">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
