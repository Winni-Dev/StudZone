import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  backgroundColor?: 'white' | 'gray';
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  children, 
  backgroundColor = 'white' 
}) => {
  const bgClass = backgroundColor === 'gray' ? 'bg-background' : 'bg-surface';
  
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-12" data-aos="fade-up">
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Icon className="text-primary" size={32} />
            </div>
          )}
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Contenu */}
        <div data-aos="fade-up" data-aos-delay="200">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;