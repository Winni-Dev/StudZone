// import React from 'react';
// import { Clock, User, ArrowRight } from 'lucide-react';
// import { Article } from '../types';

// interface ArticleCardProps {
//   article: Article;
//   featured?: boolean;
// }

// const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case 'vie-etudiante': return 'bg-secondary text-white';
//       case 'sante-mentale': return 'bg-primary text-white';
//       case 'loisirs': return 'bg-accent text-dark';
//       default: return 'bg-gray-200 text-dark';
//     }
//   };

//   const getCategoryLabel = (category: string) => {
//     switch (category) {
//       case 'vie-etudiante': return 'Vie étudiante';
//       case 'sante-mentale': return 'Santé mentale';
//       case 'loisirs': return 'Loisirs';
//       default: return category;
//     }
//   };

//   return (
//     <article 
//       className={`bg-surface rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group ${
//         featured ? 'lg:col-span-2' : ''
//       }`}
//       data-aos="fade-up"
//     >
//       <div className={`${featured ? 'lg:flex' : ''}`}>
//         {/* Image */}
//         <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : 'h-48'}`}>
//           <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
//             <div className="text-4xl">
//               {article.category === 'vie-etudiante' && '🎓'}
//               {article.category === 'sante-mentale' && '🧠'}
//               {article.category === 'loisirs' && '🎉'}
//             </div>
//           </div>
//           <div className="absolute top-4 left-4">
//             <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
//               {getCategoryLabel(article.category)}
//             </span>
//           </div>
//         </div>
        
//         {/* Contenu */}
//         <div className={`p-6 ${featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
//           <h3 className={`font-bold text-dark group-hover:text-primary transition-colors ${
//             featured ? 'text-2xl lg:text-3xl' : 'text-xl'
//           }`}>
//             {article.title}
//           </h3>
          
//           <p className="text-gray-600 mt-3 leading-relaxed">
//             {article.excerpt}
//           </p>
          
//           {/* Métadonnées */}
//           <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//             <div className="flex items-center space-x-4 text-sm text-gray-500">
//               <div className="flex items-center space-x-1">
//                 <User size={16} />
//                 <span>{article.author}</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Clock size={16} />
//                 <span>{article.readTime} min</span>
//               </div>
//             </div>
            
//             <button className="flex items-center space-x-1 text-primary font-semibold group-hover:space-x-2 transition-all">
//               <span>Lire l'article</span>
//               <ArrowRight size={16} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ArticleCard;


// import React from 'react';
// import { Clock, User, ArrowRight } from 'lucide-react';
// import { Article } from '../types';

// interface ArticleCardProps {
//   article: Article;
//   featured?: boolean;
//   layout?: 'vertical' | 'horizontal';
//   onReadArticle: (article: Article) => void;
// }

// const ArticleCard: React.FC<ArticleCardProps> = ({ 
//   article, 
//   featured = false, 
//   layout = 'vertical',
//   onReadArticle 
// }) => {
//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case 'vie-etudiante': return 'bg-blue-500 text-white';
//       case 'sante-mentale': return 'bg-purple-500 text-white';
//       case 'loisirs': return 'bg-orange-500 text-white';
//       default: return 'bg-gray-500 text-white';
//     }
//   };

//   const getCategoryLabel = (category: string) => {
//     switch (category) {
//       case 'vie-etudiante': return 'Vie étudiante';
//       case 'sante-mentale': return 'Santé mentale';
//       case 'loisirs': return 'Loisirs';
//       default: return category;
//     }
//   };

//   const getCategoryEmoji = (category: string) => {
//     switch (category) {
//       case 'vie-etudiante': return '🎓';
//       case 'sante-mentale': return '🧠';
//       case 'loisirs': return '🎉';
//       default: return '📝';
//     }
//   };

//   // Fonction sécurisée pour gérer le clic
//   const handleReadArticle = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (onReadArticle && typeof onReadArticle === 'function') {
//       onReadArticle(article);
//     }
//   };

//   // Layout horizontal pour les articles featured
//   if (layout === 'horizontal') {
//     return (
//       <article 
//         className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
//         onClick={handleReadArticle}
//       >
//         <div className="lg:flex">
//           {/* Image */}
//           <div className="lg:w-1/2 relative overflow-hidden">
//             <div className="w-full h-64 lg:h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
//               <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
//                 {getCategoryEmoji(article.category)}
//               </div>
//             </div>
//             <div className="absolute top-4 left-4">
//               <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
//                 {getCategoryLabel(article.category)}
//               </span>
//             </div>
//           </div>
          
//           {/* Contenu */}
//           <div className="lg:w-1/2 p-8 flex flex-col justify-center">
//             <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
//               {article.title}
//             </h3>
            
//             <p className="text-gray-600 leading-relaxed mb-6">
//               {article.excerpt}
//             </p>
            
//             {/* Métadonnées */}
//             <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//               <div className="flex items-center space-x-4 text-sm text-gray-500">
//                 <div className="flex items-center space-x-1">
//                   <User size={16} />
//                   <span>{article.author}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Clock size={16} />
//                   <span>{article.readTime} min</span>
//                 </div>
//               </div>
              
//               <button 
//                 className="flex items-center space-x-1 text-blue-600 font-semibold group-hover:space-x-2 transition-all"
//                 onClick={handleReadArticle}
//               >
//                 <span>Lire l'article</span>
//                 <ArrowRight size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </article>
//     );
//   }

//   // Layout vertical par défaut
//   return (
//     <article 
//       className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full flex flex-col"
//       onClick={handleReadArticle}
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden">
//         <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
//           <div className="text-5xl transform group-hover:scale-110 transition-transform duration-500">
//             {getCategoryEmoji(article.category)}
//           </div>
//         </div>
//         <div className="absolute top-4 left-4">
//           <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
//             {getCategoryLabel(article.category)}
//           </span>
//         </div>
//       </div>
      
//       {/* Contenu */}
//       <div className="p-6 flex-1 flex flex-col">
//         <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
//           {article.title}
//         </h3>
        
//         <p className="text-gray-600 flex-1 leading-relaxed">
//           {article.excerpt}
//         </p>
        
//         {/* Métadonnées */}
//         <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//           <div className="flex items-center space-x-4 text-sm text-gray-500">
//             <div className="flex items-center space-x-1">
//               <User size={14} />
//               <span>{article.author}</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <Clock size={14} />
//               <span>{article.readTime} min</span>
//             </div>
//           </div>
          
//           <button 
//             className="flex items-center space-x-1 text-blue-600 font-semibold group-hover:space-x-2 transition-all text-sm"
//             onClick={handleReadArticle}
//           >
//             <span>Lire</span>
//             <ArrowRight size={14} />
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ArticleCard;

import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  layout?: 'vertical' | 'horizontal';
  onReadArticle: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  featured = false, 
  layout = 'vertical',
  onReadArticle 
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vie-etudiante': return 'bg-blue-500 text-white';
      case 'sante-mentale': return 'bg-purple-500 text-white';
      case 'loisirs': return 'bg-orange-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'vie-etudiante': return 'Vie étudiante';
      case 'sante-mentale': return 'Santé mentale';
      case 'loisirs': return 'Loisirs';
      default: return category;
    }
  };

  // Fonction sécurisée pour gérer le clic
  const handleReadArticle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onReadArticle && typeof onReadArticle === 'function') {
      onReadArticle(article);
    }
  };

  // Layout horizontal pour les articles featured
  if (layout === 'horizontal') {
    return (
      <article 
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
        onClick={handleReadArticle}
      >
        <div className="lg:flex">
          {/* Image réelle */}
          <div className="lg:w-1/2 relative overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback si l'image ne charge pas
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback avec emoji si l'image ne charge pas */}
            <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-6xl">
                {article.category === 'vie-etudiante' && '🎓'}
                {article.category === 'sante-mentale' && '🧠'}
                {article.category === 'loisirs' && '🎉'}
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {getCategoryLabel(article.category)}
              </span>
            </div>
          </div>
          
          {/* Contenu */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
              {article.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {article.excerpt}
            </p>
            
            {/* Métadonnées */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{article.readTime} min</span>
                </div>
              </div>
              
              <button 
                className="flex items-center space-x-1 text-blue-600 font-semibold group-hover:space-x-2 transition-all"
                onClick={handleReadArticle}
              >
                <span>Lire l'article</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Layout vertical par défaut
  return (
    <article 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full flex flex-col"
      onClick={handleReadArticle}
    >
      {/* Image réelle */}
      <div className="relative overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback si l'image ne charge pas
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
          }}
        />
        {/* Fallback avec emoji si l'image ne charge pas */}
        <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-5xl">
            {article.category === 'vie-etudiante' && '🎓'}
            {article.category === 'sante-mentale' && '🧠'}
            {article.category === 'loisirs' && '🎉'}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
            {getCategoryLabel(article.category)}
          </span>
        </div>
      </div>
      
      {/* Contenu */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
          {article.title}
        </h3>
        
        <p className="text-gray-600 flex-1 leading-relaxed">
          {article.excerpt}
        </p>
        
        {/* Métadonnées */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{article.readTime} min</span>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-1 text-blue-600 font-semibold group-hover:space-x-2 transition-all text-sm"
            onClick={handleReadArticle}
          >
            <span>Lire</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;