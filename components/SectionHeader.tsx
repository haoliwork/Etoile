
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-brand-gold text-xs tracking-[0.5em] uppercase block mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-brand-dark tracking-wide font-light">
        {title}
      </h2>
      <div className={`h-[1px] w-12 bg-brand-gold mt-8 ${centered ? 'mx-auto' : 'ml-0'}`} />
    </div>
  );
};

export default SectionHeader;
