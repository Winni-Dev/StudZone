import React from 'react';
import { ArrowRight, Users, BookOpen, Heart, GraduationCap, Brain, PartyPopper } from 'lucide-react'; 

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-background to-accent/20 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte principal */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Users size={16} />
              <span>Ton média étudiant 100% bonne vibes</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-dark leading-tight">
              Bienvenue sur
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                StudZone
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvre tous nos conseils, astuces et bons plans pour réussir ta vie étudiante 
              dans la bonne humeur. De l'organisation à la détente, on pense à tout !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <span>Explorer les articles</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors">
                Découvrir le campus
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <BookOpen className="text-secondary" size={20} />
                <div>
                  <div className="font-bold text-dark">50+</div>
                  <div className="text-sm text-gray-600">Articles publiés</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-primary" size={20} />
                <div>
                  <div className="font-bold text-dark">5k+</div>
                  <div className="text-sm text-gray-600">Étudiants actifs</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="relative">
            <div className="bg-surface rounded-2xl p-8 shadow-xl border">
              <div className="grid grid-cols-2 gap-4">
                {/* Cartes d'illustration */}
                <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl text-white">
                  <GraduationCap size={32} />
                  <h3 className="font-bold mt-4">Vie étudiante</h3>
                  <p className="text-sm opacity-90 mt-2">Conseils pratiques</p>
                </div>
                <div className="bg-gradient-to-br from-secondary to-accent p-6 rounded-xl text-dark">
                  <Brain size={32} />
                  <h3 className="font-bold mt-4">Santé mentale</h3>
                  <p className="text-sm opacity-90 mt-2">Bien-être au quotidien</p>
                </div>
                <div className="bg-gradient-to-br from-accent to-primary p-6 rounded-xl text-dark col-span-2">
                  <PartyPopper size={32} />
                  <h3 className="font-bold mt-4">Loisirs & associations</h3>
                  <p className="text-sm opacity-90 mt-2">Détente et activités</p>
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;