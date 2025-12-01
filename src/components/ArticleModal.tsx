// import React from 'react';
// import { X, Clock, User, Calendar, Share2, Heart, Bookmark } from 'lucide-react';
// import { Article } from '../types';

// interface ArticleModalProps {
//   article: Article | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
//   if (!isOpen || !article) return null;

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

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('fr-FR', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric'
//     });
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//       <div 
//         className="bg-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* En-tête */}
//         <div className="flex justify-between items-center p-6 border-b border-gray-200">
//           <div className="flex items-center space-x-4">
//             <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
//               {getCategoryLabel(article.category)}
//             </span>
//             <span className="text-sm text-gray-500">{article.subcategory}</span>
//           </div>
          
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Contenu défilant */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-6 lg:p-8">
//             {/* En-tête article */}
//             <div className="mb-8">
//               <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
//                 {article.title}
//               </h1>
              
//               <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
//                 <div className="flex items-center space-x-2">
//                   <User size={18} />
//                   <span className="font-medium">{article.author}</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Calendar size={18} />
//                   <span>{formatDate(article.date)}</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Clock size={18} />
//                   <span>{article.readTime} min de lecture</span>
//                 </div>
//               </div>

//               {/* Image de l'article */}
//               <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6">
//                 <div className="text-6xl">
//                   {article.category === 'vie-etudiante' && '🎓'}
//                   {article.category === 'sante-mentale' && '🧠'}
//                   {article.category === 'loisirs' && '🎉'}
//                 </div>
//               </div>
//             </div>

//             {/* Contenu de l'article */}
//             <div 
//               className="prose prose-lg max-w-none"
//               dangerouslySetInnerHTML={{ __html: article.content }}
//             />
//           </div>
//         </div>

//         {/* Pied de page avec actions */}
//         <div className="p-6 border-t border-gray-200 bg-background">
//           <div className="flex justify-between items-center">
//             <div className="flex space-x-4">
//               <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
//                 <Heart size={20} />
//                 <span>J'aime</span>
//               </button>
//               <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
//                 <Bookmark size={20} />
//                 <span>Sauvegarder</span>
//               </button>
//               <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
//                 <Share2 size={20} />
//                 <span>Partager</span>
//               </button>
//             </div>
            
//             <button
//               onClick={onClose}
//               className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors"
//             >
//               Fermer
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleModal;


// import React from 'react';
// import { X, Clock, User, Calendar, Share2, Heart, Bookmark } from 'lucide-react';
// import { Article } from '../types';

// interface ArticleModalProps {
//   article: Article | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
//   if (!isOpen || !article) return null;

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

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('fr-FR', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric'
//     });
//   };

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col transform transition-transform duration-300 scale-100"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* En-tête */}
//         <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
//           <div className="flex items-center space-x-4">
//             <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
//               {getCategoryLabel(article.category)}
//             </span>
//             <span className="text-sm text-gray-500">{article.subcategory}</span>
//           </div>
          
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Contenu défilant */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-6 lg:p-8">
//             {/* En-tête article */}
//             <div className="mb-8">
//               <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//                 {article.title}
//               </h1>
              
//               <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
//                 <div className="flex items-center space-x-2">
//                   <User size={18} />
//                   <span className="font-medium">{article.author}</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Calendar size={18} />
//                   <span>{formatDate(article.date)}</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Clock size={18} />
//                   <span>{article.readTime} min de lecture</span>
//                 </div>
//               </div>

//               {/* Image de l'article */}
//               <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
//                 <div className="text-8xl transform hover:scale-110 transition-transform duration-500">
//                   {getCategoryEmoji(article.category)}
//                 </div>
//               </div>
//             </div>

//             {/* Contenu de l'article */}
//             <div 
//               className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
//               dangerouslySetInnerHTML={{ __html: article.content }}
//             />
//           </div>
//         </div>

//         {/* Pied de page avec actions */}
//         <div className="p-6 border-t border-gray-200 bg-gray-50">
//           <div className="flex justify-between items-center">
//             {/* <div className="flex space-x-4">
//               <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white">
//                 <Heart size={20} />
//                 <span className="text-sm font-medium">J'aime</span>
//               </button>
//               <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white">
//                 <Bookmark size={20} />
//                 <span className="text-sm font-medium">Sauvegarder</span>
//               </button>
//               <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white">
//                 <Share2 size={20} />
//                 <span className="text-sm font-medium">Partager</span>
//               </button>
//             </div> */}
            
//             <button
//               onClick={onClose}
//               className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm"
//             >
//               Fermer
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleModal;


import React from 'react';
import { X, Clock, User, Calendar, Share2, Heart, Bookmark } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) return null;

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
              {getCategoryLabel(article.category)}
            </span>
            <span className="text-sm text-gray-500">{article.subcategory}</span>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Contenu défilant */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-8">
            {/* En-tête article */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>{article.readTime} min de lecture</span>
                </div>
              </div>

              {/* Image réelle de l'article */}
              <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback si l'image ne charge pas
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center';
                    fallback.innerHTML = `<div class="text-6xl">${
                      article.category === 'vie-etudiante' ? '🎓' : 
                      article.category === 'sante-mentale' ? '🧠' : '🎉'
                    }</div>`;
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
            </div>

            {/* Contenu de l'article */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>

        {/* Pied de page avec actions */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end items-center">
            {/* <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white">
                <Heart size={20} />
                <span className="text-sm font-medium">J'aime</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white">
                <Bookmark size={20} />
                <span className="text-sm font-medium">Sauvegarder</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white">
                <Share2 size={20} />
                <span className="text-sm font-medium">Partager</span>
              </button>
            </div> */}
            
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;