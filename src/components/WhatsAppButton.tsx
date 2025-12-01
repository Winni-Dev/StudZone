import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
  variant?: 'primary' | 'secondary';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = '', 
  label = 'Nous contacter',
  variant = 'primary'
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  const baseClasses = "flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg";
  const variantClasses = variant === 'primary' 
    ? "bg-green-500 text-white hover:bg-green-600" 
    : "bg-white text-green-500 border border-green-500 hover:bg-green-50";
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      <MessageCircle size={20} />
      <span>{label}</span>
    </a>
  );
};

export default WhatsAppButton;