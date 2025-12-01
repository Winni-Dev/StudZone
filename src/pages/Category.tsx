// import React from 'react';
// import { GraduationCap, Brain, PartyPopper, ArrowLeft } from 'lucide-react';
// import Section from '../components/Section';
// import ArticleCard from '../components/ArticleCard';
// import WhatsAppButton from '../components/WhatsAppButton'; // ← AJOUTE CETTE LIGNE
// import { articles } from '../data/articles';

// interface CategoryProps {
//   category: 'vie-etudiante' | 'sante-mentale' | 'loisirs';
// }

// const Category: React.FC<CategoryProps> = ({ category }) => {
//   const categoryArticles = articles.filter(article => article.category === category);
  
//   const getCategoryInfo = () => {
//     switch (category) {
//       case 'vie-etudiante':
//         return {
//           title: 'Vie Étudiante',
//           subtitle: 'Conseils pratiques pour ton quotidien sur le campus',
//           icon: GraduationCap,
//           color: 'secondary',
//           bgColor: 'from-secondary/10'
//         };
//       case 'sante-mentale':
//         return {
//           title: 'Santé Mentale',
//           subtitle: 'Prends soin de ton bien-être psychologique',
//           icon: Brain,
//           color: 'primary',
//           bgColor: 'from-primary/10'
//         };
//       case 'loisirs':
//         return {
//           title: 'Loisirs & Associations',
//           subtitle: 'Détends-toi et découvre la vie associative',
//           icon: PartyPopper,
//           color: 'accent',
//           bgColor: 'from-accent/10'
//         };
//       default:
//         return {
//           title: 'Catégorie',
//           subtitle: 'Articles de la catégorie',
//           icon: GraduationCap,
//           color: 'secondary',
//           bgColor: 'from-secondary/10'
//         };
//     }
//   };

//   const categoryInfo = getCategoryInfo();

//   return (
//     <div>
//       {/* Hero de la catégorie */}
//       <section className={`bg-gradient-to-br ${categoryInfo.bgColor} to-background py-20`}>
//         <div className="container mx-auto px-4">
//           <a href="/" className="inline-flex items-center space-x-2 text-dark hover:text-primary mb-6 transition-colors">
//             <ArrowLeft size={20} />
//             <span>Retour à l'accueil</span>
//           </a>
          
//           <div className="text-center">
//             <div className={`inline-flex items-center justify-center w-20 h-20 bg-${categoryInfo.color}/10 rounded-full mb-6`}>
//               <categoryInfo.icon className={`text-${categoryInfo.color}`} size={40} />
//             </div>
//             <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
//               {categoryInfo.title}
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               {categoryInfo.subtitle}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Articles de la catégorie */}
//       <Section title={`Articles ${categoryInfo.title}`} backgroundColor="gray">
//         {categoryArticles.length > 0 ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {categoryArticles.map(article => (
//               <ArticleCard key={article.id} article={article} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">Aucun article disponible dans cette catégorie pour le moment.</p>
//           </div>
//         )}
//       </Section>

//       {/* Bloc spécial pour santé mentale */}
//       {category === 'sante-mentale' && (
//         <div className="bg-primary text-white rounded-2xl p-8 mx-4 my-16 text-center max-w-4xl mx-auto" data-aos="zoom-in">
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
//       )}
//     </div>
//   );
// };

// export default Category;


import React, { useState, useEffect } from 'react';
import { GraduationCap, Brain, PartyPopper, ArrowLeft, Users, BookOpen, Clock, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import ArticleCard from '../components/ArticleCard';
import ArticleModal from '../components/ArticleModal'; // AJOUT IMPORT
import WhatsAppButton from '../components/WhatsAppButton';
import { articles } from '../data/articles';
import { Article } from '../types'; // AJOUT IMPORT

interface CategoryProps {
  category: 'vie-etudiante' | 'sante-mentale' | 'loisirs';
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null); // AJOUT ÉTAT
  const [isModalOpen, setIsModalOpen] = useState(false); // AJOUT ÉTAT
  
  const categoryArticles = articles.filter(article => article.category === category);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // AJOUT : Gestionnaire pour ouvrir la popup
  const handleReadArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const getCategoryInfo = () => {
    switch (category) {
      case 'vie-etudiante':
        return {
          title: 'Vie Étudiante',
          subtitle: 'Conseils pratiques pour ton quotidien sur le campus',
          icon: GraduationCap,
          gradient: 'from-blue-500 to-cyan-500',
          bgGradient: 'from-blue-900 via-purple-900 to-indigo-900',
          stats: [
            { number: '50+', label: 'Conseils pratiques', icon: BookOpen },
            { number: '24/7', label: 'Support disponible', icon: Clock },
            { number: '95%', label: 'Étudiants satisfaits', icon: Users }
          ]
        };
      case 'sante-mentale':
        return {
          title: 'Santé Mentale',
          subtitle: 'Prends soin de ton bien-être psychologique',
          icon: Brain,
          gradient: 'from-purple-500 to-pink-500',
          bgGradient: 'from-purple-900 via-indigo-900 to-blue-900',
          stats: [
            { number: '30+', label: 'Articles bien-être', icon: BookOpen },
            { number: '24h', label: 'Écoute disponible', icon: Clock },
            { number: '98%', label: 'Soutien efficace', icon: Users }
          ]
        };
      case 'loisirs':
        return {
          title: 'Loisirs & Associations',
          subtitle: 'Détends-toi et découvre la vie associative',
          icon: PartyPopper,
          gradient: 'from-orange-500 to-red-500',
          bgGradient: 'from-orange-900 via-red-900 to-pink-900',
          stats: [
            { number: '40+', label: 'Activités proposées', icon: BookOpen },
            { number: '25+', label: 'Associations', icon: Users },
            { number: '100%', label: 'Fun garanti', icon: Sparkles }
          ]
        };
      default:
        return {
          title: 'Catégorie',
          subtitle: 'Articles de la catégorie',
          icon: GraduationCap,
          gradient: 'from-blue-500 to-cyan-500',
          bgGradient: 'from-blue-900 via-purple-900 to-indigo-900',
          stats: []
        };
    }
  };

  const categoryInfo = getCategoryInfo();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero de la catégorie avec fond animé */}
      <section className={`relative bg-gradient-to-br ${categoryInfo.bgGradient} py-20 md:py-28 overflow-hidden`}>
        {/* Fond animé */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-float">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-white/40 rounded-full blur-sm"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white/25 rounded-full animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 bg-white/35 rounded-full blur-sm"></div>
          </div>
          
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Bouton retour */}
          <a 
            href="/" 
            className={`inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-all duration-300 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l'accueil</span>
          </a>
          
          {/* Contenu principal */}
          <div className="text-center">
            <div 
              className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${categoryInfo.gradient} rounded-3xl mb-8 shadow-2xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <categoryInfo.icon className="text-white" size={40} />
            </div>
            
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {categoryInfo.title}
            </h1>
            
            <p 
              className={`text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              {categoryInfo.subtitle}
            </p>

            {/* Statistiques de la catégorie */}
            <div 
              className={`flex flex-wrap justify-center gap-6 md:gap-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              {categoryInfo.stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${categoryInfo.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles de la catégorie - CORRECTION : Ajout de onReadArticle */}
      <Section 
        title={`Découvrez nos articles ${categoryInfo.title.toLowerCase()}`}
        subtitle={`Une sélection de contenu de qualité pour votre ${category === 'vie-etudiante' ? 'quotidien étudiant' : category === 'sante-mentale' ? 'bien-être mental' : 'loisirs et associations'}`}
        backgroundColor="light"
      >
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categoryArticles.map((article, index) => (
              <ArticleCard 
                key={article.id}
                article={article}
                onReadArticle={handleReadArticle} // ⚠️ AJOUT ICI
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              />
            ))}
          </div>
        ) : (
          <div 
            className="text-center py-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">Aucun article disponible</h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Nous travaillons sur du nouveau contenu passionnant pour cette catégorie.
              Revenez bientôt !
            </p>
          </div>
        )}
      </Section>

      {/* Bloc spécial pour santé mentale - Version premium */}
      {category === 'sante-mentale' && (
        <div className="container mx-auto px-4">
          <div 
            className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden my-16"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            {/* Background pattern */}
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
        </div>
      )}

      {/* CTA pour les autres catégories */}
      {category !== 'sante-mentale' && (
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Envie de contribuer ?
            </h2>
            
            <p 
              className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Vous avez une idée d'article ou souhaitez partager votre expérience ? 
              Rejoignez notre communauté de contributeurs !
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <WhatsAppButton
                phoneNumber="+33601364596"
                message={`Bonjour, je souhaite proposer un article sur le thème "${categoryInfo.title}".`}
                label="Proposer un article"
                variant="secondary"
                className="text-lg px-8 py-4"
              />
              
              {/* <button className="border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm">
                Voir les autres catégories
              </button> */}
            </div>
          </div>
        </section>
      )}

      {/* AJOUT : Popup Article */}
      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

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

export default Category;