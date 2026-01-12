
export interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  venue: string;
  image: string;
  description: string;
  gallery: string[];
  concept: string;
  coupleFeedback: {
    text: string;
    author: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  weddingType: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}
