import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Heart,
    Users,
    Award,
    Clock,
    MapPin,
    DollarSign,
    Send,
    CheckCircle,
    Stethoscope,
    GraduationCap,
    Shield
} from 'lucide-react';


const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        availability: '',
        coverLetter: '',
        resume: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleChange = (e) => {
        const file = e.target.files?.[0] || null;
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    };
    const handleFileChange = (e) => {
        const file = e.target.files?.[0] || null;
        setFormData((p) => ({ ...p, resume: file }));
    };

    // Avantages — couleurs fixées (pas de classes dynamiques Tailwind)
    const benefits = [
        {
            title: 'Salaire compétitif',
            description: "Rémunération attractive selon l'expérience",
            icon: DollarSign,
            bg: 'bg-granby-bg-blue',
            fg: 'text-granby-blue'
        },
        {
            title: 'Formation continue',
            description: 'Perfectionnement en troubles neurocognitifs',
            icon: GraduationCap,
            bg: 'bg-granby-bg-violet',
            fg: 'text-granby-violet'
        },
        {
            title: 'Gestion Humaine',
            description: 'Environnement de travail positif et collaboratif',
            icon: Users,
            bg: 'bg-granby-bg-blue',
            fg: 'text-granby-blue'
        },
        {
            title: 'Avantages sociaux compétitifs',
            description: 'Cadeaux, repas gratuits et pauses rémunérées',
            icon: Shield,
            bg: 'bg-granby-bg-violet',
            fg: 'text-granby-violet'
        }
    ];

    const positions = [
        {
            id: 1,
            title: "Infirmier(ère) auxiliaire",
            type: "Temps plein",
            department: "Soins infirmiers",
            description:
                "Nous recherchons un(e) infirmier(ère) auxiliaire passionné(e) pour rejoindre notre équipe de soins spécialisés en troubles neurocognitifs.",
            requirements: [
                "Diplôme d'infirmier(ère) auxiliaire",
                "Permis de pratique valide",
                "Expérience en gériatrie (atout)",
                "Formation en troubles neurocognitifs (atout)",
                "Excellentes compétences relationnelles"
            ],
            responsibilities: [
                "Administration de médicaments",
                "Surveillance de l'état de santé des résidents",
                "Assistance aux activités de la vie quotidienne",
                "Documentation des soins prodigués",
                "Collaboration avec l'équipe multidisciplinaire"
            ]
        },
        {
            id: 2,
            title: "Préposé(e) aux bénéficiaires",
            type: "Temps plein / Temps partiel",
            department: "Soins directs",
            description:
                "Rejoignez notre équipe dédiée au bien-être quotidien des résidents dans un environnement respectueux et bienveillant.",
            requirements: [
                "Certificat de préposé aux bénéficiaires",
                "Formation RCR à jour",
                "Patience et empathie",
                "Capacité de travailler en équipe",
                "Flexibilité d'horaire"
            ],
            responsibilities: [
                "Aide aux soins d'hygiène et d'habillage",
                "Assistance aux repas",
                "Accompagnement dans les déplacements",
                "Animation d'activités simples",
                "Surveillance de sécurité"
            ]
        },
        {
            id: 3,
            title: "Coordinateur(trice) des activités",
            type: "Temps plein",
            department: "Services récréatifs",
            description:
                "Créez et animez des programmes d'activités adaptés aux résidents avec troubles neurocognitifs pour maintenir leur qualité de vie.",
            requirements: [
                "Formation en loisirs thérapeutiques ou équivalent",
                "Expérience en animation pour personnes âgées",
                "Créativité et dynamisme",
                "Connaissance des troubles neurocognitifs",
                "Permis de conduire valide"
            ],
            responsibilities: [
                "Planification d'activités adaptées",
                "Animation de groupes",
                "Évaluation des besoins récréatifs",
                "Coordination avec les familles",
                "Gestion du matériel d'activités"
            ]
        },
        {
            id: 4,
            title: "Travailleur(se) social(e)",
            type: "Temps partiel",
            department: "Services psychosociaux",
            description:
                "Accompagnez les résidents et leurs familles dans leur adaptation à la vie en résidence avec empathie et professionnalisme.",
            requirements: [
                "Baccalauréat en travail social",
                "Membre de l'OTSTCFQ",
                "Expérience en gérontologie",
                "Excellente écoute active",
                "Bilinguisme (français/anglais)"
            ],
            responsibilities: [
                "Évaluation psychosociale des résidents",
                "Soutien aux familles",
                "Intervention de crise",
                "Planification de congé",
                "Liaison avec services externes"
            ]
        }
    ];

    const companyValues = [
        { title: 'Compassion', description: 'Nous traitons chaque résident comme un membre de notre famille', icon: Heart },
        { title: 'Excellence', description: 'Nous visons constamment l’amélioration de nos soins et services', icon: Award },
        { title: 'Respect', description: 'La dignité de chaque personne guide nos actions quotidiennes', icon: Users }
    ];

    return (
        <div className="font-sans text-gray-900">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `
      linear-gradient(135deg, rgba(166, 204, 230, 0.9), rgba(186, 174, 217, 0.9)),
      url('/fonts/Background2.png')
    `,
                    }}
                    aria-hidden="true"
                />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-6xl font-athelas font-bold text-white mb-6">
                            Carrières
                        </h1>
                        <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                            Ensemble, créons un
                            environnement de soins exceptionnel.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-athelas font-bold mb-6">
                            Pourquoi travailler avec nous&nbsp;?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Découvrez un environnement de travail enrichissant où votre passion peut s’épanouir.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className={`w-16 h-16 ${b.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={32} className={b.fg} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {b.title}
                                    </h3>
                                    <p className="text-gray-600">{b.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-granby-bg-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-athelas font-bold mb-6">
                            Nos valeurs
                        </h2>
                        <p className="text-lg text-gray-600">
                            Les principes qui guident notre mission au quotidien.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {companyValues.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="bg-white rounded-2xl p-8 shadow-granby hover:shadow-granby-lg transition-all duration-300 text-center"
                                >
                                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-granby-bg-blue">
                                        <Icon size={32} className="text-granby-blue-light" />
                                    </div>

                                    <h3 className="text-2xl font-athelas font-bold text-gray-900 mb-3">
                                        {v.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{v.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open positions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-athelas font-bold mb-6">
                            Postes
                        </h2>
                        <p className="text-xl text-gray-600">
                            Explorez nos opportunités et trouvez le poste qui vous correspond.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {positions.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-white rounded-2xl shadow-granby hover:shadow-granby-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <h3 className="text-2xl font-athelas font-bold text-gray-900">
                                                    {p.title}
                                                </h3>
                                                <span className="bg-granby-blue/20 text-granby-blue px-3 py-1 rounded-full text-sm font-medium">
                                                    {p.type}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-600">
                                                <div className="flex items-center space-x-2">
                                                    <Stethoscope size={16} />
                                                    <span>{p.department}</span>
                                                </div>

                                                <div className="flex items-center space-x-2">
                                                    <MapPin size={16} />
                                                    <span>Granby, QC</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setSelectedJob(selectedJob === p.id ? null : p.id)}
                                            className="mt-4 lg:mt-0 bg-granby-blue- text-white px-6 py-3 rounded-lg hover:shadow-granby transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        >
                                            {selectedJob === p.id ? 'Masquer détails' : 'Voir détails'}
                                        </button>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-6">{p.description}</p>

                                    {selectedJob === p.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="border-t border-gray-200 pt-6"
                                        >
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Exigences</h4>
                                                    <ul className="space-y-2">
                                                        {p.requirements.map((req, idx) => (
                                                            <li key={idx} className="flex items-start space-x-2">
                                                                <CheckCircle className="text-granby-blue mt-1 flex-shrink-0" size={16} />
                                                                <span className="text-gray-700">{req}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsabilités</h4>
                                                    <ul className="space-y-2">
                                                        {p.responsibilities.map((resp, idx) => (
                                                            <li key={idx} className="flex items-start space-x-2">
                                                                <CheckCircle className="text-granby-violet mt-1 flex-shrink-0" size={16} />
                                                                <span className="text-gray-700">{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-20 bg-gradient-granby-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-granby-lg overflow-hidden"
                    >
                        <div className="bg-granby-violet p-8 text-white">
                            <h2 className="text-3xl font-athelas font-bold mb-2">Postulez maintenant</h2>
                            <p className="text-white/90">
                                Envoyez-nous votre candidature et rejoignez notre équipe dévouée au bien-être des personnes âgées.
                            </p>
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 text-center"
                            >
                                <CheckCircle className="text-granby-blue mx-auto mb-4" size={48} />
                                <h3 className="text-2xl font-athelas font-bold text-gray-900 mb-2">Candidature envoyée !</h3>
                                <p className="text-gray-600">Nous examinerons votre dossier et vous contacterons rapidement.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Poste visé *</label>
                                    <select
                                        name="position"
                                        required
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                    >
                                        <option value="">Sélectionnez un poste</option>
                                        {positions.map((pos) => (
                                            <option key={pos.id} value={pos.title}>{pos.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Années d’expérience</label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        >
                                            <option value="">Sélectionnez</option>
                                            <option value="0-1">0–1 an</option>
                                            <option value="2-5">2–5 ans</option>
                                            <option value="6-10">6–10 ans</option>
                                            <option value="10+">Plus de 10 ans</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Disponibilité</label>
                                        <select
                                            name="availability"
                                            value={formData.availability}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        >
                                            <option value="">Sélectionnez</option>
                                            <option value="immediat">Immédiatement</option>
                                            <option value="2semaines">Dans 2 semaines</option>
                                            <option value="1mois">Dans 1 mois</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Joindre un CV */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Joindre un CV (PDF, DOC, DOCX)
                                    </label>

                                    <input
                                        type="file"
                                        id="resume"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />

                                    <label
                                        htmlFor="resume"
                                        className="inline-flex items-center justify-center px-6 py-3 
               bg-granby-violet text-white font-medium rounded-lg 
               cursor-pointer hover:brightness-95 transition"
                                    >
                                        Choisir un fichier
                                    </label>

                                    {formData.resume && (
                                        <p className="mt-2 text-sm text-gray-600">
                                            Fichier sélectionné : <span className="font-medium">{formData.resume.name}</span>
                                        </p>
                                    )}
                                </div>



                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Lettre de motivation</label>
                                    <textarea
                                        name="coverLetter"
                                        rows={4}
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        placeholder="Expliquez-nous pourquoi vous souhaitez rejoindre notre équipe…"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full !bg-none bg-granby-violet text-white font-semibold py-4 px-6 rounded-lg hover:brightness-95 transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-violet"
                                >
                                    <Send size={20} />
                                    Envoyer ma candidature
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    Nous examinerons votre candidature avec attention et vous contacterons sous 48 heures.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
