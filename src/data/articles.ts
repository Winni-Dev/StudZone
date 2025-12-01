// import { Article } from '../types';

// export const articles: Article[] = [
//   {
//     id: 1,
//     title: "Comment organiser son temps entre cours et vie sociale",
//     excerpt: "Découvrez nos astuces pour trouver le parfait équilibre entre études et moments de détente.",
//     content: `
//       <h2>L'importance d'un bon équilibre</h2>
//       <p>En tant qu'étudiant, trouver l'équilibre entre les cours, les révisions et la vie sociale peut sembler difficile. Pourtant, c'est essentiel pour ton bien-être et ta réussite académique.</p>
      
//       <h3>🎯 La méthode des blocs de temps</h3>
//       <p>Divise ta journée en blocs de 2-3 heures dédiés à une activité spécifique :</p>
//       <ul>
//         <li><strong>9h-12h</strong> : Cours et prise de notes</li>
//         <li><strong>14h-16h</strong> : Révisions actives</li>
//         <li><strong>16h-18h</strong> : Activités sociales ou sport</li>
//         <li><strong>20h-22h</strong> : Détente et loisirs</li>
//       </ul>
      
//       <h3>💡 Astuce bonus</h3>
//       <p>Utilise l'application <strong>Forest</strong> pour rester concentré pendant tes sessions de travail et gagner du temps pour tes activités sociales !</p>
//     `,
//     category: "vie-etudiante",
//     subcategory: "Organisation",
//     author: "Marie Dubois",
//     date: "2023-10-15",
//     readTime: 5,
//     image: "/images/organisation-temps.jpg",
//     featured: true
//   },
//   {
//     id: 2,
//     title: "Gérer le stress des examens : 5 techniques efficaces",
//     excerpt: "Des méthodes simples pour rester zen pendant la période des partiels.",
//     content: `
//       <h2>Les 5 techniques anti-stress</h2>
//       <p>La période des examens approche et tu sens la pression monter ? Voici nos techniques éprouvées :</p>
      
//       <h3>1. 🧘‍♀️ Respiration carrée</h3>
//       <p>Inspire 4 secondes, retiens ton souffle 4 secondes, expire 4 secondes, pause 4 secondes. Répète 5 fois.</p>
      
//       <h3>2. 📝 Brain dumping</h3>
//       <p>Écris tout ce qui te passe par la tête pendant 10 minutes. Ça libère l'esprit !</p>
      
//       <h3>3. 🚶‍♂️ Marche consciente</h3>
//       <p>15 minutes de marche en pleine conscience, en sentant chaque pas.</p>
      
//       <h3>4. 🎵 Playlist détente</h3>
//       <p>Crée une playlist de sons naturels ou de musique classique pour tes révisions.</p>
      
//       <h3>5. 📅 Planification réaliste</h3>
//       <p>Établis un planning qui inclut des pauses et du temps pour toi.</p>
//     `,
//     category: "sante-mentale",
//     subcategory: "Stress & anxiété",
//     author: "Thomas Martin",
//     date: "2023-10-10",
//     readTime: 7,
//     image: "/images/gestion-stress.jpg",
//     featured: true
//   },
//   {
//     id: 3,
//     title: "Les meilleures activités du week-end sur le campus",
//     excerpt: "Notre sélection d'événements et d'activités pour se détendre après une semaine de cours.",
//     content: "...",
//     category: "loisirs",
//     subcategory: "Activités du week-end",
//     author: "Sophie Lambert",
//     date: "2023-10-05",
//     readTime: 4,
//     image: "/images/activites-weekend.jpg",
//     featured: false
//   },
//   {
//     id: 4,
//     title: "Trouver un logement étudiant : nos conseils",
//     excerpt: "Guide complet pour dénicher le logement parfait sans se ruiner.",
//     content: "...",
//     category: "vie-etudiante",
//     subcategory: "Logement",
//     author: "Alexandre Petit",
//     date: "2023-09-28",
//     readTime: 8,
//     image: "/images/logement-etudiant.jpg",
//     featured: false
//   },
//   {
//     id: 5,
//     title: "Reconnaître les signes du burn-out étudiant",
//     excerpt: "Apprenez à identifier les symptômes et à agir à temps.",
//     content: "...",
//     category: "sante-mentale",
//     subcategory: "Burn-out étudiant",
//     author: "Dr. Laura Weiss",
//     date: "2023-09-20",
//     readTime: 6,
//     image: "/images/burn-out.jpg",
//     featured: true
//   },
//   {
//     id: 6,
//     title: "Rejoindre un club étudiant : pourquoi c'est essentiel",
//     excerpt: "Découvrez tous les bénéfices de l'engagement associatif.",
//     content: "...",
//     category: "loisirs",
//     subcategory: "Clubs du campus",
//     author: "Kevin Durand",
//     date: "2023-09-15",
//     readTime: 5,
//     image: "/images/clubs-etudiants.jpg",
//     featured: false
//   },
//   // NOUVEAUX ARTICLES
//   {
//     id: 7,
//     title: "Budget étudiant : 10 astuces pour économiser au quotidien",
//     excerpt: "Comment bien gérer son argent quand on est étudiant sans se priver.",
//     content: "...",
//     category: "vie-etudiante",
//     subcategory: "Bons plans campus",
//     author: "Julie Moreau",
//     date: "2023-09-10",
//     readTime: 6,
//     image: "/images/budget-etudiant.jpg",
//     featured: false
//   },
//   {
//     id: 8,
//     title: "Méditation pour étudiants : 5 minutes pour mieux dormir",
//     excerpt: "Une routine simple pour améliorer la qualité de ton sommeil.",
//     content: "...",
//     category: "sante-mentale",
//     subcategory: "Organisation & motivation",
//     author: "Thomas Martin",
//     date: "2023-09-05",
//     readTime: 3,
//     image: "/images/meditation.jpg",
//     featured: false
//   },
//   {
//     id: 9,
//     title: "Les associations les plus actives de ton campus",
//     excerpt: "Tour d'horizon des clubs où rencontrer des gens passionnants.",
//     content: "...",
//     category: "loisirs",
//     subcategory: "Vie associative",
//     author: "Sophie Lambert",
//     date: "2023-08-28",
//     readTime: 5,
//     image: "/images/associations.jpg",
//     featured: false
//   },
//   {
//     id: 10,
//     title: "Transport étudiant : tous les avantages dont tu peux bénéficier",
//     excerpt: "Réductions, abonnements et astuces pour te déplacer malin.",
//     content: "...",
//     category: "vie-etudiante",
//     subcategory: "Transport",
//     author: "Alexandre Petit",
//     date: "2023-08-20",
//     readTime: 4,
//     image: "/images/transport.jpg",
//     featured: false
//   }
// ];


import { Article } from '../types';

export const articles: Article[] = [
  {
    id: 1,
    title: "Comment organiser son temps entre cours et vie sociale",
    excerpt: "Découvrez nos astuces pour trouver le parfait équilibre entre études et moments de détente.",
    content: `
      <h2>L'importance d'un bon équilibre</h2>
      <p>En tant qu'étudiant, trouver l'équilibre entre les cours, les révisions et la vie sociale peut sembler difficile. Pourtant, c'est essentiel pour ton bien-être et ta réussite académique.</p>

      <h3>🎯 La méthode des blocs de temps</h3>
      <p>Divise ta journée en blocs de 2-3 heures dédiés à une activité spécifique :</p>
      <ul>
        <li><strong>9h-12h</strong> : Cours et prise de notes</li>
        <li><strong>14h-16h</strong> : Révisions actives</li>
        <li><strong>16h-18h</strong> : Activités sociales ou sport</li>
        <li><strong>20h-22h</strong> : Détente et loisirs</li>
      </ul>

      <h3>💡 Astuce bonus</h3>
      <p>Utilise l'application <strong>Forest</strong> pour rester concentré pendant tes sessions de travail et gagner du temps pour tes activités sociales !</p>
    `,
    category: "vie-etudiante",
    subcategory: "Organisation",
    author: "Emmanuel Kouadio",
    date: "2023-10-15",
    readTime: 5,
    image: "https://images.pexels.com/photos/3466163/pexels-photo-3466163.jpeg",
    featured: true
  },

  {
    id: 2,
    title: "Gérer le stress des examens : 5 techniques efficaces",
    excerpt: "Des méthodes simples pour rester zen pendant la période des partiels.",
    content: `
      <h2>Les 5 techniques anti-stress</h2>
      <p>La période des examens approche et tu sens la pression monter ? Voici nos techniques éprouvées :</p>

      <h3>1. 🧘‍♀️ Respiration carrée</h3>
      <p>Inspire 4 secondes, retiens 4 secondes, expire 4 secondes, repose 4 secondes. Répète 5 fois.</p>

      <h3>2. 📝 Brain dumping</h3>
      <p>Écris tout ce qui te passe par la tête pendant 10 minutes pour libérer ton esprit.</p>

      <h3>3. 🚶‍♂️ Marche consciente</h3>
      <p>15 minutes de marche où tu observes ta respiration et ton environnement.</p>

      <h3>4. 🎵 Playlist détente</h3>
      <p>Crée une playlist de sons naturels ou de musique douce pour accompagner tes révisions.</p>

      <h3>5. 📅 Planning équilibré</h3>
      <p>Prévois des pauses obligatoires pour éviter la surcharge mentale.</p>
    `,
    category: "sante-mentale",
    subcategory: "Stress & anxiété",
    author: "Gui albert",
    date: "2023-10-10",
    readTime: 7,
    image: "https://images.pexels.com/photos/1152853/pexels-photo-1152853.jpeg",
    featured: true
  },

  {
    id: 3,
    title: "Les meilleures activités du week-end sur le campus",
    excerpt: "Notre sélection d'événements et d'activités pour se détendre après une semaine de cours.",
    content: `
      <h2>Top des activités du week-end</h2>
      <p>Besoin de souffler après une longue semaine de cours ? Voici nos activités préférées :</p>

      <ul>
        <li>🎬 Ciné-débat organisé par le club audiovisuel</li>
        <li>🏀 Tournoi sportif inter-filières</li>
        <li>🎤 Scène ouverte du vendredi soir</li>
        <li>🌿 Atelier bien-être (yoga & méditation)</li>
      </ul>

      <p>Il y en a pour tous les goûts !</p>
    `,
    category: "loisirs",
    subcategory: "Activités du week-end",
    author: "Sakina Diero",
    date: "2023-10-05",
    readTime: 4,
    image: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg",
    featured: false
  },

  {
    id: 4,
    title: "Trouver un logement étudiant : nos conseils",
    excerpt: "Guide complet pour dénicher le logement parfait sans se ruiner.",
    content: `
      <h2>Comment trouver le bon logement ?</h2>
      <p>Chercher un logement étudiant peut être stressant, mais voici les étapes clés :</p>

      <h3>1. 📍 Choisir la bonne localisation</h3>
      <p>Privilégie un logement proche de ton campus ou d'un arrêt de transport.</p>

      <h3>2. 💰 Comparer les prix</h3>
      <p>Utilise des plateformes comme StudApart, LeBonCoin ou Roomlala.</p>

      <h3>3. 📝 Préparer un bon dossier</h3>
      <p>Pièce d'identité, garant, bulletins de salaire… Prépare tout à l'avance.</p>

      <h3>4. 🤝 Visiter physiquement</h3>
      <p>Évite les arnaques en visitant ou en demandant une visite vidéo.</p>
    `,
    category: "vie-etudiante",
    subcategory: "Logement",
    author: " ",
    date: "2023-09-28",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },

  {
    id: 5,
    title: "Reconnaître les signes du burn-out étudiant",
    excerpt: "Apprenez à identifier les symptômes et à agir à temps.",
    content: `
      <h2>Les signes du burn-out</h2>
      <p>Le burn-out étudiant est plus fréquent qu'on le croit. Voici les signaux :</p>

      <ul>
        <li>😞 Perte d'envie d'étudier</li>
        <li>😓 Fatigue extrême malgré le repos</li>
        <li>📉 Baisse de résultats sans raison apparente</li>
        <li>💢 Irritabilité ou anxiété</li>
      </ul>

      <h3>Que faire ?</h3>
      <p>Parle-en à un proche, un conseiller scolaire ou contacte un professionnel.</p>
    `,
    category: "sante-mentale",
    subcategory: "Burn-out étudiant",
    author: "Dr. Boiffo",
    date: "2023-09-20",
    readTime: 6,
 image: "https://images.pexels.com/photos/9869399/pexels-photo-9869399.jpeg",
    featured: true
  },

  {
    id: 6,
    title: "Rejoindre un club étudiant : pourquoi c'est essentiel",
    excerpt: "Découvrez tous les bénéfices de l'engagement associatif.",
    content: `
      <h2>Pourquoi rejoindre un club ?</h2>
      <p>L'engagement associatif est l'un des meilleurs moyens de s'intégrer :</p>

      <ul>
        <li>🤝 Rencontrer de nouvelles personnes</li>
        <li>💼 Développer des compétences professionnelles</li>
        <li>🎉 Participer à des événements exclusifs</li>
        <li>🎯 Se découvrir de nouvelles passions</li>
      </ul>
    `,
    category: "loisirs",
    subcategory: "Clubs du campus",
    author: "Marie Ange",
    date: "2023-09-15",
    readTime: 5,
    image: "https://images.pexels.com/photos/6224492/pexels-photo-6224492.jpeg",
    featured: false
  },

  {
    id: 7,
    title: "Budget étudiant : 10 astuces pour économiser au quotidien",
    excerpt: "Comment bien gérer son argent quand on est étudiant sans se priver.",
    content: `
      <h2>10 astuces simples</h2>
      <ul>
        <li>🍜 Cuisiner au lieu de commander</li>
        <li>🚍 Utiliser les abonnements étudiants</li>
        <li>📚 Acheter les livres d'occasion</li>
        <li>🛒 Faire ses courses en promo</li>
        <li>🏠 Partager un logement</li>
        <li>🚲 Utiliser le vélo plutôt que les transports</li>
        <li>🎫 Profiter des réductions étudiantes</li>
        <li>📱 Utiliser des applications de cashback</li>
        <li>💧 Boire l'eau du robinet</li>
        <li>🎯 Fixer un budget mensuel</li>
      </ul>
    `,
    category: "vie-etudiante",
    subcategory: "Bons plans campus",
    author: "Julie Moreau",
    date: "2023-09-10",
    readTime: 6,
    image: "https://images.pexels.com/photos/5234743/pexels-photo-5234743.jpeg",
    featured: false
  },

  {
    id: 8,
    title: "Méditation pour étudiants : 5 minutes pour mieux dormir",
    excerpt: "Une routine simple pour améliorer la qualité de ton sommeil.",
    content: `
      <h2>La routine de 5 minutes</h2>
      <p>Assieds-toi confortablement, ferme les yeux et respire profondément.</p>
      <ul>
        <li>🧘 Visualise un lieu calme</li>
        <li>😌 Relâche tes épaules</li>
        <li>💤 Respire lentement</li>
        <li>🎯 Concentre-toi sur le moment présent</li>
        <li>🌙 Répète un mantra apaisant</li>
      </ul>

      <h3>Les bienfaits</h3>
      <p>Cette pratique quotidienne améliore la qualité du sommeil et réduit le stress.</p>
    `,
    category: "sante-mentale",
    subcategory: "Organisation & motivation",
    author: "Marie Ange",
    date: "2023-09-05",
    readTime: 3,
    image: "https://images.pexels.com/photos/8981315/pexels-photo-8981315.jpeg",
    featured: false
  },

  {
    id: 9,
    title: "Les associations les plus actives de ton campus",
    excerpt: "Tour d'horizon des clubs où rencontrer des gens passionnants.",
    content: `
      <h2>Top associations étudiantes</h2>
      <ul>
        <li>🎭 Club théâtre - Répétitions hebdomadaires</li>
        <li>🎨 Club arts & design - Ateliers créatifs</li>
        <li>🤖 Club robotique - Projets innovants</li>
        <li>🎵 Club musique moderne - Jam sessions</li>
        <li>🏃 Club sportif - Compétitions inter-universités</li>
        <li>🌍 Club écologie - Actions environnementales</li>
        <li>💻 Club informatique - Hackathons</li>
        <li>📸 Club photo - Expositions</li>
      </ul>

      <h3>Comment s'inscrire ?</h3>
      <p>Rends-toi au Bureau de la Vie Étudiante ou sur le site de ton université.</p>
    `,
    category: "loisirs",
    subcategory: "Vie associative",
    author: "Sakina Diero ",
    date: "2023-08-28",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },

  {
    id: 10,
    title: "Transport étudiant : tous les avantages dont tu peux bénéficier",
    excerpt: "Réductions, abonnements et astuces pour te déplacer malin.",
    content: `
      <h2>Les avantages étudiants</h2>
      <p>Les villes offrent de nombreux avantages pour faciliter tes déplacements :</p>
      <ul>
        <li>🚍 Réductions jusqu'à 50% sur les transports publics</li>
        <li>🚲 Vélos en libre-service à tarif préférentiel</li>
        <li>🚆 Cartes jeunes pour les trains (SNCF, etc.)</li>
        <li>🚗 Covoiturage étudiant entre campus</li>
        <li>🛴 Trottinettes électriques en partenariat</li>
      </ul>

      <h3>Comment en bénéficier ?</h3>
      <p>Présente ta carte étudiante valide et remplis les formulaires en ligne.</p>
      
      <h3>Astuce bonus</h3>
      <p>Regroupe tes trajets pour optimiser tes abonnements !</p>
    `,
    category: "vie-etudiante",
    subcategory: "Transport",
    author: " ",
    date: "2023-08-20",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    featured: false
  },

  {
    id: 11,
    title: "Méthodes de révision efficaces pour les examens",
    excerpt: "Découvre les techniques qui marchent vraiment pour réussir tes partiels.",
    content: `
      <h2>Les méthodes éprouvées</h2>
      <p>Pour des révisions efficaces, adopte ces techniques :</p>

      <ul>
        <li>📝 La méthode Pomodoro (25 min travail / 5 min pause)</li>
        <li>🧠 Les cartes mentales pour visualiser</li>
        <li>👥 Les groupes de travail collaboratif</li>
        <li>🎯 Les fiches de révision synthétiques</li>
        <li>🔁 La répétition espacée</li>
      </ul>

      <h3>Conseil important</h3>
      <p>Commence tes révisions au moins 3 semaines avant les examens !</p>
    `,
    category: "vie-etudiante",
    subcategory: "Organisation",
    author: "Marie ",
    date: "2023-08-15",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },

  {
    id: 12,
    title: "Alimentation équilibrée pour étudiants pressés",
    excerpt: "Des recettes simples et nutritives pour garder la forme pendant les études.",
    content: `
      <h2>Manger sain sans y passer des heures</h2>
      <p>Quelques idées de repas équilibrés et rapides :</p>

      <ul>
        <li>🥪 Sandwichs protéinés (thon, poulet, œufs)</li>
        <li>🥗 Salades complètes à préparer à l'avance</li>
        <li>🍲 Soupes et veloutés maison</li>
        <li>🍚 Bowl de riz avec légumes et protéines</li>
        <li>🍎 Fruits et noix pour les collations</li>
      </ul>

      <h3>Astuce budget</h3>
      <p>Achète en gros et congèle pour économiser !</p>
    `,
    category: "sante-mentale",
    subcategory: "Organisation & motivation",
    author: " Sakina Diero",
    date: "2023-08-10",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  }
];