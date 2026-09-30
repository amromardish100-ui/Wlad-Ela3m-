import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  MessageCircle, 
  Tv, 
  Video, 
  Volume2, 
  Flame, 
  Wrench, 
  Building, 
  Home, 
  Store, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CONTACT_PERSONS } from '../data/companyData';

export const InteractiveQuoteCalculator: React.FC = () => {
  const [serviceType, setServiceType] = useState('cctv');
  const [placeType, setPlaceType] = useState('منزل / شقة');
  const [unitsCount, setUnitsCount] = useState('4 كاميرات');
  const [cityArea, setCityArea] = useState('القرنة – نجع أبو سعيد');
  const [clientName, setClientName] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [selectedTech, setSelectedTech] = useState(CONTACT_PERSONS[0].id);

  const getUnitsOptions = () => {
    switch (serviceType) {
      case 'cctv':
        return ['2 كاميرات', '4 كاميرات (الأكثر طلباً)', '6 كاميرات', '8 كاميرات', '16 كاميرة أو أكثر'];
      case 'dish':
        return ['طبق مفرد ورسيفر', 'طبق 2 قمر (نايل سات + عرب سات)', 'شبكة دش مركزي لعمارة', 'ضبط إشارة وصيانة'];
      case 'sound':
        return ['2 سماعات + أمبليفاير', '4 سماعات داخلية/خارجية', 'نظام متكامل لمسجد', 'نظام صوتي لقاعة أو مطعم'];
      case 'extra':
        return ['سنترال داخلي خطوط', 'شبكة إنذار حريق', 'شبكة إنترنت وداتا وكابلات', 'صيانة وبرمجة شاملة'];
      default:
        return ['معاينة عامة وكشف عطل'];
    }
  };

  const currentTech = CONTACT_PERSONS.find(p => p.id === selectedTech) || CONTACT_PERSONS[0];

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceNameMap: Record<string, string> = {
      cctv: '📹 كاميرات مراقبة',
      dish: '📡 دش وستالايت',
      sound: '🔊 ساوند سيستم وصوتيات',
      extra: '🔥 حريق وسنترالات وشبكات',
    };

    const text = `السلام عليكم مؤسسة أولاد العم،
أرغب بطلب تسعيرة ومعاينة بالمواصفات التالية:
• الاسم: ${clientName || 'عميل كريم'}
• نوع الخدمة: ${serviceNameMap[serviceType] || serviceType}
• نوع المنشأة: ${placeType}
• الحجم / العدد التقريبي: ${unitsCount}
• المنطقة / العنوان: ${cityArea}
${clientNotes ? `• ملاحظات إضافية: ${clientNotes}` : ''}

يرجى التواصل معي بالأسعار وموعد المعاينة المناسب.`;

    const whatsappUrl = `https://wa.me/20${currentTech.phone.substring(1)}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900/40 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>طلب تسعيرة ومعاينة فورية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            احسب ونسق طلبك في ثوانٍ
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            حدد ما تحتاجه وسيتم تجهيز رسالة منظمة وإرسالها مباشرة عبر الواتساب للفني المختص للحصول على أفضل سعر وموعد فوري.
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="bg-slate-950/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <form onSubmit={handleSendToWhatsApp} className="space-y-8">
            
            {/* 1. Service Type selection */}
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-3">
                1. اختر نوع الخدمة المطلوبة:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('cctv')}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                    serviceType === 'cctv'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-md shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Video className="w-6 h-6" />
                  <span className="text-xs sm:text-sm font-bold">كاميرات مراقبة</span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('dish')}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                    serviceType === 'dish'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-md shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Tv className="w-6 h-6" />
                  <span className="text-xs sm:text-sm font-bold">دش وستالايت</span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('sound')}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                    serviceType === 'sound'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-md shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Volume2 className="w-6 h-6" />
                  <span className="text-xs sm:text-sm font-bold">ساوند سيستم</span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('extra')}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                    serviceType === 'extra'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-md shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Flame className="w-6 h-6" />
                  <span className="text-xs sm:text-sm font-bold">حريق وسنترالات</span>
                </button>
              </div>
            </div>

            {/* 2. Place Type & Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-200 mb-2">
                  2. نوع المنشأة / المكان:
                </label>
                <select
                  value={placeType}
                  onChange={(e) => setPlaceType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="منزل / شقة سكنية">منزل / شقة سكنية</option>
                  <option value="فيلا / مزرعة خاصة">فيلا / مزرعة خاصة</option>
                  <option value="محل تجاري / سوبرماركت">محل تجاري / سوبرماركت</option>
                  <option value="مطعم / كافيه">مطعم / كافيه</option>
                  <option value="مسجد / دار مناسبات">مسجد / دار مناسبات</option>
                  <option value="شركة / عمارة سكنية كاملة">شركة / عمارة سكنية كاملة</option>
                  <option value="فندق / منشأة سياحية">فندق / منشأة سياحية</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-200 mb-2">
                  3. الحجم أو العدد المقترح:
                </label>
                <select
                  value={unitsCount}
                  onChange={(e) => setUnitsCount(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-amber-400"
                >
                  {getUnitsOptions().map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3. Name & Location & Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-200 mb-2">
                  4. الاسم الكريم (اختياري):
                </label>
                <input
                  type="text"
                  placeholder="مثال: أحمد عبد الله"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-200 mb-2">
                  5. المنطقة / العنوان بالأقصر:
                </label>
                <input
                  type="text"
                  placeholder="مثال: القرنة – نجع أبو سعيد"
                  value={cityArea}
                  onChange={(e) => setCityArea(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-2">
                ملاحظات أو مواصفات خاصة (اختياري):
              </label>
              <textarea
                rows={2}
                placeholder="مثال: أرغب بكاميرات رؤية ليلية ملونة، أو أود صيانة سريعة قبل نهاية الأسبوع..."
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* 4. Select Who to Send To */}
            <div>
              <label className="block text-sm font-bold text-slate-200 mb-3">
                6. إرسال الطلب مباشرة إلى الفني المختص:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {CONTACT_PERSONS.map((person) => (
                  <button
                    key={person.id}
                    type="button"
                    onClick={() => setSelectedTech(person.id)}
                    className={`p-3 rounded-2xl border text-right transition-all flex items-center justify-between ${
                      selectedTech === person.id
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-200">{person.name}</div>
                      <div className="text-[11px] text-slate-400">{person.specialty}</div>
                    </div>
                    {selectedTech === person.id && (
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 hover:from-emerald-300 hover:to-emerald-400 shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-slate-950" />
                <span>إرسال الطلب فوراً عبر واتساب ({currentTech.name} – {currentTech.displayPhone})</span>
              </button>
              <p className="text-center text-xs text-slate-500 mt-2">
                سيتم فتح تطبيق واتساب مباشرة مع تجهيز كافة تفاصيل طلبك دون الحاجة لكتابتها يدوياً.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
