import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Heart,
  Users,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: "Sécurité et Tranquillité",
      description: "Surveillance 24h/24 avec système de sécurité avancé et équipe de professionnels formés.",
      icon: Shield,
      color: "granby-blue"
    },
    {
      title: "Engagement et Expertise",
      description: "Spécialisés en troubles neurocognitifs avec accompagnement jusqu'à la fin de vie.",
      icon: Award,
      color: "granby-violet"
    },
    {
      title: "Respect et Dignité",
      description: "Accompagnement bienveillant respectant l'individualité et l'histoire de chaque résident.",
      icon: Heart,
      color: "granby-blue"
    },
    {
      title: "Soins Personnalisés",
      description: "Adaptation de nos soins selon les besoins spécifiques et préférences de chacun.",
      icon: Users,
      color: "granby-violet"
    },
    {
      title: "Environnement Familial",
      description: "Ambiance réconfortante favorisant un sentiment d'appartenance et de sécurité.",
      icon: Heart,
      color: "granby-blue"
    }
  ];

  const includedServices = [
    "3 repas et 2 collations par jour",
    "Ménage et buanderie hebdomadaires",
    "Électricité, chauffage, eau chaude et câble",
    "Loisirs et activités adaptées",
    "Surveillance 24h/7",
    "Infirmières auxiliaires et préposés 7j/7"
  ];

  const temoignages = [
    {
      texte: "La Résidence St-Antoine a complètement changé la vie de ma mère. Elle s'y sent en sécurité, entourée et respectée. Merci à toute l'équipe pour votre dévouement!",
      auteur: "Claire B., fille d'une résidente",
      source: "Google Avis, 2024"
    },
    {
      texte: "Nous avons visité plusieurs établissements, mais rien ne se compare à la douceur et à l'attention reçues ici. Mon père s'est réconcilié avec la vie en communauté.",
      auteur: "Youssef M., fils d’un résident",
      source: "Facebook, 2024"
    },
    {
      texte: "Je suis soulagée de voir ma tante entre de bonnes mains. L'équipe est bienveillante et professionnelle. Je recommande chaleureusement la Résidence St-Antoine.",
      auteur: "Fatima Z., nièce d'une résidente",
      source: "Témoignage privé, 2024"
    }
  ];

  const [index, setIndex] = useState(0);
  const suivant = () => setIndex((index + 1) % temoignages.length);
  const precedent = () => setIndex((index - 1 + temoignages.length) % temoignages.length);

  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* HERO */}
      <section className="relative flex items-center min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(166, 204, 230, 0.88), rgba(186, 174, 217, 0.88)), url('https://images.pexels.com/photos/7544762/pexels-photo-7544762.jpeg')"
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-athelas font-bold text-white mb-6 leading-tight">
                Un Foyer de <br />
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                  Sérénité et de Soins
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
                Spécialisés en troubles neurocognitifs, nous offrons un environnement sécuritaire et bienveillant avec surveillance 24h/7, dans une ambiance familiale et respectueuse.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admission"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-granby-blue text-white text-base font-medium
                             hover:shadow-granby-lg transition-all duration-200 outline-none
                             focus-visible:ring-2 focus-visible:ring-granby-blue-light focus-visible:ring-offset-2"
                >
                  Planifier une visite
                  <ArrowRight size={18} className="ml-2" />
                </Link>

                <a
                  href="tel:14503786374"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white text-white text-base font-medium
                             hover:bg-white hover:text-granby-blue-dark transition-all duration-200 outline-none
                             focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                  aria-label="Appeler la résidence"
                >
                  <Phone size={20} className="mr-2" />
                  (450) 378-6374
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 bg-granby-bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-athelas font-bold text-gray-900 mb-6">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Cinq piliers qui guident notre approche pour offrir les meilleurs soins à vos proches dans le respect et la dignité.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              const isBlue = service.color === 'granby-blue';
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="w-full sm:w-[300px]"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-granby hover:shadow-granby-lg transition-all duration-300 h-full">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6
                                  ${isBlue ? 'bg-granby-bg-blue' : 'bg-granby-bg-violet'}`}
                    >
                      <IconComponent
                        size={32}
                        className={isBlue ? 'text-granby-blue' : 'text-granby-violet'}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-athelas text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES INCLUS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-athelas font-bold text-gray-900 mb-6">
                Services Inclus
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Tout ce dont vos proches ont besoin pour une vie confortable et sécuritaire.
              </p>
              <div className="space-y-4">
                {includedServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-granby-blue flex-shrink-0" size={22} aria-hidden="true" />
                    <span className="text-gray-800 text-lg">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/Chambre1.png"
                alt="Main Résidence Saint-Antoine"
                className="rounded-2xl shadow-granby-lg w-full h-96 object-cover"

              />

            </motion.div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-32 bg-granby-bg-violet">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-athelas font-bold text-gray-900 mb-12">
            Ce que disent les familles
          </h2>

          <div className="relative min-h-[300px]" aria-live="polite">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.7 }}
              className="italic text-xl lg:text-2xl text-gray-800 leading-relaxed flex flex-col justify-center h-[300px]"
            >
              “{temoignages[index].texte}”
              <div className="mt-8 not-italic">
                <p className="uppercase font-bold text-sm text-gray-800">
                  {temoignages[index].auteur}
                </p>
                <p className="text-gray-500 text-sm">
                  {temoignages[index].source}
                </p>
              </div>
            </motion.div>

            {/* Flèches */}
            <div className="absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2">
              <button
                onClick={precedent}
                className="p-2 rounded-lg hover:bg-white/60 transition outline-none
                           focus-visible:ring-2 focus-visible:ring-granby-blue-dark"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-9 h-9 text-granby-violet" />
              </button>
            </div>

            <div className="absolute -right-16 sm:-right-20 top-1/2 -translate-y-1/2">
              <button
                onClick={suivant}
                className="p-2 rounded-lg hover:bg-white/60 transition outline-none
                           focus-visible:ring-2 focus-visible:ring-granby-blue-dark"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-9 h-9 text-granby-violet" />
              </button>
            </div>
          </div>

          {/* Points de navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {temoignages.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-granby-violet' : 'bg-gray-300'}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
