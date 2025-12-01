// import React from 'react';
// import { Target, Users, Heart, ArrowRight } from 'lucide-react';
// import Section from '../components/Section';

// const About: React.FC = () => {
//   const teamMembers = [
//     {
//       name: 'Marie Dubois',
//       role: 'Rédactrice en chef',
//       bio: 'Passionnée par la vie étudiante et toujours à la recherche des meilleures astuces campus.',
//       emoji: '🎓'
//     },
//     {
//       name: 'Thomas Martin',
//       role: 'Spécialiste bien-être',
//       bio: 'Psychologue de formation, je partage mes conseils pour une santé mentale au top.',
//       emoji: '🧠'
//     },
//     {
//       name: 'Sophie Lambert',
//       role: 'Responsable loisirs',
//       bio: 'Mon credo : un étudiant qui s\'amuse est un étudiant qui réussit !',
//       emoji: '🎉'
//     }
//   ];

//   return (
//     <div>
//       {/* Hero About */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl lg:text-6xl font-bold text-dark mb-6">
//             À propos de
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
//               StudZone
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Nous croyons en une vie étudiante épanouissante, équilibrée et remplie de bonnes vibes. 
//             Notre mission : t'accompagner dans toutes les facettes de ta vie d'étudiant.
//           </p>
//         </div>
//       </section>

//       {/* Notre mission */}
//       <Section title="Notre mission" icon={Target}>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="text-center" data-aos="fade-up">
//             <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Target className="text-primary" size={32} />
//             </div>
//             <h3 className="text-xl font-bold text-dark mb-3">Informer</h3>
//             <p className="text-gray-600">
//               Des articles de qualité sur tous les aspects de la vie étudiante, 
//               avec des informations vérifiées et pertinentes.
//             </p>
//           </div>
          
//           <div className="text-center" data-aos="fade-up" data-aos-delay="100">
//             <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Heart className="text-secondary" size={32} />
//             </div>
//             <h3 className="text-xl font-bold text-dark mb-3">Accompagner</h3>
//             <p className="text-gray-600">
//               Un soutien bienveillant pour traverser les moments difficiles 
//               et célébrer les réussites ensemble.
//             </p>
//           </div>
          
//           <div className="text-center" data-aos="fade-up" data-aos-delay="200">
//             <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Users className="text-dark" size={32} />
//             </div>
//             <h3 className="text-xl font-bold text-dark mb-3">Rassembler</h3>
//             <p className="text-gray-600">
//               Créer une communauté bienveillante où chaque étudiant trouve 
//                   sa place et peut partager son expérience.
//             </p>
//           </div>
//         </div>
//       </Section>

//       {/* Notre équipe */}
//       <Section title="Notre équipe" icon={Users} backgroundColor="gray">
//         <div className="grid md:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div 
//               key={member.name}
//               className="bg-surface rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             >
//               <div className="text-4xl mb-4">{member.emoji}</div>
//               <h3 className="text-xl font-bold text-dark mb-2">{member.name}</h3>
//               <p className="text-primary font-semibold mb-3">{member.role}</p>
//               <p className="text-gray-600">{member.bio}</p>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* CTA */}
//       <section className="bg-gradient-to-r from-primary to-secondary py-16">
//         <div className="container mx-auto px-4 text-center text-white">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//             Rejoins l'aventure StudZone
//           </h2>
//           <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
//             Que tu sois étudiant, ancien étudiant ou simplement passionné par la vie campus, 
//             il y a une place pour toi dans notre communauté.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
//               <span>Devenir contributeur</span>
//               <ArrowRight size={20} />
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
//               Proposer un sujet
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, Heart, ArrowRight, Star, Zap, Globe, Sparkles } from 'lucide-react';
import Section from '../components/Section';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Marie Dubois',
      role: 'Rédactrice en chef',
      bio: 'Passionnée par la vie étudiante et toujours à la recherche des meilleures astuces campus.',
      emoji: '🎓',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Thomas Martin',
      role: 'Spécialiste bien-être',
      bio: 'Psychologue de formation, je partage mes conseils pour une santé mentale au top.',
      emoji: '🧠',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Sophie Lambert',
      role: 'Responsable loisirs',
      bio: 'Mon credo : un étudiant qui s\'amuse est un étudiant qui réussit !',
      emoji: '🎉',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  // État pour les statistiques animées
  const [stats, setStats] = useState({
    students: 0,
    articles: 0,
    satisfaction: 0,
    support: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  // Animation d'apparition générale au chargement
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation des compteurs
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const targetStats = {
            students: 50000,
            articles: 500,
            satisfaction: 95,
            support: 24
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

  const statCards = [
    { 
      number: stats.students, 
      label: 'Étudiants actifs', 
      icon: Users,
      suffix: '+'
    },
    { 
      number: stats.articles, 
      label: 'Articles publiés', 
      icon: Star,
      suffix: '+'
    },
    { 
      number: stats.satisfaction, 
      label: 'Satisfaction', 
      icon: Heart,
      suffix: '%'
    },
    { 
      number: stats.support, 
      label: 'Support', 
      icon: Zap,
      suffix: '/7'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero About avec fond animé */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 md:py-28 overflow-hidden">
        {/* Fond animé avec particules */}
        <div className="absolute inset-0">
          {/* Particules flottantes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-float">
            <div className="absolute inset-0 bg-blue-300 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 bg-cyan-300 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-pink-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="absolute inset-0 bg-pink-300 rounded-full blur-sm"></div>
          </div>
          
          {/* Formes géométriques */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge avec animation */}
          <div 
            className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* <Sparkles size={16} /> */}
            <span>La référence vie étudiante</span>
          </div>
          
          {/* Titre principal avec animation échelonnée */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            À propos de
            <span 
              className={`block bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              StudZone
            </span>
          </h1>
          
          {/* Sous-titre avec animation */}
          <p 
            className={`text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Nous révolutionnons l'expérience étudiante avec des conseils pratiques, 
            un accompagnement bienveillant et une communauté vibrante.
          </p>
          
          {/* Statistiques avec décompte */}
          <div 
            ref={statsRef} 
            className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {statCards.map((stat, index) => (
              <div 
                key={stat.label} 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-3 md:px-6 md:py-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Hero avec animation */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            {/* <button className="group bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:scale-105">
              <span className="text-sm md:text-base">Découvrir notre plateforme</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/50 text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm text-sm md:text-base">
              Rencontrer l'équipe
            </button> */}
            <a 
              href="/contact"
              className="group bg-white w-80 text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:scale-105 text-lg transition-all duration-700 "
            >
              <span>Commencer l'aventure</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Notre mission - Version redesign */}
      <Section 
        title="Notre philosophie" 
        subtitle="Les piliers qui nous animent au quotidien" 
        icon={Target}
      >
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div 
            className="group relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-blue-100"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="text-white w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="mt-6 md:mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4" data-aos="fade-up" data-aos-delay="200">
                Informer avec excellence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base" data-aos="fade-up" data-aos-delay="300">
                Des contenus vérifiés, pertinents et constamment mis à jour pour 
                t'accompagner dans toutes les étapes de ta vie étudiante.
              </p>
              <div 
                className="flex items-center text-blue-600 font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span> <a href="/contact">Découvrir</a></span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
          
          <div 
            className="group relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-purple-100"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="text-white w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="mt-6 md:mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4" data-aos="fade-up" data-aos-delay="300">
                Accompagner avec bienveillance
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base" data-aos="fade-up" data-aos-delay="400">
                Un soutien personnalisé et une écoute active pour traverser 
                les défis académiques et personnels en toute sérénité.
              </p>
              <div 
                className="flex items-center text-purple-600 font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span><a href="/contact">En savoir plus</a></span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
          
          <div 
            className="group relative bg-gradient-to-br from-white to-orange-50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-orange-100"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="text-white w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="mt-6 md:mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4" data-aos="fade-up" data-aos-delay="400">
                Rassembler avec passion
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base" data-aos="fade-up" data-aos-delay="500">
                Une communauté inclusive où chaque étudiant trouve sa place, 
                partage ses expériences et crée des liens durables.
              </p>
              <div 
                className="flex items-center text-orange-600 font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <span><a href="/contact">Rejoindre</a></span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Notre équipe - Version premium */}
      <Section 
        title="Rencontrez notre dream team" 
        subtitle="Des passionnés dédiés à votre réussite étudiante"
        icon={Users} 
        backgroundColor="light"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 text-3xl md:text-4xl rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center shadow-inner"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150 + 100}
                >
                  {member.emoji}
                </div>
                
                <h3 
                  className="text-lg md:text-xl font-bold text-gray-900 mb-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 200}
                >
                  {member.name}
                </h3>
                <div 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r ${member.gradient} text-white mb-3 md:mb-4`}
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 250}
                >
                  {member.role}
                </div>
                
                <p 
                  className="text-gray-600 leading-relaxed text-sm md:text-base"
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 300}
                >
                  {member.bio}
                </p>
                
                <div 
                  className="mt-4 md:mt-6 flex justify-center space-x-2 md:space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 350}
                >
                  <button className="w-7 h-7 md:w-8 md:h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Globe size={12} className="md:w-3 md:h-3" />
                  </button>
                  <button className="w-7 h-7 md:w-8 md:h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                    <Users size={12} className="md:w-3 md:h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Valeurs */}
      <Section 
        title="Nos valeurs" 
        subtitle="Les principes qui guident chacune de nos actions"
        icon={Star}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {[
            { icon: Star, title: 'Excellence', desc: 'Nous visons toujours la meilleure qualité' },
            { icon: Heart, title: 'Empathie', desc: 'À l\'écoute de chaque besoin étudiant' },
            { icon: Zap, title: 'Innovation', desc: 'Toujours en avance sur les tendances' },
            { icon: Users, title: 'Communauté', desc: 'Ensemble, nous allons plus loin' }
          ].map((value, index) => (
            <div 
              key={value.title} 
              className="text-center group p-4 md:p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div 
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 100}
              >
                <value.icon className="text-white w-5 h-5 md:w-7 md:h-7" />
              </div>
              <h3 
                className="text-base md:text-lg font-bold text-gray-900 mb-2"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 150}
              >
                {value.title}
              </h3>
              <p 
                className="text-gray-600 text-xs md:text-sm leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 200}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16 md:py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Prêt à transformer ton expérience étudiante ?
          </h2>
          
          <p 
            className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Rejoins une communauté de milliers d'étudiants ambitieux et bénéficie 
            d'un accompagnement sur mesure pour briller pendant tes études.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <button className="group bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 shadow-lg hover:scale-105 w-full sm:w-auto justify-center">
              <span className="text-sm md:text-base"><a href="/contact">Commencer l'aventure</a></span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* <button className="border-2 border-white/50 text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-sm md:text-base">
              Découvrir nos services
            </button> */}
          </div>
          
          <div 
            className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-blue-200 text-xs md:text-sm"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Gratuit et toujours accessible</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Communauté bienveillante</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Support 24h/24</span>
            </div>
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

export default About;