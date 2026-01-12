
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 核心邏輯：判斷目前背景是否為深色（僅在首頁且未捲動時為真）
  const isDarkBg = activeTab === 'home' && !isScrolled;

  const navItems = [
    { label: '首頁', id: 'home' },
    { label: '品牌故事', id: 'about' },
    { label: '服務項目', id: 'services' },
    { label: '精彩作品', id: 'portfolio' },
    { label: '聯絡我們', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isDarkBg ? 'bg-transparent py-8' : 'bg-brand-champagne/95 backdrop-blur-md shadow-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer group flex flex-col items-center" 
          onClick={() => setActiveTab('home')}
        >
          <span className={`font-serif text-3xl tracking-[0.2em] transition-colors duration-500 ${isDarkBg ? 'text-white' : 'text-brand-dark'}`}>
            ÉTOILE
          </span>
          <span className={`text-[10px] tracking-[0.4em] mt-1 transition-colors duration-500 ${isDarkBg ? 'text-brand-gold' : 'text-brand-gold'}`}>
            WEDDING STUDIO
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm tracking-widest transition-all duration-300 relative group py-2 font-medium ${
                  isActive 
                  ? 'text-brand-gold' 
                  : isDarkBg ? 'text-white hover:text-brand-gold' : 'text-brand-dark/80 hover:text-brand-gold'
                }`}
              >
                {item.label}
                {/* 中心展開底線動畫 */}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold transition-transform duration-500 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            );
          })}
          
          <button 
            onClick={() => setActiveTab('contact')}
            className={`px-8 py-3 text-[10px] tracking-[0.3em] transition-all duration-500 border uppercase font-semibold ${
              isDarkBg 
              ? 'border-white text-white hover:bg-white hover:text-brand-dark' 
              : 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white'
            }`}
          >
            預約諮詢
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-brand-dark" /> : <Menu className={isDarkBg ? "text-white" : "text-brand-dark"} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-champagne z-40 flex flex-col items-center justify-center transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-8 right-8" onClick={() => setIsOpen(false)}>
          <X className="w-8 h-8 text-brand-dark" />
        </button>
        <div className="flex flex-col space-y-10 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsOpen(false); }}
              className={`text-2xl font-serif tracking-widest relative group ${activeTab === item.id ? 'text-brand-gold' : 'text-brand-dark'}`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-brand-gold transition-transform duration-500 origin-center ${activeTab === item.id ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
          <button 
            onClick={() => { setActiveTab('contact'); setIsOpen(false); }}
            className="mt-4 px-12 py-4 border border-brand-gold text-brand-gold text-xs tracking-widest uppercase"
          >
            立即諮詢
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
