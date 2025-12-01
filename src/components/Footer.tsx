// import React from 'react';
// import { GraduationCap, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
// import WhatsAppButton from './WhatsAppButton';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-dark text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-4 gap-8">
//           {/* Logo et description */}
//           <div className="md:col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
//                 <GraduationCap className="text-white" size={24} />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold">StudZone</h2>
//                 <p className="text-secondary text-sm">100% bonne vibes</p>
//               </div>
//             </div>
//             <p className="text-gray-300 leading-relaxed">
//               Ton média étudiant préféré pour toutes les astuces, conseils et bons plans 
//               pour réussir ta vie étudiante dans la joie et la bonne humeur.
//             </p>
//           </div>
          
//           {/* Liens rapides */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Navigation</h3>
//             <ul className="space-y-2">
//               <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
//               <li><a href="/vie-etudiante" className="text-gray-300 hover:text-white transition-colors">Vie étudiante</a></li>
//               <li><a href="/sante-mentale" className="text-gray-300 hover:text-white transition-colors">Santé mentale</a></li>
//               <li><a href="/loisirs" className="text-gray-300 hover:text-white transition-colors">Loisirs</a></li>
//               <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
//             </ul>
//           </div>
          
//           {/* Contact et réseaux */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Suis-nous</h3>
//             <div className="flex space-x-4 mb-6">
//               <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors">
//                 <Mail size={20} />
//               </a>
//             </div>
            
//             <WhatsAppButton
//               phoneNumber="+225XXXXXXXX"
//               message="Bonjour, je souhaite obtenir des informations sur StudZone."
//               label="Contact WhatsApp"
//               variant="secondary"
//             />
//           </div>
//         </div>
        
//         {/* Copyright */}
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; 2023 StudZone. Tous droits réservés. Fait avec ❤️ pour les étudiants.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { GraduationCap, Facebook, Instagram, Twitter, Mail, MapPin, Phone, Heart, ArrowUp } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400 rounded-full blur-lg"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Brand section - Modern design */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    StudZone
                  </h2>
                  <p className="text-blue-300 text-sm font-medium">100% bonne vibes ✨</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6 max-w-md">
                Ton média étudiant préféré pour toutes les astuces, conseils et bons plans 
                pour réussir ta vie étudiante dans la joie et la bonne humeur.
              </p>
              
              {/* Contact info mini */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone size={16} />
                  <span>+225 07 01 78 17 01 </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail size={16} />
                  <span>contact@studzone.ci</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin size={16} />
                  <span>Abidjan, Côte D'ivoir</span>
                </div>
              </div>
            </div>
            
            {/* Quick links - Modern card style */}
            <div>
              <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Accueil" },
                  { href: "/vie-etudiante", label: "Vie étudiante" },
                  { href: "/sante-mentale", label: "Santé mentale" },
                  { href: "/loisirs", label: "Loisirs" },
                  { href: "/about", label: "À propos" },
                  { href: "/contact", label: "Contact" }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-base">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social & Contact - Interactive design */}
            <div>
              <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Restons connectés
              </h3>
              
              {/* Social media with modern icons */}
              {/* <div className="flex space-x-3 mb-8">
                {[
                  { icon: Facebook, href: "#", color: "hover:bg-blue-500" },
                  { icon: Instagram, href: "#", color: "hover:bg-pink-500" },
                  { icon: Twitter, href: "#", color: "hover:bg-cyan-400" },
                  { icon: Mail, href: "#", color: "hover:bg-red-400" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group w-12 h-12 bg-gray-700/50 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-600/50 ${social.color}`}
                  >
                    <social.icon 
                      size={20} 
                      className="text-gray-300 group-hover:text-white transition-colors" 
                    />
                  </a>
                ))}
              </div> */}
              
              {/* WhatsApp button enhanced */}
              <div className="space-y-4">
                <WhatsAppButton
                  phoneNumber="+33601364596"
                  message="Bonjour, je souhaite obtenir des informations sur StudZone."
                  label="Discuter sur WhatsApp"
                  variant="secondary"
                  className="w-full justify-center py-3 rounded-xl text-base font-semibold"
                />
                
                {/* Newsletter signup mini */}
                {/* <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                  <p className="text-sm text-gray-300 mb-2">Newsletter</p>
                  <div className="flex space-x-2">
                    <input 
                      type="email" 
                      placeholder="Ton email"
                      className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                      <Mail size={16} />
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with modern design */}
      <div className="relative border-t border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright with heart animation */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; 2025 StudZone</span>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Tous droits réservés</span>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center space-x-1 text-red-400">
                <span>Fait avec</span>
                <Heart size={16} className="fill-current animate-pulse" />
                <span>pour les étudiants</span>
              </div>
            </div>
            
            {/* Additional links */}
            {/* <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="/terms" className="hover:text-white transition-colors">Conditions</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
            </div> */}
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 bg-gray-700/50 hover:bg-blue-500 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-600/50 hover:border-blue-400 transition-all duration-300"
            >
              <span className="text-gray-300 group-hover:text-white text-sm">Haut de page</span>
              <ArrowUp size={16} className="text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating action button for mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <ArrowUp size={24} className="text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;