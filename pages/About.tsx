
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { PROCESS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32">
      {/* Brand Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <span className="text-brand-gold text-xs tracking-[0.5em] block mb-4">OUR STORY</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-tight font-light">專注於情感的<br />頂級美學顧問</h2>
            <div className="space-y-6 text-brand-dark/70 font-light leading-loose tracking-widest text-sm">
              <p>Étoile 源於法文「繁星」，象徵每段愛情都如星辰般獨特。我們成立於 2018 年，由一群對視覺藝術與生活風格極度偏執的創作者組成。</p>
              <p>在我們的觀念裡，婚禮不應該是一場制式化的排演，而是一場關於品味的深度對話。我們拒絕繁瑣無意義的傳統束縛，將重心回歸至「人」與「情感」本身。</p>
              <p>從企劃發想到現場執行，我們以精品公關的專業嚴謹度，融合藝術策展人的美學觸覺，為每一對新人打造足以珍藏一輩子的感官記憶。</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Wedding Aesthetic" 
              className="w-full aspect-[4/5] object-cover shadow-2xl bg-brand-grey"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-brand-champagne px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="服務流程" subtitle="Our Process" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS.map((p) => (
              <div key={p.id} className="bg-white p-10 relative overflow-hidden group">
                <span className="absolute -right-4 -top-4 text-7xl font-serif text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors">{p.step}</span>
                <h4 className="font-serif text-2xl mb-6 relative z-10">{p.title}</h4>
                <p className="text-brand-dark/60 text-sm font-light leading-relaxed tracking-wider relative z-10">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Wall */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="我們的團隊" subtitle="The Creatives" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover bg-brand-grey" alt="Elaine Chen - Founding Director" />
              <div className="text-center">
                <h5 className="font-serif text-xl">Elaine Chen</h5>
                <p className="text-[10px] tracking-[0.3em] text-brand-gold uppercase">Founding Director</p>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover bg-brand-grey" alt="Sophie Wang - Art Director" />
              <div className="text-center">
                <h5 className="font-serif text-xl">Sophie Wang</h5>
                <p className="text-[10px] tracking-[0.3em] text-brand-gold uppercase">Art Director</p>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover bg-brand-grey" alt="Lucas Lee - Chief Coordinator" />
              <div className="text-center">
                <h5 className="font-serif text-xl">Lucas Lee</h5>
                <p className="text-[10px] tracking-[0.3em] text-brand-gold uppercase">Chief Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
