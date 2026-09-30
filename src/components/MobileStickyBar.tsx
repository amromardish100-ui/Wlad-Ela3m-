import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Calculator, X } from 'lucide-react';
import { CONTACT_PERSONS, COMPANY_INFO } from '../data/companyData';

interface MobileStickyBarProps {
  onOpenWhatsAppModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenWhatsAppModal }) => {
  const [showCallSheet, setShowCallSheet] = useState(false);

  return (
    <>
      {/* Call sheet overlay on mobile */}
      {showCallSheet && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-end justify-center md:hidden"
          onClick={() => setShowCallSheet(false)}
        >
          <div 
            className="w-full bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="font-bold text-base text-white">اتصال هاتفي مباشر</div>
              <button 
                onClick={() => setShowCallSheet(false)}
                className="p-1 rounded-full bg-slate-800 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              اختر الرقم للتواصل المباشر مع فريق مؤسسة أولاد العم:
            </p>

            <div className="space-y-2.5">
              {CONTACT_PERSONS.map((person) => (
                <a
                  key={person.id}
                  href={`tel:${person.phone}`}
                  onClick={() => setShowCallSheet(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{person.name}</div>
                      <div className="text-[11px] text-slate-400">{person.specialty}</div>
                    </div>
                  </div>
                  <div className="font-mono font-bold text-sm text-amber-400 dir-ltr bg-amber-500/10 px-2.5 py-1.5 rounded-lg">
                    {person.displayPhone}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fixed bottom navigation on mobile devices */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 border-t border-slate-800/90 backdrop-blur-lg px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-2 max-w-md mx-auto items-center">
          
          {/* Quick Call */}
          <button
            onClick={() => setShowCallSheet(true)}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold active:scale-95 transition-all shadow-md shadow-amber-500/20"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span className="text-[11px] font-black mt-0.5">اتصال</span>
          </button>

          {/* Quick WhatsApp */}
          <button
            onClick={onOpenWhatsAppModal}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-600 text-white font-bold active:scale-95 transition-all shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[11px] font-black mt-0.5">واتساب</span>
          </button>

          {/* Request Quote / Calculator */}
          <a
            href="#calculator"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 active:scale-95 transition-all"
          >
            <Calculator className="w-5 h-5 text-amber-400" />
            <span className="text-[11px] font-medium mt-0.5">تسعيرة</span>
          </a>

          {/* Location */}
          <a
            href="#location"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 active:scale-95 transition-all"
          >
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span className="text-[11px] font-medium mt-0.5">موقعنا</span>
          </a>

        </div>
      </div>
    </>
  );
};
