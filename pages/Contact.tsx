
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    contact: '',
    date: '',
    venue: '',
    needs: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      alert("諮詢表單已成功送出，我們將於 24 小時內與您聯繫。");
      setSubmitted(false);
      setFormData({ name: '', phone: '', contact: '', date: '', venue: '', needs: '' });
    }, 1000);
  };

  return (
    <div className="pt-32">
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <SectionHeader title="預約免費諮詢" subtitle="Start Your Story" />
        
        <div className="text-center mb-16">
          <p className="text-brand-dark/70 font-light tracking-widest leading-loose">
            讓我們為您打造一場值得一輩子回憶的婚禮。<br />
            請填寫下方表單，我們的資深顧問將與您預約初見時光。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 bg-white p-10 md:p-16 shadow-sm border border-brand-gold/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] text-brand-dark/40 uppercase">新人姓名 Full Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-brand-grey py-3 focus:border-brand-gold outline-none transition-colors font-light" 
                placeholder="請輸入姓名"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] text-brand-dark/40 uppercase">聯絡電話 Phone Number</label>
              <input 
                required
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-transparent border-b border-brand-grey py-3 focus:border-brand-gold outline-none transition-colors font-light" 
                placeholder="請輸入電話"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] text-brand-dark/40 uppercase">Line / Email</label>
              <input 
                required
                type="text" 
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                className="w-full bg-transparent border-b border-brand-grey py-3 focus:border-brand-gold outline-none transition-colors font-light" 
                placeholder="常用的聯繫方式"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] text-brand-dark/40 uppercase">預計婚期 Wedding Date</label>
              <input 
                required
                type="date" 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-transparent border-b border-brand-grey py-3 focus:border-brand-gold outline-none transition-colors font-light" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.3em] text-brand-dark/40 uppercase">預計場地 Expected Venue</label>
            <input 
              type="text" 
              value={formData.venue}
              onChange={(e) => setFormData({...formData, venue: e.target.value})}
              className="w-full bg-transparent border-b border-brand-grey py-3 focus:border-brand-gold outline-none transition-colors font-light" 
              placeholder="例如：台北萬豪、戶外莊園或尚未決定"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.3em] text-brand-dark/40 uppercase">需求說明 Your Requests</label>
            <textarea 
              rows={4}
              value={formData.needs}
              onChange={(e) => setFormData({...formData, needs: e.target.value})}
              className="w-full bg-transparent border border-brand-grey p-4 focus:border-brand-gold outline-none transition-colors font-light" 
              placeholder="請簡單描述您夢想中的婚禮樣貌..."
            />
          </div>

          <div className="text-center pt-6">
            <button 
              disabled={submitted}
              type="submit"
              className="bg-brand-dark text-white px-20 py-5 text-xs tracking-[0.5em] hover:bg-brand-gold transition-all duration-500 flex items-center justify-center mx-auto space-x-4 disabled:opacity-50"
            >
              <span>{submitted ? '送出中...' : 'SEND INQUIRY'}</span>
              {!submitted && <Send className="w-4 h-4" />}
            </button>
          </div>
        </form>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-brand-champagne">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-brand-gold uppercase block mb-4">Location</span>
            <p className="font-serif text-lg">台北市信義區精品路 101 號 28 樓</p>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.3em] text-brand-gold uppercase block mb-4">Email</span>
            <p className="font-serif text-lg underline underline-offset-8">hello@etoile-wedding.com</p>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.3em] text-brand-gold uppercase block mb-4">Phone</span>
            <p className="font-serif text-lg">02-2345-6789</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
