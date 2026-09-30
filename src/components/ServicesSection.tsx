import React, { useState } from 'react';
import { 
  Tv, 
  Video, 
  Volume2, 
  Flame, 
  Check, 
  PhoneCall, 
  MessageCircle, 
  ShieldCheck, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { SERVICES, ServiceItem, CONTACT_PERSONS } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv':
        return <Tv className="w-6 h-6 text-amber-400" />;
      case 'Camera':
        return <Video className="w-6 h-6 text-cyan-400" />;
      case 'Volume2':
        return <Volume2 className="w-6 h-6 text-emerald-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'dish':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'cctv':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'sound':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
    }
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>خدماتنا المعتمدة والشاملة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            حلول تقنية متكاملة بأعلى مقاييس الجودة
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            نقدم في <strong className="text-amber-400">مؤسسة أولاد العم</strong> خدمات التوريد والتركيب والبرمجة والصيانة الشاملة بأحدث التقنيات وبأيدي فنيين محترفين.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              جميع الخدمات
            </button>
            <button
              onClick={() => setActiveTab('dish')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'dish'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              📡 الدش والستالايت
            </button>
            <button
              onClick={() => setActiveTab('cctv')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'cctv'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              📹 كاميرات المراقبة
            </button>
            <button
              onClick={() => setActiveTab('sound')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'sound'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              🔊 الساوند سيستم
            </button>
            <button
              onClick={() => setActiveTab('extra')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'extra'
                  ? 'bg-rose-500 text-slate-950 shadow-md shadow-rose-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              🔥 حريق وسنترالات
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-900/90 rounded-3xl border border-slate-800 hover:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image banner with overlay */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                {/* Badge top right */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${getBadgeStyle(service.category)}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Icon box */}
                <div className="absolute bottom-4 right-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-slate-700/80 backdrop-blur-md flex items-center justify-center shadow-lg">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Bullet points specified by user */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions per card */}
                <div className="border-t border-slate-800/80 pt-5 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/201023475579?text=${encodeURIComponent(`مرحباً مؤسسة أولاد العم، أرغب بطلب خدمة: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>طلب الخدمة عبر واتساب</span>
                  </a>

                  <a
                    href={`tel:${CONTACT_PERSONS[0].phone}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
                    title="اتصال سريع"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    <span>اتصال</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Quick Note about Inspection & Coverage */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                هل تحتاج إلى معاينة للموقع واقتراح أفضل تصميم للأجهزة؟
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                فريقنا يصلك أينما كنت في القرنة ومحافظة الأقصر لمعاينة المكان وتحديد أنسب أنواع الكاميرات أو الساوند أو أطباق الدش.
              </p>
            </div>
          </div>
          <a
            href="#calculator"
            className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all flex items-center gap-2"
          >
            <span>طلب معاينة مجانية</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
