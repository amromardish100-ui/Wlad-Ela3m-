import React, { useState } from 'react';
import { 
  Tv, 
  Video, 
  Volume2, 
  Wrench, 
  MapPin, 
  Eye, 
  Sparkles, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO, PortfolioItem } from '../data/companyData';

interface PortfolioSectionProps {
  onSelectImage: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectImage }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => {
        if (activeFilter === 'maintenance') return item.category === 'network';
        return item.category === activeFilter;
      });

  return (
    <section id="portfolio" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>معرض الأعمال الحية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            نماذج من تنفيذاتنا في القرنة والأقصر
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            صور حية من مواقع العمل لمشاريع أنجزناها بكفاءة ودقة عالية للمنازل والمحلات والشركات.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              جميع الأعمال
            </button>
            <button
              onClick={() => setActiveFilter('cctv')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'cctv'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              📹 تركيب كاميرات المراقبة
            </button>
            <button
              onClick={() => setActiveFilter('dish')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'dish'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              📡 تركيب الدش والستالايت
            </button>
            <button
              onClick={() => setActiveFilter('sound')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'sound'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              🔊 تركيب الساوند سيستم
            </button>
            <button
              onClick={() => setActiveFilter('maintenance')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'maintenance'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              🛠 أعمال الصيانة والشبكات
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-900/80 rounded-3xl border border-slate-800/90 overflow-hidden hover:border-amber-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col cursor-pointer"
              onClick={() => onSelectImage(item)}
            >
              {/* Image Frame */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Overlay hover icon */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                  <div className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>تكبير ومعاينة التفاصيل</span>
                  </div>
                </div>

                {/* Location pill */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Info content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-3 border-t border-slate-800/70 flex flex-wrap gap-1.5">
                  {item.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below gallery */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-sm mb-4">
            لديك فكرة أو مشروع وتريد تنفيذه بنفس هذا المستوى الاحترافي؟
          </p>
          <a
            href="https://wa.me/201023475579?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D9%85%D9%85%D8%A7%D8%AB%D9%84%20%D9%85%D8%B9%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%A3%D9%88%D9%84%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B9%D9%85"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all text-sm"
          >
            <span>تواصل معنا لتنفيذ مشروعك الآن</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
