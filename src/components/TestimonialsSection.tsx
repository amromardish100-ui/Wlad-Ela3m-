import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>ثقة نعتز بها</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            آراء عملائنا الكرام في القرنة والأقصر
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            شهادات حقيقية من عملائنا بعد تجربة خدماتنا في تركيب الدش وكاميرات المراقبة والساوند سيستم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between relative shadow-lg"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/20 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  "{t.comment}"
                </p>
              </div>

              <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-amber-400/90">{t.role}</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
