// import React, { useState } from 'react';
// import { GraduationCap, Brain, PartyPopper, Menu, X, Home, User, Contact } from 'lucide-react';
// import { MenuItem } from '../types';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems: MenuItem[] = [
//     {
//       label: 'Accueil',
//       href: '/',
//       icon: Home
//     },
//     {
//       label: 'À propos',
//       href: '/about',
//       icon: User
//     },
//     {
//       label: 'Menu',
//       href: '#',
//       submenu: [
//         { label: 'Vie étudiante', href: '/vie-etudiante', icon: GraduationCap },
//         { label: 'Santé mentale', href: '/sante-mentale', icon: Brain },
//         { label: 'Loisirs & associations', href: '/loisirs', icon: PartyPopper },
//       ]
//     },
//     {
//       label: 'Contact',
//       href: '/contact',
//       icon: Contact
//     }
//   ];

//   const getIcon = (IconComponent: any, size: number = 18) => {
//     return IconComponent ? <IconComponent size={size} /> : null;
//   };

//   return (
//     <header className="bg-surface shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
//               <GraduationCap className="text-white" size={24} />
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-dark">StudZone</h1>
//               <p className="text-xs text-secondary">100% bonne vibes</p>
//             </div>
//           </div>

//           {/* Navigation Desktop */}
//           <nav className="hidden lg:flex space-x-8">
//             {menuItems.map((item) => (
//               <div key={item.label} className="relative group">
//                 {item.submenu ? (
//                   <>
//                     <button className="flex items-center space-x-1 text-dark hover:text-primary transition-colors font-medium">
//                       {getIcon(item.icon)}
//                       <span>{item.label}</span>
//                     </button>
                    
//                     {/* Sous-menu */}
//                     <div className="absolute top-full left-0 mt-2 w-64 bg-surface rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border">
//                       {item.submenu.map((subItem) => (
//                         <a
//                           key={subItem.label}
//                           href={subItem.href}
//                           className="flex items-center space-x-2 px-4 py-3 text-dark hover:bg-background hover:text-primary transition-colors border-b last:border-b-0"
//                         >
//                           {getIcon(subItem.icon)}
//                           <span>{subItem.label}</span>
//                         </a>
//                       ))}
//                     </div>
//                   </>
//                 ) : (
//                   <a
//                     href={item.href}
//                     className="flex items-center space-x-1 text-dark hover:text-primary transition-colors font-medium"
//                   >
//                     {getIcon(item.icon)}
//                     <span>{item.label}</span>
//                   </a>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Bouton mobile */}
//           <button 
//             className="lg:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Navigation Mobile */}
//         {isMenuOpen && (
//           <div className="lg:hidden py-4 border-t">
//             {menuItems.map((item) => (
//               <div key={item.label} className="mb-2">
//                 {item.submenu ? (
//                   <>
//                     <div className="flex items-center space-x-2 text-dark font-medium mb-2 p-2">
//                       {getIcon(item.icon)}
//                       <span>{item.label}</span>
//                     </div>
//                     <div className="ml-6 space-y-1">
//                       {item.submenu.map((subItem) => (
//                         <a
//                           key={subItem.label}
//                           href={subItem.href}
//                           className="flex items-center space-x-2 py-2 px-4 text-dark hover:text-primary transition-colors rounded-lg hover:bg-background"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {getIcon(subItem.icon)}
//                           <span>{subItem.label}</span>
//                         </a>
//                       ))}
//                     </div>
//                   </>
//                 ) : (
//                   <a
//                     href={item.href}
//                     className="flex items-center space-x-2 py-2 px-4 text-dark hover:text-primary transition-colors rounded-lg hover:bg-background font-medium"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {getIcon(item.icon)}
//                     <span>{item.label}</span>
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { GraduationCap, Brain, PartyPopper, Menu, X, Home, User, Contact, ChevronDown, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);

  // Détection du scroll pour l'effet de fond
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Détection de la page active
  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: 'Accueil',
      href: '/',
      icon: Home
    },
    {
      label: 'À propos',
      href: '/about',
      icon: User
    },
    {
      label: 'Catégories',
      href: '#',
      submenu: [
        { label: 'Vie étudiante', href: '/vie-etudiante', icon: GraduationCap },
        { label: 'Santé mentale', href: '/sante-mentale', icon: Brain },
        { label: 'Loisirs & associations', href: '/loisirs', icon: PartyPopper },
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Contact
    }
  ];

  const getIcon = (IconComponent: any, size: number = 18) => {
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  const isActive = (href: string) => activeItem === href;

  const handleItemClick = (href: string) => {
    setActiveItem(href);
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo amélioré */}
          <a 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={() => handleItemClick('/')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                StudZone
              </h1>
              <div className="flex items-center space-x-1">
                {/* <Sparkles size={10} className="text-cyan-400" /> */}
                <p className="text-xs text-gray-500 font-medium">100% bonne vibes</p>
                {/* <Sparkles size={10} className="text-purple-400" /> */}
              </div>
            </div>
          </a>

          {/* Navigation Desktop - Version améliorée */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button 
                      className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-500 group ${
                        isActive(item.href) || item.submenu.some(sub => isActive(sub.href))
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 shadow-lg shadow-blue-500/20'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-lg'
                      }`}
                    >
                      {getIcon(item.icon, 18)}
                      <span>{item.label}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 group-hover:rotate-180 ${
                          isActive(item.href) || item.submenu.some(sub => isActive(sub.href)) ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Sous-menu amélioré */}
                    <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/20 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform origin-top -translate-y-2 group-hover:translate-y-0">
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => handleItemClick(subItem.href)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                              isActive(subItem.href)
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                          >
                            <div className={`p-2 rounded-lg transition-all duration-300 ${
                              isActive(subItem.href)
                                ? 'bg-white/20'
                                : 'bg-gray-100 group-hover:bg-blue-100'
                            }`}>
                              {getIcon(subItem.icon, 16)}
                            </div>
                            <span className="font-medium">{subItem.label}</span>
                            {isActive(subItem.href) && (
                              <div className="w-2 h-2 bg-white rounded-full ml-auto"></div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => handleItemClick(item.href)}
                    className={`relative flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-500 group ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-lg'
                    }`}
                  >
                    {getIcon(item.icon, 18)}
                    <span>{item.label}</span>
                    
                    {/* Indicateur d'état actif */}
                    {isActive(item.href) && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Bouton mobile amélioré */}
          <button 
            className={`lg:hidden p-3 rounded-2xl transition-all duration-500 ${
              isMenuOpen 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={20} className="animate-spin-in" />
            ) : (
              <Menu size={20} className="animate-pulse" />
            )}
          </button>
        </div>

        {/* Navigation Mobile - Version améliorée */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <div 
                  key={item.label} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.submenu ? (
                    <>
                      <div className={`flex items-center space-x-3 p-4 rounded-2xl font-semibold transition-all duration-300 ${
                        item.submenu.some(sub => isActive(sub.href))
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600'
                          : 'text-gray-600'
                      }`}>
                        {getIcon(item.icon, 20)}
                        <span>{item.label}</span>
                        <ChevronDown size={16} className="ml-auto" />
                      </div>
                      <div className="ml-6 space-y-1 border-l-2 border-gray-100 pl-4">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => handleItemClick(subItem.href)}
                            className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                              isActive(subItem.href)
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                            style={{ animationDelay: `${(index * 100) + (subIndex * 50)}ms` }}
                          >
                            <div className={`p-2 rounded-lg ${
                              isActive(subItem.href) ? 'bg-white/20' : 'bg-gray-100'
                            }`}>
                              {getIcon(subItem.icon, 16)}
                            </div>
                            <span className="font-medium">{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => handleItemClick(item.href)}
                      className={`flex items-center space-x-3 p-4 rounded-2xl font-semibold transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {getIcon(item.icon, 20)}
                      <span>{item.label}</span>
                      {isActive(item.href) && (
                        <div className="w-2 h-2 bg-white rounded-full ml-auto animate-pulse"></div>
                      )}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-in {
          from {
            transform: rotate(-180deg);
            opacity: 0;
          }
          to {
            transform: rotate(0deg);
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        .animate-spin-in {
          animation: spin-in 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;