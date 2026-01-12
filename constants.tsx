import React from 'react';
import { Sparkles, Palette, Calendar, ClipboardCheck } from 'lucide-react';
import { Feature, PortfolioItem, Testimonial, ServiceItem, ProcessStep } from './types';

export const FEATURES: Feature[] = [
  {
    id: 1,
    icon: <Calendar className="w-8 h-8 text-brand-gold stroke-[1px]" />,
    title: "全程企劃",
    description: "從第一份清單到婚禮謝幕，我們全程隨侍在側。"
  },
  {
    id: 2,
    icon: <Palette className="w-8 h-8 text-brand-gold stroke-[1px]" />,
    title: "客製設計",
    description: "拒絕套版，每一場婚禮都是新人靈與審美的延伸。"
  },
  {
    id: 3,
    icon: <ClipboardCheck className="w-8 h-8 text-brand-gold stroke-[1px]" />,
    title: "流程控場",
    description: "精確的時間掌控與突發狀況處理，讓您無後顧之憂。"
  },
  {
    id: 4,
    icon: <Sparkles className="w-8 h-8 text-brand-gold stroke-[1px]" />,
    title: "細節美學",
    description: "極致追求每一個微小視角，打造如藝術品般的氛圍。"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "香檳金色的午後",
    category: "戶外婚禮",
    venue: "陽明山戶外莊園",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    description: "在午後暖陽下，用香檳與花藝編織的森林美夢。",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
    ],
    concept: "本場婚禮的核心在於「光影與自然的共生」。我們利用陽明山獨有的午後斜射光，選用低飽和度的香檳金與杏色花材，打破傳統戶外婚禮的繁複感。透過大量的通透材質與鏡面元素，將森林的綠意引入宴席之中，創造出一個如夢似幻的半透明空間。",
    coupleFeedback: {
      text: "原本擔心戶外婚禮會太亂，但 Étoile 的設計完全超乎期待，那種高級感是從骨子裡散發出來參觀的。",
      author: "Cynthia & James"
    }
  },
  {
    id: 2,
    title: "極簡現代交響",
    category: "飯店婚宴",
    venue: "台北萬豪酒店",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    description: "高級灰與銀色調，打造都會頂級的極簡奢華。",
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200"
    ],
    concept: "在都會摩天大樓中，我們試圖定義一種「安靜的奢華」。捨棄掉所有具象的裝飾，轉而運用光影律動與異材質拼接（絲絨、鋼、壓克力）來建構空間感。整場色調由炭灰過渡至銀白，冷色調中透過暖黃點光源與線條感的蘭花佈置，營造出如交響樂般的優雅層次。",
    coupleFeedback: {
      text: "我們不喜歡太紅太紫的東西，這場極簡婚禮完美呈現了我們的生活美學，至今親友都還在討論。",
      author: "Irene & Mark"
    }
  },
  {
    id: 3,
    title: "法式復古浪漫",
    category: "主題婚禮",
    venue: "翡冷翠莊園",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200",
    description: "紅絲絨與古董蕾絲，彷彿置身 18 世紀的巴黎沙龍。",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200"
    ],
    concept: "靈感源自於海明威的《流動的饗宴》。我們在翡冷翠莊園中重現了 1920 年代的巴黎魅力。深寶石紅的玫瑰與大量的手繪金色細節交織。透過蠟燭的搖曳火光與古董家具的陳列，我們不僅是在佈置婚禮，更是在構築一個跨越時空的電影場景。",
    coupleFeedback: {
      text: "這是我見過最浪漫的復古主題，Étoile 對於細節的雕琢簡直是強迫症等級，太美了。",
      author: "Vivian & Leo"
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "全程婚禮策畫",
    description: "從婚期挑選、預算規劃到婚紗挑選，全方位的貼心陪伴。",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "主題婚禮設計",
    description: "結合您的故事，打造獨一無二的視覺主題與氛圍設計。",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "當日統籌執行",
    description: "由資深場控坐鎮，確保流程流暢、人員準確到位。",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
  }
];

export const PROCESS: ProcessStep[] = [
  { id: 1, step: "01", title: "初見諮詢", description: "傾聽您的需求、風格偏好與預算目標。" },
  { id: 2, step: "02", title: "創意提案", description: "提供初步的視覺企劃書與初步預算配比。" },
  { id: 3, step: "03", title: "細節設計", description: "確認佈置細節、流程設計、廠商媒合。" },
  { id: 4, step: "04", title: "當日執行", description: "專業團隊進駐，將夢夢藍圖化為現實空間。" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Cynthia & James",
    content: "Étoile 把我們腦海中零碎的畫面拼湊成了這輩子最美的現實，每一個細節都完美到令人驚艷。",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400",
    weddingType: "森林系莊園婚禮"
  },
  {
    id: 2,
    name: "Irene & Mark",
    content: "即使我們身在海外，溝通起來也毫無障礙。專業的統籌讓我們那天只需要負責幸福大笑。",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400",
    weddingType: "極簡飯店午宴"
  }
];