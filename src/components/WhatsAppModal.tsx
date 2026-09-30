import React from 'react';
import { MessageCircle, X, Phone, User, CheckCircle2 } from 'lucide-react';
import { CONTACT_PERSONS, COMPANY_INFO } from '../data/companyData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <MessageCircle className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">
              محادثة واتساب مباشرة
            </h3>
            <p className="text-xs text-slate-400">
              {COMPANY_INFO.name} – اختر مع من تريد التحدث:
            </p>
          </div>
        </div>

        {/* List of Persons */}
        <div className="space-y-3 my-6">
          {CONTACT_PERSONS.map((person) => (
            <a
              key={person.id}
              href={person.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${person.avatarColor} p-0.5 shadow-md`}>
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-sm font-black text-white">
                    {person.name[0]}
                  </div>
                </div>
                <div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {person.name}
                  </div>
                  <div className="text-xs text-slate-400">{person.specialty}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold bg-emerald-500/10 px-2.5 py-1.5 rounded-lg dir-ltr">
                <span>{person.displayPhone}</span>
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500">
          فريقنا متواجد للرد على كافة أسئلتكم وتقديم عروض الأسعار بصورة فورية.
        </p>
      </div>
    </div>
  );
};
