import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  User, 
  Send, 
  CheckCircle, 
  Sparkles,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO, CONTACT_PERSONS } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-4">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>تواصل مباشر دون وسطاء</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            اتصل بنا لطلب الخدمات والاستشارات
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            فريق عمل مؤسسة أولاد العم جاهز لتلقي اتصالاتكم ورسائلكم عبر الواتساب على مدار الساعة للرد على كافة الاستفسارات وتقديم الدعم الفني.
          </p>
        </div>

        {/* 3 Main Technicians / Contacts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONTACT_PERSONS.map((person) => (
            <div
              key={person.id}
              className="bg-slate-950/90 rounded-3xl border border-slate-800 p-6 sm:p-7 shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header of card */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${person.avatarColor} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-xl font-black text-white">
                      {person.name[0]}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-amber-400">
                    متاح الآن
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {person.name}
                </h3>
                <div className="text-xs font-semibold text-amber-400/90 mb-2">
                  {person.title}
                </div>
                <div className="text-xs text-slate-400 mb-6 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  التخصص: {person.specialty}
                </div>

                {/* Direct Clickable Phone */}
                <div className="mb-4">
                  <span className="block text-[11px] text-slate-400 mb-1.5 font-medium">
                    رقم الهاتف المباشر (اضغط للاتصال):
                  </span>
                  <a
                    href={`tel:${person.phone}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-amber-500/10 border border-slate-800 hover:border-amber-500/40 transition-all text-amber-400 group/phone"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-400 group-hover/phone:animate-bounce" />
                      <span className="text-base font-black font-mono tracking-wider dir-ltr">
                        {person.displayPhone}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-1 rounded">
                      اتصال فوري
                    </span>
                  </a>
                </div>
              </div>

              {/* Action Buttons: Phone & WhatsApp */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {/* WhatsApp Button */}
                <a
                  href={person.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>محادثة واتساب مع {person.name}</span>
                </a>

                {/* Direct Dial button */}
                <a
                  href={`tel:${person.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick summary banner with address and working hours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-1">المقر الرئيسي:</div>
              <div className="text-xs sm:text-sm text-slate-400">{COMPANY_INFO.address}</div>
              <div className="text-[11px] text-slate-500 mt-1">خدمة لكافة قرى ومراكز الأقصر</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-1">مواعيد العمل:</div>
              <div className="text-xs sm:text-sm text-slate-400">يومياً من 9:00 ص حتى 11:00 م</div>
              <div className="text-[11px] text-emerald-400 mt-1">دعم طوارئ 24 ساعة للأعطال</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-1">الضمان والمتابعة:</div>
              <div className="text-xs sm:text-sm text-slate-400">ضمان معتمد على المنتجات والتركيب</div>
              <div className="text-[11px] text-amber-400 mt-1">قطع غيار أصلية ومطابقة للمواصفات</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
