import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useUIStore } from '../../store/uiStore';

const Header: React.FC = () => {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useUIStore();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Générer', href: '/generate' },
    { name: 'Visualiser', href: '/visualizer' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'À propos', href: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              BuildAI
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/generate">Commencer</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 md:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Link to="/" className="flex items-center space-x-2">
                <Building2 className="w-6 h-6 text-primary-600" />
                <span className="text-lg font-bold">BuildAI</span>
              </Link>
              <Button variant="ghost" size="sm" onClick={toggleSidebar}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={toggleSidebar}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <Button asChild className="w-full">
                <Link to="/generate" onClick={toggleSidebar}>
                  Commencer
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export { Header };