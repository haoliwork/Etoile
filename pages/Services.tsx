
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionHeader title="專業服務項目" subtitle="Exquisite Services" />
        
        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
            >
              <div className="w-full md:w-1/2 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full aspect-[16/10] object-cover transform hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <span className="text-brand-gold text-xs font-serif italic">0{service.id}</span>
                <h3 className="font-serif text-3xl md:text-4xl tracking-wide">{service.title}</h3>
                <p className="text-brand-dark/70 font-light leading-loose tracking-widest">
                  {service.description} 
                  我們提供從初步概念討論到執行細節的全方位支持，確保婚禮的每一個維度都能達到精品級的水準。
                </p>
                <ul className="space-y-4 text-sm font-light text-brand-dark/80 tracking-widest list-disc list-inside">
                  <li>量身定製的風格設計方案</li>
                  <li>嚴選頂級合作廠商媒合</li>
                  <li>全流程時間軸規劃與掌控</li>
                  <li>專業現場執行團隊</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid Mini */}
      <section className="py-32 bg-brand-dark text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <h4 className="font-serif text-xl mb-4 text-brand-gold">主題美學</h4>
            <p className="text-sm font-light tracking-widest text-white/60">打造獨特的視覺語言，讓賓客踏入空間即感受您的品味。</p>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4 text-brand-gold">流暢控場</h4>
            <p className="text-sm font-light tracking-widest text-white/60">細緻到秒的流程安排，讓情感在最適當的時機綻放。</p>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4 text-brand-gold">嚴選資源</h4>
            <p className="text-sm font-light tracking-widest text-white/60">僅與業內頂尖花藝、攝影、餐飲夥伴合作。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
