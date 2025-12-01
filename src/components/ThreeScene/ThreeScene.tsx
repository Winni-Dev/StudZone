import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid } from '@react-three/drei';
import { Project } from '../../types';
import { LoadingSpinner } from '../ui/LoadingSpinner';

// Scène 3D principale
const SceneContent: React.FC<{ project: Project }> = ({ project }) => {
  // Générer une structure basique basée sur les données du projet
  const rooms = project.estimation?.rooms || 3;
  const surface = project.estimation?.surface || 100;
  const baseSize = Math.sqrt(surface);

  return (
    <>
      {/* Éclairage */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Grille au sol */}
      <Grid
        args={[20, 20]}
        cellColor="#6b7280"
        sectionColor="#9ca3af"
        cellThickness={0.5}
        sectionThickness={1}
        fadeDistance={30}
        fadeStrength={1}
      />

      {/* Représentation simplifiée du bâtiment */}
      {Array.from({ length: Math.min(rooms, 5) }).map((_, i) => {
        const angle = (i / Math.min(rooms, 5)) * Math.PI * 2;
        const radius = baseSize / 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const height = 2 + (i % 3) * 0.5;
        
        return (
          <mesh
            key={i}
            position={[x, height / 2, z]}
          >
            <boxGeometry args={[baseSize / rooms, height, baseSize / rooms]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}
              opacity={0.8}
              transparent
            />
          </mesh>
        );
      })}

      {/* Contrôles de la caméra */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={50}
      />

      {/* Caméra */}
      <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={50} />
    </>
  );
};

// Composant principal avec Canvas
export const ThreeScene: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <Canvas shadows>
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <LoadingSpinner size="lg" className="mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Chargement de la scène 3D...</p>
              </div>
            </div>
          }
        >
          <SceneContent project={project} />
        </Suspense>
      </Canvas>
    </div>
  );
};

