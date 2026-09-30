import React from 'react';
import { 
  Tv, 
  Video, 
  Volume2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, CONTACT_PERSONS } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/90 pt-16 pb-28 md:pb-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
                <Video className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-2xl font-black text-white">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.motto}. متخصصون في أحدث تقنيات الدش، كاميرات المراقبة، الساوند سيستم، أنظمة الحريق والسنترالات في الأقصر والقرنة.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold bg-slate-900/90 border border-slate-800 p-3 rounded-xl max-w-sm">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.fullAddress}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-r-2 border-amber-400 pr-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">خدماتنا</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">لماذا نحن</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">معرض الأعمال</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">طلب تسعيرة ومعاينة</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">موقعنا على الخريطة</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-r-2 border-amber-400 pr-2">
              خدمات المؤسسة
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">تركيب أطباق الدش والرسيفرات</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">كاميرات المراقبة Hikvision</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">الساوند سيستم للمحلات والمساجد</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">أنظمة إنذار الحريق</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">السنترالات والشبكات الداخلية</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">عقود الصيانة الدورية</a></li>
            </ul>
          </div>

          {/* Direct Phone Numbers */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-r-2 border-amber-400 pr-2">
              أرقام التواصل
            </h4>
            <div className="space-y-3">
              {CONTACT_PERSONS.map((person) => (
                <div key={person.id} className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-slate-200">{person.name}</div>
                  <div className="flex items-center justify-between mt-1">
                    <a
                      href={`tel:${person.phone}`}
                      className="font-mono text-xs text-amber-400 hover:underline dir-ltr"
                    >
                      {person.displayPhone}
                    </a>
                    <a
                      href={person.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 p-1"
                      title="واتساب"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} <strong className="text-slate-200">{COMPANY_INFO.name}</strong> – الأقصر، القرنة
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
          >
            <span>للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
