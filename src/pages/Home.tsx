// import React from 'react';
// import { GraduationCap, Brain, PartyPopper, Lightbulb, Zap } from 'lucide-react';
// import Hero from '../components/Hero';
// import Section from '../components/Section';
// import ArticleCard from '../components/ArticleCard';
// import WhatsAppButton from '../components/WhatsAppButton';
// import { articles } from '../data/articles';

// const Home: React.FC = () => {
//   const featuredArticles = articles.filter(article => article.featured);
//   const vieEtudianteArticles = articles.filter(article => 
//     article.category === 'vie-etudiante' && !article.featured
//   ).slice(0, 3);
//   const santeMentaleArticles = articles.filter(article => 
//     article.category === 'sante-mentale' && !article.featured
//   ).slice(0, 3);
//   const loisirsArticles = articles.filter(article => 
//     article.category === 'loisirs' && !article.featured
//   ).slice(0, 3);

//   return (
//     <div>
//       <Hero />
      
//       {/* Articles à la une */}
//       <Section 
//         title="À la une" 
//         subtitle="Découvre nos articles les plus populaires"
//         backgroundColor="gray"
//       >
//         <div className="grid lg:grid-cols-2 gap-8">
//           {featuredArticles.map((article, index) => (
//             <ArticleCard 
//               key={article.id} 
//               article={article} 
//               featured={index === 0}
//             />
//           ))}
//         </div>
//       </Section>
      
//       {/* Vie étudiante */}
//       <Section 
//         title="Vie étudiante" 
//         subtitle="Conseils pratiques pour ton quotidien sur le campus"
//         icon={GraduationCap}
//       >
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {vieEtudianteArticles.map(article => (
//             <ArticleCard key={article.id} article={article} />
//           ))}
//         </div>
//       </Section>
      
//       {/* Santé mentale */}
//       <Section 
//         title="Santé mentale" 
//         subtitle="Prends soin de ton bien-être psychologique"
//         icon={Brain}
//         backgroundColor="gray"
//       >
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {santeMentaleArticles.map(article => (
//             <ArticleCard key={article.id} article={article} />
//           ))}
//         </div>
        
//         {/* Bloc d'aide immédiate */}
//         <div className="bg-primary text-white rounded-2xl p-8 mt-12 text-center" data-aos="zoom-in">
//           <Brain size={48} className="mx-auto mb-4" />
//           <h3 className="text-2xl font-bold mb-4">Besoin de parler ?</h3>
//           <p className="text-lg mb-6 opacity-90">
//             Notre équipe d'écoute est disponible pour t'accompagner
//           </p>
//           <WhatsAppButton
//             phoneNumber="+225XXXXXXXX"
//             message="Bonjour, je souhaite parler à quelqu'un au sujet de ma santé mentale."
//             label="Parler à quelqu'un"
//             variant="secondary"
//           />
//         </div>
//       </Section>
      
//       {/* Loisirs */}
//       <Section 
//         title="Loisirs & associations" 
//         subtitle="Détends-toi et découvre la vie associative"
//         icon={PartyPopper}
//       >
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {loisirsArticles.map(article => (
//             <ArticleCard key={article.id} article={article} />
//           ))}
//         </div>
//       </Section>
      
//       {/* Fun Facts & Life Hacks */}
//       <Section 
//         title="Fun & Astuces" 
//         subtitle="Des pépites pour égayer ta vie étudiante"
//         backgroundColor="gray"
//       >
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Fun Facts */}
//           <div className="bg-surface rounded-2xl p-8 shadow-sm" data-aos="fade-right">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
//                 <Lightbulb className="text-dark" size={24} />
//               </div>
//               <h3 className="text-2xl font-bold text-dark">Fun Facts</h3>
//             </div>
//             <div className="space-y-4">
//               <div className="p-4 bg-background rounded-lg">
//                 <p className="font-semibold">🎯 Le savais-tu ?</p>
//                 <p className="text-gray-600 mt-1">
//                   Prendre des pauses de 5 minutes toutes les 25 minutes augmente ta productivité de 40% !
//                 </p>
//               </div>
//               <div className="p-4 bg-background rounded-lg">
//                 <p className="font-semibold">🌱 Astuce green</p>
//                 <p className="text-gray-600 mt-1">
//                   Les plantes dans ta chambre d'étudiant améliorent la qualité de l'air et réduisent le stress.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Life Hacks */}
//           <div className="bg-surface rounded-2xl p-8 shadow-sm" data-aos="fade-left">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
//                 <Zap className="text-white" size={24} />
//               </div>
//               <h3 className="text-2xl font-bold text-dark">Life Hacks</h3>
//             </div>
//             <div className="space-y-4">
//               <div className="p-4 bg-background rounded-lg">
//                 <p className="font-semibold">⏰ Organisation</p>
//                 <p className="text-gray-600 mt-1">
//                   Utilise la technique Pomodoro : 25 min de travail + 5 min de pause = efficacité maximale !
//                 </p>
//               </div>
//               <div className="p-4 bg-background rounded-lg">
//                 <p className="font-semibold">💰 Économies</p>
//                 <p className="text-gray-600 mt-1">
//                   Mets de côté 10% de ton budget mensuel, même petit, ça fait la différence à la fin de l'année.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// };

// export default Home;




// import React, { useState, useEffect, useRef } from 'react';
// import { GraduationCap, Brain, PartyPopper, Lightbulb, Zap, ChevronLeft, ChevronRight, Users, BookOpen, Smile } from 'lucide-react';
// import Hero from '../components/Hero';
// import Section from '../components/Section';
// import ArticleCard from '../components/ArticleCard';
// import WhatsAppButton from '../components/WhatsAppButton';
// import { articles } from '../data/articles';

// const Home: React.FC = () => {
//   const featuredArticles = articles.filter(article => article.featured);
//   const vieEtudianteArticles = articles.filter(article => 
//     article.category === 'vie-etudiante' && !article.featured
//   ).slice(0, 3);
//   const santeMentaleArticles = articles.filter(article => 
//     article.category === 'sante-mentale' && !article.featured
//   ).slice(0, 3);
//   const loisirsArticles = articles.filter(article => 
//     article.category === 'loisirs' && !article.featured
//   ).slice(0, 3);

//   // Carousel state
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
  
//   // Stats counters - initialisation correcte
//   const [stats, setStats] = useState({
//     students: 0,
//     articles: 0,
//     happyStudents: 0
//   });

//   const statsRef = useRef(null);
//   const hasAnimated = useRef(false);

//   // Images réelles pour le carousel
//   const carouselImages = [
//     {
//       src: "https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Bienvenue sur CampusLife",
//       subtitle: "Ton compagnon quotidien pour réussir ta vie étudiante"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       title: "Santé & Bien-être",
//       subtitle: "Prends soin de ton équilibre mental et physique"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       title: "Vie Associative",
//       subtitle: "Découvre les activités et rencontres sur ton campus"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       title: "Conseils Pratiques",
//       subtitle: "Des astuces pour ton quotidien d'étudiant"
//     }
//   ];

//   // Animation d'apparition générale au chargement
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Auto-advance carousel avec transition plus douce
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [carouselImages.length]);

//   // Animation des compteurs
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
          
//           const targetStats = {
//             students: 12500,
//             articles: 347,
//             happyStudents: 8900
//           };

//           const duration = 2000;
//           const steps = 60;
//           const stepDuration = duration / steps;

//           Object.keys(targetStats).forEach(key => {
//             let current = 0;
//             const target = targetStats[key];
//             const increment = target / steps;

//             const timer = setInterval(() => {
//               current += increment;
//               if (current >= target) {
//                 current = target;
//                 clearInterval(timer);
//               }
//               setStats(prev => ({
//                 ...prev,
//                 [key]: Math.floor(current)
//               }));
//             }, stepDuration);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Carousel Élégant avec corrections mobile */}
//       <div className="relative h-[60vh] min-h-[500px] md:h-[70vh] md:min-h-[600px] w-full overflow-hidden">
//         <div 
//           className="flex transition-transform duration-700 ease-out h-full"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {carouselImages.map((image, index) => (
//             <div key={index} className="w-full h-full flex-shrink-0 relative">
//               <img 
//                 src={image.src} 
//                 alt={image.title}
//                 className="w-full h-full object-cover"
//               />
//               {/* Overlay sombre pour meilleur contraste */}
//               <div className="absolute inset-0 bg-black/50"></div>
              
//               {/* Contenu du slide avec padding pour éviter les boutons */}
//               <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
//                 <div className="text-center text-white max-w-4xl mx-auto">
//                   <h1 
//                     className={`text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 font-serif leading-tight transition-all duration-1000 ${
//                       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                     }`}
//                     style={{ transitionDelay: `${index * 200}ms` }}
//                   >
//                     {image.title}
//                   </h1>
//                   <p 
//                     className={`text-base md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-95 leading-relaxed px-4 transition-all duration-1000 ${
//                       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                     }`}
//                     style={{ transitionDelay: `${index * 200 + 300}ms` }}
//                   >
//                     {image.subtitle}
//                   </p>
//                   <button 
//                     className={`bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base transition-all duration-1000 ${
//                       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                     }`}
//                     style={{ transitionDelay: `${index * 200 + 600}ms` }}
//                   >
//                     Commencer l'aventure
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contrôles du carousel - repositionnés sur mobile */}
//         <button 
//           onClick={prevSlide}
//           className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//           style={{ transitionDelay: '800ms' }}
//         >
//           <ChevronLeft size={20} className="md:w-6 md:h-6" />
//         </button>
//         <button 
//           onClick={nextSlide}
//           className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//           style={{ transitionDelay: '800ms' }}
//         >
//           <ChevronRight size={20} className="md:w-6 md:h-6" />
//         </button>

//         {/* Indicateurs améliorés */}
//         <div 
//           className={`absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//           style={{ transitionDelay: '900ms' }}
//         >
//           {carouselImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-8 h-1 md:w-12 md:h-2 rounded-full transition-all duration-500 ${
//                 index === currentSlide 
//                   ? 'bg-white shadow-lg' 
//                   : 'bg-white/50 hover:bg-white/70'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Section Stats - Correction pour affichage en ligne sur mobile */}
//       <div ref={statsRef} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 md:py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-row justify-between items-center space-x-4 md:grid md:grid-cols-3 md:gap-8 text-center overflow-x-auto">
//             {/* Étudiants actifs */}
//             <div 
//               className="flex-shrink-0 min-w-[100px] md:min-w-0 space-y-2 md:space-y-4"
//               data-aos="fade-up"
//               data-aos-duration="800"
//             >
//               <div className="flex justify-center">
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <Users size={20} className="md:w-8 md:h-8" />
//                 </div>
//               </div>
//               <div className="text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
//                 {stats.students.toLocaleString()}+
//               </div>
//               <div className="text-xs md:text-lg opacity-90 whitespace-nowrap">Étudiants actifs</div>
//             </div>
            
//             {/* Articles publiés */}
//             <div 
//               className="flex-shrink-0 min-w-[100px] md:min-w-0 space-y-2 md:space-y-4"
//               data-aos="fade-up"
//               data-aos-delay="100"
//               data-aos-duration="800"
//             >
//               <div className="flex justify-center">
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <BookOpen size={20} className="md:w-8 md:h-8" />
//                 </div>
//               </div>
//               <div className="text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
//                 {stats.articles}+
//               </div>
//               <div className="text-xs md:text-lg opacity-90 whitespace-nowrap">Articles publiés</div>
//             </div>
            
//             {/* Étudiants satisfaits */}
//             <div 
//               className="flex-shrink-0 min-w-[100px] md:min-w-0 space-y-2 md:space-y-4"
//               data-aos="fade-up"
//               data-aos-delay="200"
//               data-aos-duration="800"
//             >
//               <div className="flex justify-center">
//                 <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <Smile size={20} className="md:w-8 md:h-8" />
//                 </div>
//               </div>
//               <div className="text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
//                 {stats.happyStudents.toLocaleString()}+
//               </div>
//               <div className="text-xs md:text-lg opacity-90 whitespace-nowrap">Étudiants satisfaits</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section simplifiée */}
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 
//             className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 transition-all duration-1000"
//             data-aos="fade-up"
//             data-aos-duration="800"
//           >
//             CampusLife - Ta vie étudiante réinventée
//           </h2>
//           <p 
//             className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000"
//             data-aos="fade-up"
//             data-aos-delay="200"
//             data-aos-duration="800"
//           >
//             Découvre des conseils pratiques, des astuces bien-être et les meilleures activités 
//             pour réussir pleinement ton expérience universitaire dans les meilleures conditions.
//           </p>
//         </div>
//       </div>
      
//       {/* Articles à la une - Correction pour mobile */}
//       <Section 
//         title="À la une" 
//         subtitle="Découvre nos articles les plus populaires"
//         backgroundColor="light"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//           {featuredArticles.map((article, index) => (
//             <div 
//               key={article.id} 
//               className={index === 0 ? "lg:col-span-2" : ""}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="800"
//             >
//               <ArticleCard 
//                 article={article} 
//                 featured={index === 0}
//                 layout={index === 0 ? "horizontal" : "vertical"}
//               />
//             </div>
//           ))}
//         </div>
//       </Section>
      
//       {/* Vie étudiante */}
//       <Section 
//         title="Vie étudiante" 
//         subtitle="Conseils pratiques pour ton quotidien sur le campus"
//         icon={GraduationCap}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {vieEtudianteArticles.map((article, index) => (
//             <div
//               key={article.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="600"
//             >
//               <ArticleCard article={article} />
//             </div>
//           ))}
//         </div>
//       </Section>
      
//       {/* Santé mentale */}
//       <Section 
//         title="Santé mentale" 
//         subtitle="Prends soin de ton bien-être psychologique"
//         icon={Brain}
//         backgroundColor="light"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {santeMentaleArticles.map((article, index) => (
//             <div
//               key={article.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="600"
//             >
//               <ArticleCard article={article} />
//             </div>
//           ))}
//         </div>
        
//         {/* Bloc d'aide immédiate */}
//         <div 
//           className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl md:rounded-2xl p-6 md:p-8 mt-8 md:mt-12 text-center shadow-lg"
//           data-aos="zoom-in"
//           data-aos-delay="200"
//           data-aos-duration="800"
//         >
//           <div className="max-w-2xl mx-auto">
//             <Brain 
//               size={32} 
//               className="md:w-12 md:h-12 mx-auto mb-3 md:mb-4"
//               data-aos="zoom-in"
//               data-aos-delay="300"
//             />
//             <h3 
//               className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               Besoin de parler ?
//             </h3>
//             <p 
//               className="text-base md:text-lg mb-4 md:mb-6 opacity-90"
//               data-aos="fade-up"
//               data-aos-delay="500"
//             >
//               Notre équipe d'écoute est disponible 24h/24 pour t'accompagner dans les moments difficiles
//             </p>
//             <div
//               data-aos="fade-up"
//               data-aos-delay="600"
//             >
//               <WhatsAppButton
//                 phoneNumber="+225XXXXXXXX"
//                 message="Bonjour, je souhaite parler à quelqu'un au sujet de ma santé mentale."
//                 label="Parler à quelqu'un"
//                 variant="secondary"
//               />
//             </div>
//           </div>
//         </div>
//       </Section>
      
//       {/* Loisirs */}
//       <Section 
//         title="Loisirs & associations" 
//         subtitle="Détends-toi et découvre la vie associative"
//         icon={PartyPopper}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {loisirsArticles.map((article, index) => (
//             <div
//               key={article.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="600"
//             >
//               <ArticleCard article={article} />
//             </div>
//           ))}
//         </div>
//       </Section>
      
//       {/* Fun Facts & Life Hacks */}
//       <Section 
//         title="Fun & Astuces" 
//         subtitle="Des pépites pour égayer ta vie étudiante"
//         backgroundColor="light"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//           {/* Fun Facts */}
//           <div 
//             className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
//             data-aos="fade-right"
//             data-aos-duration="800"
//           >
//             <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
//               <div 
//                 className="w-10 h-10 md:w-14 md:h-14 bg-yellow-100 rounded-full flex items-center justify-center"
//                 data-aos="zoom-in"
//                 data-aos-delay="200"
//               >
//                 <Lightbulb className="text-yellow-600 w-5 h-5 md:w-7 md:h-7" />
//               </div>
//               <div>
//                 <h3 
//                   className="text-xl md:text-2xl font-bold text-gray-900"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   Fun Facts
//                 </h3>
//                 <p 
//                   className="text-gray-500 text-sm md:text-base"
//                   data-aos="fade-up"
//                   data-aos-delay="400"
//                 >
//                   Le saviez-vous ?
//                 </p>
//               </div>
//             </div>
//             <div className="space-y-3 md:space-y-4">
//               <div 
//                 className="p-3 md:p-4 bg-blue-50 rounded-lg md:rounded-xl border-l-4 border-blue-500"
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//               >
//                 <p className="font-semibold text-gray-900 text-sm md:text-base">🎯 Productivité</p>
//                 <p className="text-gray-600 mt-1 text-xs md:text-sm">
//                   Prendre des pauses de 5 minutes toutes les 25 minutes augmente ta productivité de 40% !
//                 </p>
//               </div>
//               <div 
//                 className="p-3 md:p-4 bg-green-50 rounded-lg md:rounded-xl border-l-4 border-green-500"
//                 data-aos="fade-up"
//                 data-aos-delay="600"
//               >
//                 <p className="font-semibold text-gray-900 text-sm md:text-base">🌱 Environnement</p>
//                 <p className="text-gray-600 mt-1 text-xs md:text-sm">
//                   Les plantes dans ta chambre améliorent la qualité de l'air et réduisent le stress de 15%.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Life Hacks */}
//           <div 
//             className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
//             data-aos="fade-left"
//             data-aos-duration="800"
//           >
//             <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
//               <div 
//                 className="w-10 h-10 md:w-14 md:h-14 bg-purple-100 rounded-full flex items-center justify-center"
//                 data-aos="zoom-in"
//                 data-aos-delay="200"
//               >
//                 <Zap className="text-purple-600 w-5 h-5 md:w-7 md:h-7" />
//               </div>
//               <div>
//                 <h3 
//                   className="text-xl md:text-2xl font-bold text-gray-900"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   Life Hacks
//                 </h3>
//                 <p 
//                   className="text-gray-500 text-sm md:text-base"
//                   data-aos="fade-up"
//                   data-aos-delay="400"
//                 >
//                   Astuces pratiques
//                 </p>
//               </div>
//             </div>
//             <div className="space-y-3 md:space-y-4">
//               <div 
//                 className="p-3 md:p-4 bg-orange-50 rounded-lg md:rounded-xl border-l-4 border-orange-500"
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//               >
//                 <p className="font-semibold text-gray-900 text-sm md:text-base">⏰ Organisation</p>
//                 <p className="text-gray-600 mt-1 text-xs md:text-sm">
//                   Utilise la technique Pomodoro : 25 min de travail + 5 min de pause = efficacité maximale !
//                 </p>
//               </div>
//               <div 
//                 className="p-3 md:p-4 bg-red-50 rounded-lg md:rounded-xl border-l-4 border-red-500"
//                 data-aos="fade-up"
//                 data-aos-delay="600"
//               >
//                 <p className="font-semibold text-gray-900 text-sm md:text-base">💰 Économies</p>
//                 <p className="text-gray-600 mt-1 text-xs md:text-sm">
//                   Mets de côté 10% de ton budget mensuel, même petit, ça fait la différence à la fin de l'année.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* Newsletter */}
//       <div className="bg-gray-900 text-white py-12 md:py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h3 
//             className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4"
//             data-aos="fade-up"
//             data-aos-duration="800"
//           >
//             Reste informé des dernières actualités
//           </h3>
//           <p 
//             className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base"
//             data-aos="fade-up"
//             data-aos-delay="200"
//             data-aos-duration="800"
//           >
//             Reçois chaque semaine les meilleurs conseils et astuces pour réussir ta vie étudiante.
//           </p>
//           <div 
//             className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto"
//             data-aos="fade-up"
//             data-aos-delay="400"
//             data-aos-duration="800"
//           >
//             <input 
//               type="email" 
//               placeholder="Ton email"
//               className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm md:text-base"
//             />
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
//               S'abonner
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useState, useEffect, useRef } from 'react';
// import { GraduationCap, Brain, PartyPopper, Lightbulb, Zap, ChevronLeft, ChevronRight, Users, BookOpen, Smile, Sparkles, ArrowRight } from 'lucide-react';
// import Hero from '../components/Hero';
// import Section from '../components/Section';
// import ArticleCard from '../components/ArticleCard';
// import WhatsAppButton from '../components/WhatsAppButton';
// import { articles } from '../data/articles';

// const Home: React.FC = () => {
//   const featuredArticles = articles.filter(article => article.featured);
//   const vieEtudianteArticles = articles.filter(article => 
//     article.category === 'vie-etudiante' && !article.featured
//   ).slice(0, 3);
//   const santeMentaleArticles = articles.filter(article => 
//     article.category === 'sante-mentale' && !article.featured
//   ).slice(0, 3);
//   const loisirsArticles = articles.filter(article => 
//     article.category === 'loisirs' && !article.featured
//   ).slice(0, 3);

//   // Carousel state
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
  
//   // Stats counters - initialisation correcte
//   const [stats, setStats] = useState({
//     students: 0,
//     articles: 0,
//     happyStudents: 0
//   });

//   const statsRef = useRef(null);
//   const hasAnimated = useRef(false);

//   // Images réelles pour le carousel
//   const carouselImages = [
//     {
//       src: "https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Bienvenue sur CampusLife",
//       subtitle: "Ton compagnon quotidien pour réussir ta vie étudiante",
//       gradient: "from-blue-500/20 to-purple-500/20"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       title: "Santé & Bien-être",
//       subtitle: "Prends soin de ton équilibre mental et physique",
//       gradient: "from-purple-500/20 to-pink-500/20"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       title: "Vie Associative",
//       subtitle: "Découvre les activités et rencontres sur ton campus",
//       gradient: "from-orange-500/20 to-red-500/20"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       title: "Conseils Pratiques",
//       subtitle: "Des astuces pour ton quotidien d'étudiant",
//       gradient: "from-cyan-500/20 to-blue-500/20"
//     }
//   ];

//   // Animation d'apparition générale au chargement
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Auto-advance carousel avec transition plus douce
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [carouselImages.length]);

//   // Animation des compteurs
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
          
//           const targetStats = {
//             students: 12500,
//             articles: 347,
//             happyStudents: 8900
//           };

//           const duration = 2000;
//           const steps = 60;
//           const stepDuration = duration / steps;

//           Object.keys(targetStats).forEach(key => {
//             let current = 0;
//             const target = targetStats[key];
//             const increment = target / steps;

//             const timer = setInterval(() => {
//               current += increment;
//               if (current >= target) {
//                 current = target;
//                 clearInterval(timer);
//               }
//               setStats(prev => ({
//                 ...prev,
//                 [key]: Math.floor(current)
//               }));
//             }, stepDuration);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Carousel Élégant avec design premium */}
//       <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
//         <div 
//           className="flex transition-transform duration-700 ease-out h-full"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {carouselImages.map((image, index) => (
//             <div key={index} className="w-full h-full flex-shrink-0 relative">
//               <img 
//                 src={image.src} 
//                 alt={image.title}
//                 className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
//               />
              
//               {/* Overlay gradient moderne */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}></div>
//               <div className="absolute inset-0 bg-black/40"></div>
              
//               {/* Contenu du slide */}
//               <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
//                 <div className="text-center text-white max-w-4xl mx-auto">
//                   <div 
//                     className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 transition-all duration-700 ${
//                       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                     }`}
//                     style={{ transitionDelay: `${index * 200}ms` }}
//                   >
//                     <Sparkles size={16} />
//                     <span>La vie étudiante réinventée</span>
//                   </div>

//                   <h1 
//                     className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
//                       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                     }`}
//                     style={{ transitionDelay: `${index * 200 + 200}ms` }}
//                   >
//                     {image.title}
//                   </h1>
//                   <p 
//                     className={`text-xl md:text-2xl lg:text-3xl mb-8 opacity-95 leading-relaxed px-4 transition-all duration-1000 ${
//                       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                     }`}
//                     style={{ transitionDelay: `${index * 200 + 400}ms` }}
//                   >
//                     {image.subtitle}
//                   </p>
//                   <button 
//                     className={`group bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:scale-105 text-lg transition-all duration-1000 ${
//                       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                     }`}
//                     style={{ transitionDelay: `${index * 200 + 600}ms` }}
//                   >
//                     <span>Commencer l'aventure</span>
//                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contrôles du carousel - Design premium */}
//         <button 
//           onClick={prevSlide}
//           className={`absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-2xl p-3 md:p-4 transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm group transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//           style={{ transitionDelay: '800ms' }}
//         >
//           <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
//         </button>
//         <button 
//           onClick={nextSlide}
//           className={`absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-2xl p-3 md:p-4 transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm group transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//           style={{ transitionDelay: '800ms' }}
//         >
//           <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
//         </button>

//         {/* Indicateurs premium */}
//         <div 
//           className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//           style={{ transitionDelay: '900ms' }}
//         >
//           {carouselImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-12 h-2 rounded-full transition-all duration-500 ${
//                 index === currentSlide 
//                   ? 'bg-white shadow-lg w-16' 
//                   : 'bg-white/50 hover:bg-white/70'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Section Stats - Design cohérent */}
//       <div ref={statsRef} className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 md:py-20 relative overflow-hidden">
//         {/* Background elements */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             {/* Étudiants actifs */}
//             <div 
//               className="space-y-4"
//               data-aos="fade-up"
//               data-aos-duration="800"
//             >
//               <div className="flex justify-center">
//                 <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg">
//                   <Users size={32} className="text-white" />
//                 </div>
//               </div>
//               <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
//                 {stats.students.toLocaleString()}+
//               </div>
//               <div className="text-lg opacity-90">Étudiants actifs</div>
//             </div>
            
//             {/* Articles publiés */}
//             <div 
//               className="space-y-4"
//               data-aos="fade-up"
//               data-aos-delay="100"
//               data-aos-duration="800"
//             >
//               <div className="flex justify-center">
//                 <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg">
//                   <BookOpen size={32} className="text-white" />
//                 </div>
//               </div>
//               <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
//                 {stats.articles}+
//               </div>
//               <div className="text-lg opacity-90">Articles publiés</div>
//             </div>
            
//             {/* Étudiants satisfaits */}
//             <div 
//               className="space-y-4"
//               data-aos="fade-up"
//               data-aos-delay="200"
//               data-aos-duration="800"
//             >
//               <div className="flex justify-center">
//                 <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg">
//                   <Smile size={32} className="text-white" />
//                 </div>
//               </div>
//               <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
//                 {stats.happyStudents.toLocaleString()}+
//               </div>
//               <div className="text-lg opacity-90">Étudiants satisfaits</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section élégante */}
//       <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-28 overflow-hidden">
//         <div className="absolute inset-0 opacity-50">
//           <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
//           <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl"></div>
//         </div>

//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h2 
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//             data-aos="fade-up"
//             data-aos-duration="800"
//           >
//             CampusLife
//             <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Ta vie étudiante réinventée
//             </span>
//           </h2>
//           <p 
//             className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
//             data-aos="fade-up"
//             data-aos-delay="200"
//             data-aos-duration="800"
//           >
//             Découvre des conseils pratiques, des astuces bien-être et les meilleures activités 
//             pour réussir pleinement ton expérience universitaire dans les meilleures conditions.
//           </p>
//         </div>
//       </div>
      
//       {/* Articles à la une - Design cohérent */}
//       <Section 
//         title="À la une" 
//         subtitle="Découvre nos articles les plus populaires et tendances"
//         backgroundColor="light"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//           {featuredArticles.map((article, index) => (
//             <ArticleCard 
//               key={article.id} 
//               article={article} 
//               featured={index === 0}
//               layout={index === 0 ? "horizontal" : "vertical"}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="800"
//             />
//           ))}
//         </div>
//       </Section>
      
//       {/* Vie étudiante */}
//       <Section 
//         title="Vie étudiante" 
//         subtitle="Conseils pratiques pour ton quotidien sur le campus"
//         icon={GraduationCap}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {vieEtudianteArticles.map((article, index) => (
//             <ArticleCard 
//               key={article.id}
//               article={article}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="600"
//             />
//           ))}
//         </div>
//       </Section>
      
//       {/* Santé mentale */}
//       <Section 
//         title="Santé mentale" 
//         subtitle="Prends soin de ton bien-être psychologique"
//         icon={Brain}
//         backgroundColor="light"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {santeMentaleArticles.map((article, index) => (
//             <ArticleCard 
//               key={article.id}
//               article={article}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="600"
//             />
//           ))}
//         </div>
        
//         {/* Bloc d'aide immédiate - Version premium */}
//         <div 
//           className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden mt-12 max-w-4xl mx-auto"
//           data-aos="zoom-in"
//           data-aos-duration="800"
//         >
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//             <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
//           </div>
          
//           <div className="relative z-10">
//             <div 
//               className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
//               data-aos="zoom-in"
//               data-aos-delay="200"
//             >
//               <Brain size={32} className="text-white" />
//             </div>
            
//             <h3 
//               className="text-2xl md:text-3xl font-bold mb-4"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               Besoin de parler en toute confidentialité ?
//             </h3>
            
//             <p 
//               className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               Notre équipe d'écoute bienveillante est disponible 24h/24 pour t'accompagner 
//               dans les moments difficiles. N'hésite pas à prendre contact.
//             </p>
            
//             <div
//               data-aos="fade-up"
//               data-aos-delay="500"
//             >
//               <WhatsAppButton
//                 phoneNumber="+225XXXXXXXX"
//                 message="Bonjour, je souhaite parler à quelqu'un au sujet de ma santé mentale."
//                 label="Parler à quelqu'un"
//                 variant="secondary"
//                 className="text-lg px-8 py-4"
//               />
//             </div>
//           </div>
//         </div>
//       </Section>
      
//       {/* Loisirs */}
//       <Section 
//         title="Loisirs & associations" 
//         subtitle="Détends-toi et découvre la vie associative"
//         icon={PartyPopper}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {loisirsArticles.map((article, index) => (
//             <ArticleCard 
//               key={article.id}
//               article={article}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="600"
//             />
//           ))}
//         </div>
//       </Section>
      
//       {/* Fun Facts & Life Hacks - Version premium */}
//       <Section 
//         title="Fun & Astuces" 
//         subtitle="Des pépites pour égayer ta vie étudiante"
//         backgroundColor="light"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {/* Fun Facts */}
//           <div 
//             className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg border border-blue-100"
//             data-aos="fade-right"
//             data-aos-duration="800"
//           >
//             <div className="flex items-center space-x-4 mb-6">
//               <div 
//                 className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg"
//                 data-aos="zoom-in"
//                 data-aos-delay="200"
//               >
//                 <Lightbulb className="text-white w-8 h-8" />
//               </div>
//               <div>
//                 <h3 
//                   className="text-2xl font-bold text-gray-900"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   Fun Facts
//                 </h3>
//                 <p 
//                   className="text-gray-500"
//                   data-aos="fade-up"
//                   data-aos-delay="400"
//                 >
//                   Le saviez-vous ?
//                 </p>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div 
//                 className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//               >
//                 <p className="font-semibold text-gray-900 text-lg">🎯 Productivité</p>
//                 <p className="text-gray-600 mt-2 leading-relaxed">
//                   Prendre des pauses de 5 minutes toutes les 25 minutes augmente ta productivité de 40% !
//                 </p>
//               </div>
//               <div 
//                 className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay="600"
//               >
//                 <p className="font-semibold text-gray-900 text-lg">🌱 Environnement</p>
//                 <p className="text-gray-600 mt-2 leading-relaxed">
//                   Les plantes dans ta chambre améliorent la qualité de l'air et réduisent le stress de 15%.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Life Hacks */}
//           <div 
//             className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-lg border border-purple-100"
//             data-aos="fade-left"
//             data-aos-duration="800"
//           >
//             <div className="flex items-center space-x-4 mb-6">
//               <div 
//                 className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
//                 data-aos="zoom-in"
//                 data-aos-delay="200"
//               >
//                 <Zap className="text-white w-8 h-8" />
//               </div>
//               <div>
//                 <h3 
//                   className="text-2xl font-bold text-gray-900"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   Life Hacks
//                 </h3>
//                 <p 
//                   className="text-gray-500"
//                   data-aos="fade-up"
//                   data-aos-delay="400"
//                 >
//                   Astuces pratiques
//                 </p>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div 
//                 className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//               >
//                 <p className="font-semibold text-gray-900 text-lg">⏰ Organisation</p>
//                 <p className="text-gray-600 mt-2 leading-relaxed">
//                   Utilise la technique Pomodoro : 25 min de travail + 5 min de pause = efficacité maximale !
//                 </p>
//               </div>
//               <div 
//                 className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay="600"
//               >
//                 <p className="font-semibold text-gray-900 text-lg">💰 Économies</p>
//                 <p className="text-gray-600 mt-2 leading-relaxed">
//                   Mets de côté 10% de ton budget mensuel, même petit, ça fait la différence à la fin de l'année.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* Newsletter élégante */}
//       <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 md:py-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
//         </div>

//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h3 
//             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
//             data-aos="fade-up"
//             data-aos-duration="800"
//           >
//             Reste informé des dernières actualités
//           </h3>
//           <p 
//             className="text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
//             data-aos="fade-up"
//             data-aos-delay="200"
//             data-aos-duration="800"
//           >
//             Reçois chaque semaine les meilleurs conseils et astuces pour réussir ta vie étudiante.
//           </p>
//           <div 
//             className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
//             data-aos="fade-up"
//             data-aos-delay="400"
//             data-aos-duration="800"
//           >
//             <input 
//               type="email" 
//               placeholder="Ton adresse email"
//               className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 text-lg transition-all duration-300"
//             />
//             <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 text-lg flex items-center space-x-2">
//               <span>S'abonner</span>
//               <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle ,GraduationCap, Brain, PartyPopper, Lightbulb, Zap, ChevronLeft, ChevronRight, Users, BookOpen, Smile, Sparkles, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ArticleCard from '../components/ArticleCard';
import ArticleModal from '../components/ArticleModal';
import WhatsAppButton from '../components/WhatsAppButton';
import { articles } from '../data/articles';
import { Article } from '../types';

const Home: React.FC = () => {
  // États pour la popup
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredArticles = articles.filter(article => article.featured);
  const vieEtudianteArticles = articles.filter(article => 
    article.category === 'vie-etudiante' && !article.featured
  );
  const santeMentaleArticles = articles.filter(article => 
    article.category === 'sante-mentale' && !article.featured
  );
  const loisirsArticles = articles.filter(article => 
    article.category === 'loisirs' && !article.featured
  );

  // Carousel state avec animation de titre
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  
  // Stats counters
  const [stats, setStats] = useState({
    students: 0,
    articles: 0,
    happyStudents: 0
  });

  const statsRef = useRef(null);
  const hasAnimated = useRef(false);
  
  // Références pour chaque section de cartes
  const featuredCarouselRef = useRef<HTMLDivElement>(null);
  const vieEtudianteCarouselRef = useRef<HTMLDivElement>(null);
  const santeMentaleCarouselRef = useRef<HTMLDivElement>(null);
  const loisirsCarouselRef = useRef<HTMLDivElement>(null);

  // Images réelles pour le carousel avec couleurs de titre personnalisées
  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg",
      title: "Bienvenue sur StudZone",
      subtitle: "Ton compagnon quotidien pour réussir ta vie étudiante",
      gradient: "from-blue-500/20 to-purple-500/20",
      titleColor: "text-white",
      badgeColor: "bg-blue-500/20 text-white border-white/30"
    },
    {
      src: "https://images.pexels.com/photos/34787376/pexels-photo-34787376.jpeg",
      title: "Santé & Bien-être",
      subtitle: "Prends soin de ton équilibre mental et physique",
      gradient: "from-purple-500/20 to-pink-500/20",
      titleColor: "text-white",
      badgeColor: "bg-purple-500/20 text-white border-white/30"
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Loisirs & Associations",
      subtitle: "Découvre les activités et rencontres sur ton campus",
      gradient: "from-orange-500/20 to-red-500/20",
      titleColor: "text-white",
      badgeColor: "bg-orange-500/20 text-white border-white/30"
    },
    {
      src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Conseils Pratiques",
      subtitle: "Des astuces pour ton quotidien d'étudiant",
      gradient: "from-cyan-500/20 to-blue-500/20",
      titleColor: "text-white",
      badgeColor: "bg-cyan-500/20 text-white border-white/30"
    }
  ];

  // Gestionnaire pour ouvrir la popup
  const handleReadArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  // Animation du titre du carousel
  useEffect(() => {
    setIsTitleVisible(false);
    const timer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-advance carousel avec transition plus douce
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Animation des compteurs
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const targetStats = {
            students: 12500,
            articles: 347,
            happyStudents: 8900
          };

          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          Object.keys(targetStats).forEach(key => {
            let current = 0;
            const target = targetStats[key];
            const increment = target / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setStats(prev => ({
                ...prev,
                [key]: Math.floor(current)
              }));
            }, stepDuration);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Fonctions pour faire défiler les cartes horizontalement avec des références spécifiques
  const scrollFeaturedCards = (direction: 'left' | 'right') => {
    if (featuredCarouselRef.current) {
      const scrollAmount = 320;
      featuredCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollVieEtudianteCards = (direction: 'left' | 'right') => {
    if (vieEtudianteCarouselRef.current) {
      const scrollAmount = 300;
      vieEtudianteCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollSanteMentaleCards = (direction: 'left' | 'right') => {
    if (santeMentaleCarouselRef.current) {
      const scrollAmount = 300;
      santeMentaleCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollLoisirsCards = (direction: 'left' | 'right') => {
    if (loisirsCarouselRef.current) {
      const scrollAmount = 300;
      loisirsCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Carousel Élégant avec design premium et animations de titre */}
      <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              
              {/* Overlay gradient moderne */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}></div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Contenu du slide avec animation de titre */}
              <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto">
                  <div 
                    className={`inline-flex items-center space-x-2 ${image.badgeColor} backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border transition-all duration-500 ${
                      isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <Sparkles size={16} />
                    <span>La vie étudiante réinventée</span>
                  </div>

                  <h1 
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ${image.titleColor} ${
                      isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {image.title}
                  </h1>
                  <p 
                    className={`text-xl md:text-2xl lg:text-3xl mb-8 opacity-95 leading-relaxed px-4 transition-all duration-700 ${image.titleColor} ${
                      isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {image.subtitle}
                  </p>
                  {/* <button 
                    className={`group bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:scale-105 text-lg transition-all duration-700 ${
                      isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <span>Commencer l'aventure</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button> */}
                  <a 
  href="/contact"
  className={`group bg-white w-80 text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:scale-105 text-lg transition-all duration-700 ${
    isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  <span>Commencer l'aventure</span>
  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contrôles du carousel - Design premium */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-2xl p-3 md:p-4 transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm group"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-2xl p-3 md:p-4 transition-all duration-300 shadow-2xl hover:shadow-3xl backdrop-blur-sm group"
        >
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Indicateurs premium */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-2 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg w-16' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Section Stats - Design cohérent et aligné sur mobile */}
      <div ref={statsRef} className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 md:py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Étudiants actifs */}
            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <Users size={24} className="text-white md:w-8 md:h-8" />
                </div>
              </div>
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
                {stats.students.toLocaleString()}+
              </div>
              <div className="text-base md:text-lg opacity-90">Étudiants actifs</div>
            </div>
            
            {/* Articles publiés */}
            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <BookOpen size={24} className="text-white md:w-8 md:h-8" />
                </div>
              </div>
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
                {stats.articles}+
              </div>
              <div className="text-base md:text-lg opacity-90">Articles publiés</div>
            </div>
            
            {/* Étudiants satisfaits */}
            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <Smile size={24} className="text-white md:w-8 md:h-8" />
                </div>
              </div>
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
                {stats.happyStudents.toLocaleString()}+
              </div>
              <div className="text-base md:text-lg opacity-90">Étudiants satisfaits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section élégante */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            StudZone
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ta vie étudiante réinventée
            </span>
          </h2>
          <p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Découvre des conseils pratiques, des astuces bien-être et les meilleures activités 
            pour réussir pleinement ton expérience universitaire dans les meilleures conditions.
          </p>
        </div>
      </div>
      
      {/* Articles à la une - Layout séparé pour mobile et desktop */}
      <Section 
        title="À la une" 
        subtitle="Découvre nos articles les plus populaires et tendances"
        backgroundColor="light"
      >
        {/* Version Mobile */}
        <div className="md:hidden">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => scrollFeaturedCards('left')}
              className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <span className="text-sm text-gray-600 font-medium">Fais défiler pour voir plus</span>
            <button 
              onClick={() => scrollFeaturedCards('right')}
              className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          <div 
            ref={featuredCarouselRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <ArticleCard 
                  article={article} 
                  featured={index === 0}
                  layout={index === 0 ? "horizontal" : "vertical"}
                  onReadArticle={handleReadArticle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Version Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {featuredArticles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                featured={index === 0}
                // layout={index === 0 ? "horizontal" : "vertical"}
                layout={index === 0 ? "vertical" : "vertical"}
                onReadArticle={handleReadArticle}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              />
            ))}
          </div>
        </div>
      </Section>
      
      {/* Vie étudiante - Layout séparé pour mobile et desktop */}
      <Section 
        title="Vie étudiante" 
        subtitle="Conseils pratiques pour ton quotidien sur le campus"
        icon={GraduationCap}
      >
        {/* Version Mobile */}
        <div className="md:hidden">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => scrollVieEtudianteCards('left')}
              className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <span className="text-sm text-gray-600 font-medium">Fais défiler pour voir plus</span>
            <button 
              onClick={() => scrollVieEtudianteCards('right')}
              className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          <div 
            ref={vieEtudianteCarouselRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {vieEtudianteArticles.map((article, index) => (
              <div 
                key={article.id}
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <ArticleCard 
                  article={article}
                  onReadArticle={handleReadArticle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Version Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {vieEtudianteArticles.map((article, index) => (
              <ArticleCard 
                key={article.id}
                article={article}
                onReadArticle={handleReadArticle}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              />
            ))}
          </div>
        </div>
      </Section>
      
      {/* Santé mentale - Layout séparé pour mobile et desktop */}
      <Section 
        title="Santé mentale" 
        subtitle="Prends soin de ton bien-être psychologique"
        icon={Brain}
        backgroundColor="light"
      >
        {/* Version Mobile */}
        <div className="md:hidden">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => scrollSanteMentaleCards('left')}
              className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <span className="text-sm text-gray-600 font-medium">Fais défiler pour voir plus</span>
            <button 
              onClick={() => scrollSanteMentaleCards('right')}
              className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          <div 
            ref={santeMentaleCarouselRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {santeMentaleArticles.map((article, index) => (
              <div 
                key={article.id}
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <ArticleCard 
                  article={article}
                  onReadArticle={handleReadArticle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Version Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {santeMentaleArticles.map((article, index) => (
              <ArticleCard 
                key={article.id}
                article={article}
                onReadArticle={handleReadArticle}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              />
            ))}
          </div>
        </div>
        
        {/* Bloc d'aide immédiate - Version premium */}
        <div 
          className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden mt-12 max-w-4xl mx-auto"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <div 
              className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Brain size={32} className="text-white" />
            </div>
            
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Besoin de parler en toute confidentialité ?
            </h3>
            
            <p 
              className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Notre équipe d'écoute bienveillante est disponible 24h/24 pour t'accompagner 
              dans les moments difficiles. N'hésite pas à prendre contact.
            </p>
            
            <div
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <WhatsAppButton
                phoneNumber="+33601364596"
                message="Bonjour, je souhaite parler à quelqu'un au sujet de ma santé mentale."
                label="Parler à quelqu'un"
                variant="secondary"
                className="text-lg px-8 py-4"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Loisirs - Layout séparé pour mobile et desktop */}
      <Section 
        title="Loisirs & associations" 
        subtitle="Détends-toi et découvre la vie associative"
        icon={PartyPopper}
      >
        {/* Version Mobile */}
        <div className="md:hidden">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => scrollLoisirsCards('left')}
              className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <span className="text-sm text-gray-600 font-medium">Fais défiler pour voir plus</span>
            <button 
              onClick={() => scrollLoisirsCards('right')}
              className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          <div 
            ref={loisirsCarouselRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {loisirsArticles.map((article, index) => (
              <div 
                key={article.id}
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <ArticleCard 
                  article={article}
                  onReadArticle={handleReadArticle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Version Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {loisirsArticles.map((article, index) => (
              <ArticleCard 
                key={article.id}
                article={article}
                onReadArticle={handleReadArticle}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              />
            ))}
          </div>
        </div>
      </Section>
      
      {/* Fun Facts & Life Hacks - Version premium */}
      <Section 
        title="Fun & Astuces" 
        subtitle="Des pépites pour égayer ta vie étudiante"
        backgroundColor="light"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fun Facts */}
          <div 
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg border border-blue-100"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div 
                className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Lightbulb className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 
                  className="text-2xl font-bold text-gray-900"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Fun Facts
                </h3>
                <p 
                  className="text-gray-500"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Le saviez-vous ?
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <p className="font-semibold text-gray-900 text-lg">🎯 Productivité</p>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Prendre des pauses de 5 minutes toutes les 25 minutes augmente ta productivité de 40% !
                </p>
              </div>
              <div 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p className="font-semibold text-gray-900 text-lg">🌱 Environnement</p>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Les plantes dans ta chambre améliorent la qualité de l'air et réduisent le stress de 15%.
                </p>
              </div>
            </div>
          </div>
          
          {/* Life Hacks */}
          <div 
            className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-lg border border-purple-100"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div 
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Zap className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 
                  className="text-2xl font-bold text-gray-900"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Life Hacks
                </h3>
                <p 
                  className="text-gray-500"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Astuces pratiques
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <p className="font-semibold text-gray-900 text-lg">⏰ Organisation</p>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Utilise la technique Pomodoro : 25 min de travail + 5 min de pause = efficacité maximale !
                </p>
              </div>
              <div 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p className="font-semibold text-gray-900 text-lg">💰 Économies</p>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Mets de côté 10% de ton budget mensuel, même petit, ça fait la différence à la fin de l'année.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter élégante */}
      {/* <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Reste informé des dernières actualités
          </h3>
          <p 
            className="text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Reçois chaque semaine les meilleurs conseils et astuces pour réussir ta vie étudiante.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <input 
              type="email" 
              placeholder="Ton adresse email"
              className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 text-lg transition-all duration-300"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 text-lg flex items-center space-x-2">
              <span>S'abonner</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div> */}

      

<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 md:py-20 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <div 
      className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Sparkles size={16} />
      <span>Questions ? On est là pour toi !</span>
    </div>

    <h3 
      className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      Une question, un doute ?
    </h3>
    <p 
      className="text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800"
    >
      Notre équipe est disponible pour répondre à toutes tes interrogations sur la vie étudiante.
    </p>
    
    <div 
      className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="800"
    >
      <a
        href="https://wa.me/+33601364596?text=Bonjour%20StudZone%20!%20J'aimerais%20obtenir%20des%20informations%20sur%20la%20vie%20étudiante."
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 text-lg flex items-center justify-center space-x-3"
      >
        <MessageCircle size={24} />
        <span>Écrivez-nous sur WhatsApp</span>
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </a>
      
      <a
        href="/contact"
        className="group border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3"
      >
        <span>Autres moyens de contact</span>
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    
    <p 
      className="text-sm text-blue-200 mt-8 opacity-80"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      Réponse garantie sous 24h ⚡
    </p>
  </div>
</div>

      {/* Popup Article */}
      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Styles CSS pour cacher la scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Home;