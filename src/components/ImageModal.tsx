import React from 'react';
import { X, MapPin, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import { PortfolioItem } from '../data/companyData';

interface ImageModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-lg"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image */}
        <div className="relative h-80 sm:h-96 w-full bg-slate-950">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-4 right-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/90 text-amber-400 border border-amber-500/30">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            {item.title}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              المواصفات المنفذة في هذا المشروع:
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.features.map((feat, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  {feat}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <a 
              href={`https://wa.me/201023475579?text=${encodeURIComponent(`مرحباً مؤسسة أولاد العم، أود طلب تنفيذ مشروع مشابه لـ "${item.title}"`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>طلب تنفيذ مشروع مماثل عبر واتساب</span>
            </a>

            <button 
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
            >
              إغلاق المعاينة
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
