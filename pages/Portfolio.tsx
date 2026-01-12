
import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState('全部');
  const categories = ['全部', '戶外婚禮', '飯店婚宴', '主題婚禮', '小型精緻婚禮'];

  useEffect(() => {
    if (selectedItem) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedItem]);

  const filteredItems = filter === '全部' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  if (selectedItem) {
    const filteredGallery = selectedItem.gallery.filter(img => img !== selectedItem.image);

    return (
      <div className="pt-24 pb-20 bg-white">
        <article className="max-w-7xl mx-auto px-6">
          {/* Top Navigation Bar */}
          <div className="py-8 flex justify-between items-center border-b border-brand-grey mb-16">
            <button 
              onClick={() => setSelectedItem(null)}
              className="flex items-center text-[10px] tracking-[0.3em] text-brand-dark hover:text-brand-gold uppercase transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> 
              Back to Collection
            </button>
            <span className="text-[10px] tracking-[0.4em] text-brand-gold uppercase font-medium">
              Case Study / {selectedItem.id.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Hero Header: Title & Main Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase block mb-6">
                {selectedItem.category} — {selectedItem.venue}
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-10 leading-[1.1] tracking-tight text-brand-dark">
                {selectedItem.title}
              </h1>
              <div className="h-[1px] w-20 bg-brand-gold mb-10" />
              <p className="text-brand-dark/70 font-light leading-relaxed tracking-[0.05em] text-lg lg:text-xl italic font-serif">
                {selectedItem.description}
              </p>
              <div className="mt-12 space-y-6 text-brand-dark/60 font-light leading-loose tracking-widest text-sm border-l border-brand-grey pl-8">
                <p>{selectedItem.concept}</p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="overflow-hidden bg-brand-grey shadow-2xl aspect-[4/5]">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* The Gallery: Structured Editorial Grid */}
          {/* 使用 Grid 12 欄位系統取代 Columns 瀑布流，解決排列異常與底部空隙問題 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 mb-32">
            {filteredGallery.map((img, idx) => {
              // 定義雜誌感排版節奏
              let spanClass = "md:col-span-6 aspect-square"; // 預設：半寬方圖
              if (idx === 0 || idx === 3) {
                spanClass = "md:col-span-12 aspect-[16/9]"; // 第一張與第四張：全寬橫圖
              } else if (idx === 1) {
                spanClass = "md:col-span-7 aspect-[4/5]"; // 第二張：寬版長圖
              } else if (idx === 2) {
                spanClass = "md:col-span-5 aspect-[4/5]"; // 第三張：窄版長圖
              }
              
              return (
                <div 
                  key={idx} 
                  className={`overflow-hidden bg-brand-grey shadow-sm group ${spanClass}`}
                >
                  <img 
                    src={img} 
                    alt={`${selectedItem.title} detail ${idx}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-[1.5s] ease-out"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* Testimonial Section */}
          <div className="max-w-4xl mx-auto mb-32">
            <div className="bg-brand-champagne/40 p-12 md:p-24 text-center relative">
              <span className="font-serif text-[120px] text-brand-gold/10 absolute top-0 left-1/2 -translate-x-1/2 select-none">“</span>
              <p className="font-serif text-2xl md:text-3xl italic mb-10 relative z-10 leading-relaxed text-brand-dark/80">
                {selectedItem.coupleFeedback.text}
              </p>
              <div className="inline-block">
                <div className="h-[1px] w-8 bg-brand-gold mx-auto mb-4" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold">
                  {selectedItem.coupleFeedback.author}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="pt-20 border-t border-brand-grey flex flex-col md:flex-row justify-between items-center group cursor-pointer" onClick={() => setSelectedItem(null)}>
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <p className="text-[10px] tracking-[0.5em] text-brand-dark/40 uppercase mb-3 font-medium">Explore More</p>
              <h4 className="font-serif text-3xl md:text-4xl tracking-wide group-hover:text-brand-gold transition-colors">瀏覽其他精彩案例</h4>
            </div>
            <div className="w-20 h-20 rounded-full border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500">
              <ChevronRight className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors" />
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-brand-champagne/20">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionHeader title="婚禮作品集" subtitle="Portfolio" />
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] tracking-[0.4em] uppercase pb-2 transition-all duration-500 relative ${
                filter === cat ? 'text-brand-gold' : 'text-brand-dark/40 hover:text-brand-dark'
              }`}
            >
              {cat}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold transition-transform duration-500 origin-left ${filter === cat ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-brand-grey">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="border border-white/50 backdrop-blur-sm px-10 py-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white text-[10px] tracking-[0.5em] uppercase">Read Story</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.3em] text-brand-gold uppercase font-medium">{item.venue}</span>
                <h4 className="font-serif text-3xl tracking-wide text-brand-dark group-hover:text-brand-gold transition-colors">{item.title}</h4>
                <div className="h-[1px] w-8 bg-brand-grey group-hover:w-16 group-hover:bg-brand-gold transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
