import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import WhatsAppButton from './WhatsAppButton';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, tu intégreras l'envoi vers ton backend
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    
    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface rounded-2xl p-8 shadow-sm text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold text-dark mb-2">Message envoyé !</h3>
        <p className="text-gray-600">
          Merci pour ton message. Nous te répondons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-2xl p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-dark mb-6">Envoie-nous un message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Ton nom et prénom"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="ton@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Ton message..."
          />
        </div>
        
        <div className="space-y-4">
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Envoyer le message</span>
          </button>
          
          <div className="text-center text-gray-500">ou</div>
          
          <WhatsAppButton
            phoneNumber="+225XXXXXXXX"
            message={`Bonjour, je m'appelle ${formData.name} (${formData.email}). ${formData.message}`}
            label="Envoyer via WhatsApp"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;