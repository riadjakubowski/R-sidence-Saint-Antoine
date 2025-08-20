// src/Layout.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Qui sommes nous', href: '/about' },
    { name: 'Admission', href: '/admission' },
    { name: 'Carrières', href: '/careers' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-sm border-b border-granby-blue/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-0">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/logoRSA_lotus.png"
                  alt="Logo Résidence St-Antoine"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-32">
                <img
                  src="/logoRSA_name.png"
                  alt="Résidence St-Antoine"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-xl font-athelas font-medium transition-all duration-300 ${isActive(item.href)
                    ? 'bg-granby-violet/20 text-granby-violet'
                    : 'text-gray-700 hover:text-granby-blue hover:bg-granby-blue/10'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-granby-blue/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-granby-blue/20"
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-athelas transition-all duration-300 ${isActive(item.href)
                      ? 'bg-gradient-granby text-white'
                      : 'text-gray-700 hover:bg-granby-blue/10'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-[rgba(166,204,230,0.5)] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Logo + Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="/logoRSA_lotus.png"
                    alt="Logo Résidence St-Antoine"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="h-32">
                  <img
                    src="/logoRSA_name.png"
                    alt="Résidence St-Antoine"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-black/80 text-lg leading-relaxed font-sans mb-4">
                Spécialisés dans les troubles neurocognitifs, nous offrons un environnement sécuritaire
                et bienveillant avec surveillance 24h/7, dans une ambiance familiale et respectueuse.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                  <Phone size={20} className="text-black" />
                </div>
                <div className="w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                  <Mail size={20} className="text-black" />
                </div>
              </div>
            </div>

            {/* Navigation rapide */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 font-sans text-black">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coordonnées */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 font-sans text-black">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-black mt-1" />
                  <div>
                    <p>110 Rue Saint-Antoine S</p>
                    <p>Granby, QC J2G 3W1</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-black" />
                  <p>(450) 378-6374</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 mt-8 pt-4 text-center font-sans text-sm text-black/60">
            <p>
              © 2024 Résidence St-Antoine. Tous droits réservés. | Conçu avec soin pour vos proches.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
