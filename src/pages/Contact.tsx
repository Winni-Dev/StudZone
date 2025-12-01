// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import Section from '../components/Section';
// import ContactForm from '../components/ContactForm';
// import WhatsAppButton from '../components/WhatsAppButton';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   return (
//     <div>
//       {/* Hero Contact */}
//       <section className="bg-gradient-to-br from-secondary/10 to-accent/20 py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl lg:text-6xl font-bold text-dark mb-6">
//             Contacte
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
//               l'équipe
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Une question, une suggestion, ou simplement envie de discuter ? 
//             Nous sommes toujours ravis d'échanger avec notre communauté.
//           </p>
//         </div>
//       </section>

//       <Section title="Restons en contact">
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Informations de contact */}
//           <div data-aos="fade-right">
//             <h2 className="text-3xl font-bold text-dark mb-6">
//               Parlons de ton projet
//             </h2>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               Que tu aies une question sur un article, une idée de sujet, 
//               ou simplement envie de partager ton expérience étudiante, 
//               n'hésite pas à nous contacter. Nous répondons sous 24h !
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                   <Mail className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-dark">Email</h3>
//                   <p className="text-gray-600">contact@studzone.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
//                   <Phone className="text-secondary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-dark">Téléphone</h3>
//                   <p className="text-gray-600">+225 XX XX XX XX</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
//                   <MapPin className="text-dark" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-dark">Adresse</h3>
//                   <p className="text-gray-600">Campus Universitaire, Abidjan</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Boutons d'action */}
//             <div className="mt-8 space-y-4">
//               <WhatsAppButton
//                 phoneNumber="+225XXXXXXXX"
//                 message="Bonjour, je souhaite obtenir des informations sur StudZone."
//                 label="Discuter sur WhatsApp"
//               />
              
//               <button className="w-full bg-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
//                 <Mail size={20} />
//                 <span>Envoyer un email</span>
//               </button>
//             </div>
//           </div>
          
//           {/* Formulaire de contact */}
//           <div data-aos="fade-left">
//             <ContactForm />
//           </div>
//         </div>
//       </Section>

//       {/* FAQ rapide */}
//       <Section title="Questions fréquentes" backgroundColor="gray">
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           <div className="bg-surface rounded-2xl p-6 shadow-sm">
//             <h3 className="font-bold text-dark mb-3">Comment proposer un article ?</h3>
//             <p className="text-gray-600">
//               Envoie-nous ton idée via le formulaire de contact ou directement par WhatsApp. 
//               Nous étudions toutes les propositions avec attention !
//             </p>
//           </div>
          
//           <div className="bg-surface rounded-2xl p-6 shadow-sm">
//             <h3 className="font-bold text-dark mb-3">Quand sont publiés les nouveaux articles ?</h3>
//             <p className="text-gray-600">
//               Nous publions du nouveau contenu chaque semaine, généralement les lundis et jeudis. 
//               Abonne-toi à notre newsletter pour ne rien manquer !
//             </p>
//           </div>
          
//           <div className="bg-surface rounded-2xl p-6 shadow-sm">
//             <h3 className="font-bold text-dark mb-3">Puis-je rejoindre l'équipe ?</h3>
//             <p className="text-gray-600">
//               Absolument ! Nous cherchons toujours des passionnés pour rejoindre notre équipe. 
//               Contacte-nous pour en discuter.
//             </p>
//           </div>
          
//           <div className="bg-surface rounded-2xl p-6 shadow-sm">
//             <h3 className="font-bold text-dark mb-3">Comment signaler une erreur ?</h3>
//             <p className="text-gray-600">
//               Si tu repères une coquille ou une information inexacte, 
//               n'hésite pas à nous le signaler. Nous corrigeons au plus vite.
//             </p>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users, Heart } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactStats = [
    { number: '24h', label: 'Temps de réponse moyen', icon: Clock },
    { number: '98%', label: 'Satisfaction Etudiant', icon: Heart },
    { number: '500+', label: 'Étudiants aidés', icon: Users }
  ];

  // Fonction pour gérer les changements dans les inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Fonction pour générer le message WhatsApp
  const generateWhatsAppMessage = () => {
    const { name, email, subject, message } = formData;
    
    let whatsappMessage = `Bonjour StudZone !\n\n`;
    
    if (name) whatsappMessage += `👤 *Nom:* ${name}\n`;
    if (email) whatsappMessage += `📧 *Email:* ${email}\n`;
    if (subject) whatsappMessage += `📋 *Sujet:* ${subject}\n`;
    if (message) whatsappMessage += `\n💬 *Message:*\n${message}\n\n`;
    
    whatsappMessage += `---\n*Message envoyé via le site StudZone*`;
    
    return encodeURIComponent(whatsappMessage);
  };

  // Fonction pour rediriger vers WhatsApp
  const redirectToWhatsApp = () => {
    const phoneNumber = "+33601364596"; 
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Vérifier si le formulaire a du contenu
  const hasFormContent = formData.name || formData.email || formData.subject || formData.message;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Contact avec fond animé */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 md:py-28 overflow-hidden">
        {/* Fond animé */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-20 animate-float">
            <div className="absolute inset-0 bg-blue-300 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-cyan-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 bg-cyan-300 rounded-full blur-sm"></div>
          </div>
          
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div 
            className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <MessageCircle size={16} />
            <span>Nous sommes à votre écoute</span>
          </div>
          
          {/* Titre principal */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Contactez
            <span 
              className={`block bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              l'équipe
            </span>
          </h1>
          
          {/* Sous-titre */}
          <p 
            className={`text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Une question, une suggestion, ou simplement envie de discuter ? 
            Nous sommes toujours ravis d'échanger avec notre communauté étudiante.
          </p>

          {/* Statistiques */}
          <div 
            className={`flex flex-wrap justify-center gap-6 md:gap-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {contactStats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-blue-200">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section principale de contact */}
      <Section 
        title="Restons en contact" 
        subtitle="Choisissez le moyen de communication qui vous convient le mieux"
        icon={MessageCircle}
      >
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Parlons de ton projet étudiant
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Que tu aies une question sur un article, une idée de sujet passionnant, 
                ou simplement envie de partager ton expérience étudiante, 
                notre équipe est là pour t'écouter et te répondre sous 24h.
              </p>
              
              <div className="space-y-6 mb-8">
                <div 
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                    <p className="text-gray-600">contact@studzone.ci</p>
                  </div>
                </div>
                
                <div 
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Téléphone</h3>
                    <p className="text-gray-600">+225 07 01 78 17 01 </p>
                  </div>
                </div>
                
                <div 
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Adresse</h3>
                    <p className="text-gray-600">Digit Academy, Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulaire de contact personnalisé */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-sm border border-purple-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
              
              <div className="space-y-6">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Votre nom complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="Question générale">Question générale</option>
                    <option value="Proposition d'article">Proposition d'article</option>
                    <option value="Problème technique">Problème technique</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                {/* Bouton d'envoi WhatsApp */}
                <button
                  onClick={redirectToWhatsApp}
                  disabled={!hasFormContent}
                  className={`w-full group py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg ${
                    hasFormContent 
                      ? 'bg-green-500 hover:bg-green-600 text-white hover:shadow-2xl hover:scale-105' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <MessageCircle size={20} />
                  <span className="text-lg">
                    {hasFormContent ? 'Envoyer sur WhatsApp' : 'Remplissez le formulaire'}
                  </span>
                  <Send size={16} className={`${hasFormContent ? 'group-hover:translate-x-1' : ''} transition-transform`} />
                </button>

                {/* Indicateur */}
                {hasFormContent && (
                  <p className="text-sm text-green-600 text-center">
                    ✓ Votre message est prêt à être envoyé sur WhatsApp
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ rapide - Version moderne */}
      <Section 
        title="Questions fréquentes" 
        subtitle="Trouvez rapidement des réponses à vos interrogations"
        backgroundColor="light"
        icon={MessageCircle}
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              question: "Comment proposer un article ?",
              answer: "Envoie-nous ton idée via le formulaire de contact ou directement par WhatsApp. Nous étudions toutes les propositions avec attention et créativité !",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              question: "Quand sont publiés les nouveaux articles ?",
              answer: "Nous publions du nouveau contenu chaque semaine, généralement les lundis et jeudis. Abonne-toi à notre newsletter pour ne rien manquer !",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              question: "Puis-je rejoindre l'équipe ?",
              answer: "Absolument ! Nous cherchons toujours des passionnés pour rejoindre notre équipe. Contacte-nous pour discuter de tes compétences et ambitions.",
              gradient: "from-orange-500 to-red-500"
            },
            {
              question: "Comment signaler une erreur ?",
              answer: "Si tu repères une coquille ou une information inexacte, n'hésite pas à nous le signaler. Nous corrigeons au plus vite pour maintenir la qualité.",
              gradient: "from-green-500 to-teal-500"
            }
          ].map((faq, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <MessageCircle size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Prêt à échanger avec nous ?
          </h2>
          
          <p 
            className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Notre équipe est disponible pour répondre à toutes vos questions 
            et vous accompagner dans votre parcours étudiant.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            {/* <button
              onClick={redirectToWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>Nous contacter sur WhatsApp</span>
            </button>
            
            <button className="border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm">
              Voir nos articles
            </button> */}
          </div>
        </div>
      </section>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;