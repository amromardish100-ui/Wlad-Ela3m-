import React from 'react';
import { 
  ShieldCheck, 
  BadgePercent, 
  Clock, 
  Wrench, 
  Building2, 
  Headphones, 
  Award, 
  ThumbsUp, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { WHY_US, COMPANY_INFO } from '../data/companyData';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-amber-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-7 h-7 text-emerald-400" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-yellow-400" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-indigo-400" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-purple-400" />;
      default:
        return <Award className="w-7 h-7 text-amber-400" />;
    }
  };

  const stats = [
    { value: '+10', label: 'سنوات من الخبرة العملية' },
    { value: '+1500', label: 'عميل ومشروع منجز' },
    { value: '100%', label: 'ضمان على الأجهزة والتركيب' },
    { value: '24/7', label: 'دعم واستجابة سريعة' },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900/60 relative overflow-hidden border-y border-slate-800/80">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-4">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>ثقة وأمان وضمان مستمر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            لماذا يفضل العملاء مؤسسة أولاد العم؟
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            نجمع بين الخبرة العريقة في أحدث تقنيات الدش، كاميرات المراقبة، وأنظمة الصوتيات، مع الالتزام التام بالأمانة والمواعيد.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_US.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-amber-500/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800/90 shadow-2xl">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-2 font-mono dir-ltr">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
