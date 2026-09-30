import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2, Clock, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, CONTACT_PERSONS } from '../data/companyData';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>موقعنا وسهولة الوصول</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            موقع مؤسسة أولاد العم
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            يشرفنا استقبالكم أو زيارتكم لتنفيذ خدماتكم في أي مكان بمحافظة الأقصر والقرنة.
          </p>
        </div>

        {/* Map & Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                العنوان والمقر الرئيسي
              </h3>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-6">
                <div className="text-amber-400 font-bold text-lg mb-1">
                  {COMPANY_INFO.address}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm">
                  {COMPANY_INFO.fullAddress}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3.5 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">
                    تغطية فورية لجميع أنحاء غرب الأقصر (القرنة، البعيرات، الضبعية، الطارف)
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">
                    خدمات متنقلة مجهزة بأحدث أدوات قياس الإشارة وبرمجة الكاميرات
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">
                    ساعات العمل: يومياً من 9:00 صباحاً إلى 11:00 مساءً (مع دعم طوارئ مستمر)
                  </span>
                </div>
              </div>
            </div>

            {/* Direction button */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Navigation className="w-5 h-5" />
                <span>فتح الاتجاهات على خرائط Google Maps</span>
                <ExternalLink className="w-4 h-4 mr-1 opacity-70" />
              </a>
            </div>
          </div>

          {/* Map Embed Column */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative bg-slate-950">
            <iframe
              title="موقع مؤسسة أولاد العم - الأقصر القرنة نجع أبو سعيد"
              src={COMPANY_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>

            {/* Floating Location Overlay badge on map */}
            <div className="absolute top-4 right-4 bg-slate-950/95 border border-amber-500/40 px-4 py-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping"></div>
              <div>
                <div className="text-xs font-bold text-white">مؤسسة أولاد العم</div>
                <div className="text-[11px] text-amber-400 font-medium">الأقصر – القرنة – نجع أبو سعيد</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
