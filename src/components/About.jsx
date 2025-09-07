import React from 'react';
import Entree1 from '../assets/Entree1.png';
import Entree2 from '../assets/Entree2.png';
import Entree3 from '../assets/Entree3.png';
import Andrzej from '../assets/Andrzej.png';
import Marilyn from '../assets/Marilyn.png';
import Sylvine from '../assets/Sylvine.png';
import Kim from '../assets/Kim.png';
import Marc from '../assets/Marc.png';
import Josee from '../assets/Josee.png';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen font-sans text-gray-900">
            {/* HERO */}
            <section className="relative flex items-center min-h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(135deg, rgba(166, 204, 230, 0.88), rgba(186, 174, 217, 0.88)), url(${Entree2})`,
                        backgroundSize: 'cover',          // ✅ remplissage responsive
                        backgroundPosition: 'center',     // ✅ centrage par défaut
                        backgroundRepeat: 'no-repeat'
                    }}
                    aria-hidden="true"
                ></div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl lg:text-6xl font-athelas font-bold text-white mb-6"
                    >
                        À Propos de Nous
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto"
                    >
                        Offrir un foyer sécuritaire, chaleureux et adapté aux besoins uniques de chaque résident.
                    </motion.p>
                </div>
            </section>

            {/* HISTOIRE */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-athelas font-bold text-gray-900 mb-6">
                            Notre Mission
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Offrir plus qu'un lieu de soins, un lieu de vie. Là où chaque regard compte, où chaque sourire est une main tendue vers la sérénité.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            À la résidence Saint-Antoine, nous tissons chaque jour des liens de confiance, dans une ambiance chaleureuse, respectueuse et profondément humaine.
                        </p>
                        <p className="text-lg text-gray-700">
                            Parce qu'accompagner, c'est d'aimer dans la continuité.
                        </p>
                        <p className="text-lg text-gray-700">
                            Parce que vieillir, c'est aussi mériter une présence sincère
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src="/logoRSA_lotus.png"
                            alt="Main Résidence Saint-Antoine"
                            className="w-80 h-80 object-cover object-bottom mx-auto"
                        />




                    </motion.div>
                </div>
            </section>

            {/* VALEURS */}
            <section className="py-20 bg-granby-bg-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-athelas font-bold text-gray-900 mb-6"
                    >
                        Nos Engagements
                    </motion.h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                        Chaque jour, nous nous engageons à offrir :
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Soins Personnalisés",
                                description: "Un accompagnement adapté aux besoins spécifiques de chaque résident."
                            },
                            {
                                title: "Sécurité Maximale",
                                description: "Une surveillance 24h/24 assurée par une équipe qualifiée."
                            },
                            {
                                title: "Bien-être et Activités",
                                description: "Des activités variées pour stimuler le corps et l’esprit."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-white rounded-2xl shadow-granby p-8 hover:shadow-granby-lg transition"
                            >
                                <h3 className="text-xl font-athelas text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* LOISIRS (Hebdomadaire bleu clair + Mensuel violet pâle) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-athelas font-bold text-gray-900 mb-4">
                            Nos Loisirs
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Un programme chaleureux et stimulant, pensé pour nourrir la créativité,
                            l’esprit et le lien social.
                        </p>
                    </motion.div>

                    {(() => {
                        const items = [
                            // Hebdomadaire
                            { title: "Ateliers créatifs", cat: "Hebdomadaire" },
                            { title: "Ateliers cognitifs & psycho-moteurs", cat: "Hebdomadaire" },
                            { title: "Activités Bingo", cat: "Hebdomadaire" },
                            { title: "Activités ludiques", cat: "Hebdomadaire" },
                            { title: "Zoothérapie appliquée", cat: "Hebdomadaire" },
                            { title: "Musique et danse", cat: "Hebdomadaire" },
                            { title: "Ateliers cognitifs & dextérité", cat: "Hebdomadaire" },
                            // Mensuel
                            { title: "Services religieux", cat: "Mensuel" },
                            {
                                title: "Évènements thématiques en coordination avec la cuisine",
                                cat: "Mensuel",
                            },
                        ];

                        // Couleurs de carte selon la catégorie
                        const cardClass = (cat) =>
                            cat === "Hebdomadaire"
                                ? "bg-granby-bg-blue text-gray-900" // bleu clair
                                : "bg-granby-violet/20 text-gray-900"; // violet pâle

                        return (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                                {items.map((it, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.04 }}
                                        className={`w-full max-w-xl ${cardClass(
                                            it.cat
                                        )} rounded-2xl shadow-granby hover:shadow-granby-lg transition p-8 text-center`}
                                    >
                                        <h3 className="text-xl font-athelas mb-2">{it.title}</h3>
                                        <p className="text-sm text-gray-600">
                                            ({it.cat})
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        );
                    })()}
                </div>
            </section>


            {/* ÉQUIPE */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl lg:text-5xl font-athelas font-bold text-gray-900 mb-6"
                    >
                        Notre Équipe
                    </motion.h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
                        Des professionnels passionnés et dévoués, formés pour offrir un accompagnement humain et personnalisé à chaque résident.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Andrzej Jakubowski",
                                role: "Directeur générale",
                                img: Andrzej
                            },

                            {
                                name: "Marilyne Milaenen",
                                role: "Directrice des soins infirmiers et opérations",
                                img: Marilyn
                            },
                            {
                                name: "Sylvine Daigle",
                                role: "Infirmière Auxiliaire",
                                img: Sylvine
                            },
                            {
                                name: "Kim Milaenen Fréchette",
                                role: "Coordinatrice des loisirs",
                                img: Kim
                            },
                            {
                                name: "Marc Fréchette",
                                role: "Responsable Maintenance",
                                img: Marc
                            },
                            {
                                name: "Josée Lavigne",
                                role: "Responsable Cusinie et Chef Cusinière",
                                img: Josee
                            },
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-granby-bg-blue rounded-2xl shadow-granby p-8 hover:shadow-granby-lg transition"
                            >
                                <img
                                    src={member.img}
                                    alt={`${member.name}, ${member.role}`}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                                />
                                <h3 className="text-xl font-athelas text-gray-900">{member.name}</h3>
                                <p className="text-granby-blue-dark">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;
