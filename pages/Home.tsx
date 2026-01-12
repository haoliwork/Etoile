
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { FEATURES, PORTFOLIO, TESTIMONIALS } from '../constants';

interface HomeProps {
  onNavigate: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-grey">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Wedding" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="reveal active flex flex-col items-center">
            <span className="text-white/80 text-xs tracking-[0.6em] uppercase mb-6 drop-shadow-lg">
              The Art of Wedding Planning
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-light tracking-wider leading-tight mb-8">
              為您，打造一場<br />一生一次的完美婚宴
            </h1>
            <p className="text-white/90 text-sm md:text-lg font-light tracking-widest max-w-2xl mx-auto mb-12 leading-relaxed">
              從企劃、設計到現場執行，專業團隊陪你走過最重要的一天。
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white/10 backdrop-blur-md border border-white text-white px-12 py-5 text-sm tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all duration-500 group"
            >
              預約免費諮詢
              <ArrowRight className="inline-block ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-gold animate-bounce-slow" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-brand-champagne">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {FEATURES.map((feature, idx) => (
            <div 
              key={feature.id} 
              ref={addToRefs}
              className="reveal text-center p-8 border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500 group"
            >
              <div className="flex justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 tracking-wide text-brand-dark">{feature.title}</h3>
              <p className="text-brand-dark/60 text-sm leading-loose tracking-wider font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="作品精選" subtitle="Selected Works" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PORTFOLIO.map((item) => (
              <div 
                key={item.id} 
                ref={addToRefs}
                className="reveal group cursor-pointer"
                onClick={() => onNavigate('portfolio')}
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-brand-grey">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-xs tracking-[0.4em] border border-white px-6 py-3">查看案例</span>
                  </div>
                </div>
                <div className="mt-8">
                  <span className="text-[10px] tracking-[0.3em] text-brand-gold uppercase">{item.category} / {item.venue}</span>
                  <h4 className="font-serif text-2xl mt-2 tracking-wide text-brand-dark">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button 
              onClick={() => onNavigate('portfolio')}
              className="text-brand-dark text-xs tracking-[0.5em] border-b border-brand-gold pb-2 hover:text-brand-gold transition-colors"
            >
              瀏覽全部作品 VIEW ALL
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-brand-champagne">
          <img 
            src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2000" 
            alt="Philosophy" 
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div ref={addToRefs} className="reveal">
            <span className="text-brand-gold text-xs tracking-[0.5em] block mb-8">OUR PHILOSOPHY</span>
            <h2 className="font-serif text-3xl md:text-4xl leading-relaxed italic text-brand-dark font-light mb-10">
              「我們不只是在策劃一場活動，<br />
              而是在紀錄一段靈魂交織的時刻。」
            </h2>
            <p className="text-brand-dark/70 font-light leading-loose tracking-widest text-sm md:text-base">
              每一對新人都是獨立的宇宙，有著專屬的引力。我們的任務是將這份無形的愛，轉化為有形的空間藝術。從色彩的跳動、光線的流轉到花瓣的落點，每一處細節都應訴說著屬於您的故事。
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-brand-champagne/50 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="新人好評" subtitle="Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((testi) => (
              <div key={testi.id} ref={addToRefs} className="reveal bg-white p-12 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
                <img src={testi.image} alt={testi.name} className="w-24 h-24 rounded-full object-cover ring-1 ring-brand-gold/30 p-1 bg-brand-grey" loading="lazy" />
                <div>
                  <p className="text-brand-dark/70 italic font-light leading-relaxed mb-6">"{testi.content}"</p>
                  <h5 className="font-serif text-xl tracking-wide">{testi.name}</h5>
                  <span className="text-[10px] tracking-widest text-brand-gold uppercase">{testi.weddingType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 bg-brand-dark text-white text-center px-6">
        <div ref={addToRefs} className="reveal max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-12 tracking-wide font-light">讓我們一起開始<br />規劃您的夢幻婚禮</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-brand-gold text-white px-16 py-6 text-xs tracking-[0.5em] hover:bg-white hover:text-brand-dark transition-all duration-500"
          >
            START YOUR JOURNEY
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
