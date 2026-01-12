
import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-champagne py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding */}
        <div className="md:col-span-2">
          <h2 className="font-serif text-4xl tracking-widest mb-4">ÉTOILE</h2>
          <p className="text-brand-champagne/60 max-w-md leading-relaxed font-light tracking-wide">
            為您打造一場一生一次的完美婚宴。<br />
            將情感凝結成永恆的視覺藝術，陪伴您走過最重要的一天。
          </p>
          <div className="flex space-x-6 mt-8">
            <a href="#" className="hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-serif text-xl mb-6 tracking-wide">Explore</h3>
          <ul className="space-y-4 text-sm font-light tracking-widest text-brand-champagne/80">
            <li><a href="#" className="hover:text-brand-gold transition-colors">品牌故事</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">服務項目</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">婚禮作品集</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">客戶推薦</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif text-xl mb-6 tracking-wide">Connect</h3>
          <ul className="space-y-4 text-sm font-light text-brand-champagne/80">
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>02-2345-6789</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>hello@etoile-wedding.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-brand-gold mt-1" />
              <span>台北市信義區精品路 101 號 28 樓</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-champagne/10 flex flex-col md:row justify-between items-center text-[10px] tracking-[0.3em] text-brand-champagne/40">
        <p>© 2024 ÉTOILE WEDDING STUDIO. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0">DESIGNED BY ELITE STUDIO</p>
      </div>
    </footer>
  );
};

export default Footer;
