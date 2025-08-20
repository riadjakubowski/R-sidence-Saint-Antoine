import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Heart,
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle,
} from 'lucide-react';

/* ========================================================================== */
/*                               CHECK ÉPAIS (SVG)                            */
/* ========================================================================== */
const ThickCheck = ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
        <path
            d="M3 13l5.5 5.5L21 6"
            fill="none"
            className="stroke-granby-blue-dark"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/* ========================================================================== */
/*                    CASE CARRÉE (RADIO/CHECKBOX) STYLISÉE                   */
/* ========================================================================== */
const SquareCheck = ({
    name,
    value,
    checked,
    onChange,
    children,
    required = false,
    type = 'radio',
}) => (
    <label className="flex items-center space-x-3 cursor-pointer select-none">
        <input
            type={type}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            required={required}
            className="sr-only peer"
        />
        <span
            className="w-6 h-6 border-2 border-granby-blue-light rounded-sm flex items-center justify-center
                 transition-colors duration-200 peer-checked:bg-[#E6F2F9] peer-checked:border-granby-blue-light"
            aria-hidden="true"
        >
            <ThickCheck className="w-5 h-5 opacity-0 peer-checked:opacity-100 text-granby-blue-dark transition-opacity duration-200 pointer-events-none" />
        </span>
        <span className="text-base text-gray-800">{children}</span>
    </label>
);

const SquareYesNo = ({ name, state, onChange, required = false }) => (
    <div className="flex items-center space-x-10">
        {['Non', 'Oui'].map((v) => (
            <SquareCheck
                key={v}
                name={name}
                value={v}
                required={required}
                checked={state === v}
                onChange={onChange}
            >
                {v}
            </SquareCheck>
        ))}
    </div>
);

/* ========================================================================== */
/*                             COMPOSANT PRINCIPAL                            */
/* ========================================================================== */
const Admission = () => {
    const [formData, setFormData] = useState({
        residentLastName: '',
        residentFirstName: '',
        residentDob: '',
        moveInDelay: '',
        contactLastName: '',
        contactFirstName: '',
        contactPhone: '',
        contactEmail: '',
        mobilityAid: '',
        neuro: '',
        neuroDetails: '',
        pets: '',
        allergies: '',
        dependencies: {
            smoking: '',
            alcohol: '',
            other: '',
            otherDetails: '',
        },
        avq: {},
        comments: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (name.startsWith('dep_')) {
            const depKey = name.replace('dep_', '');
            setFormData((prev) => ({
                ...prev,
                dependencies: { ...prev.dependencies, [depKey]: value },
            }));
            return;
        }

        if (name.startsWith('avq_')) {
            const key = name.replace('avq_', '');
            setFormData((prev) => ({
                ...prev,
                avq: { ...prev.avq, [key]: value },
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? e.target.checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    // Cartes d'infos contact
    const contactInfo = [
        {
            icon: Phone,
            title: 'Téléphone',
            details: '(450) 378-6374',
            description: 'Disponible 24 h / 7',
            textClass: 'text-granby-blue-light',
            bgClass: 'bg-granby-bg-blue',
            href: 'tel:14503786374',
            aria: 'Appeler la résidence',
        },
        {
            icon: Mail,
            title: 'Email',
            details: 'info@residencegranby.ca',
            description: 'Réponse sous 48 h',
            textClass: 'text-granby-violet-light',
            bgClass: 'bg-granby-bg-violet',
            href: 'mailto:info@residencegranby.ca',
            aria: 'Écrire un courriel à la résidence',
        },
        {
            icon: MapPin,
            title: 'Adresse',
            details: '110 Rue Saint-Antoine S, Granby',
            description: 'Stationnement gratuit',
            textClass: 'text-granby-blue-light',
            bgClass: 'bg-granby-bg-blue',
            href: null,
            aria: null,
        },
        {
            icon: Clock,
            title: 'Heures de visite',
            details: '7 jours / 7 – 9 h → 17 h',
            description: 'Sur rendez-vous',
            textClass: 'text-granby-violet-light',
            bgClass: 'bg-granby-bg-violet',
            href: null,
            aria: null,
        },
    ];

    const mobilityOptions = [
        'Se déplace seul(e)',
        'Canne',
        'Manchette',
        'Déambulateur',
        'Fauteuil roulant',
    ];

    const avqItems = [
        'Toilette partielle matin/soir',
        'Prendre un bain',
        'Se nourrir',
        'Se vêtir',
        'Prendre / gérer les médicaments',
        'Continence',
    ];

    const moveInDelays = [
        'Immédiat – 2 sem.',
        '2 – 4 sem.',
        '1 – 2 mois',
        'Plus de 2 mois',
    ];

    return (
        <div className="font-sans text-[17px] text-gray-900">
            {/* HERO */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `
      linear-gradient(135deg, rgba(166, 204, 230, 0.9), rgba(186, 174, 217, 0.9)),
      url('/fonts/Background1.png')
    `,
                    }}
                    aria-hidden="true"
                />


                <div className="relative z-10 text-white text-center space-y-6 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl lg:text-6xl font-athelas font-bold"
                    >
                        Contact et Admission
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl max-w-3xl mx-auto text-white/90"
                    >
                        Débutez votre demande et notre équipe vous rappellera rapidement.
                    </motion.p>
                </div>
            </section>

            {/* INFOS DE CONTACT */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {contactInfo.map(({ icon: Icon, ...c }, i) => {
                        const Card = (
                            <div className="text-center space-y-2">
                                <div
                                    className={`w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 ${c.bgClass}`}
                                    aria-hidden="true"
                                >
                                    <Icon size={40} className={c.textClass} />
                                </div>
                                <h3 className="text-2xl font-athelas font-bold text-gray-900">{c.title}</h3>
                                <p className="font-semibold text-gray-800">{c.details}</p>
                                <p className="text-gray-600 text-base">{c.description}</p>
                            </div>
                        );

                        return (
                            <motion.div
                                key={c.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                {c.href ? (
                                    <a
                                        href={c.href}
                                        aria-label={c.aria || undefined}
                                        className="block rounded-2xl hover:shadow-granby-lg transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                    >
                                        {Card}
                                    </a>
                                ) : (
                                    <div className="rounded-2xl">{Card}</div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* FORMULAIRE */}
            <section className="py-24 bg-gradient-to-b from-granby-bg-blue/50 to-white">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-granby-lg p-6 sm:p-10 md:p-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-athelas font-bold text-center mb-10 md:mb-14"
                    >
                        Demande d’admission
                    </motion.h2>

                    {isSubmitted ? (
                        <div className="text-center py-20">
                            <CheckCircle size={80} className="text-granby-blue-light mx-auto mb-6" aria-hidden="true" />
                            <h3 className="text-3xl font-athelas font-bold mb-4">
                                Merci de nous considérer !
                            </h3>
                            <p className="max-w-xl mx-auto text-gray-800">
                                Un membre de l’équipe vous contactera dans les <strong>48 h</strong>.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-16">
                            {/* SECTION 1 • Informations personnelles */}
                            <div>
                                <h3 className="flex items-center text-2xl md:text-3xl font-athelas font-bold mb-8">
                                    <User className="mr-3 text-granby-blue-light" size={28} aria-hidden="true" />
                                    Informations personnelles
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { label: 'Nom *', name: 'residentLastName', placeholder: 'Nom de famille' },
                                        { label: 'Prénom *', name: 'residentFirstName', placeholder: 'Prénom' },
                                    ].map((f) => (
                                        <div key={f.name}>
                                            <label className="block text-base font-semibold text-gray-800 mb-2">
                                                {f.label}
                                            </label>
                                            <input
                                                type="text"
                                                name={f.name}
                                                required
                                                value={formData[f.name]}
                                                onChange={handleChange}
                                                placeholder={f.placeholder}
                                                className="w-full px-5 py-4 border border-gray-300 rounded-lg
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                            />
                                        </div>
                                    ))}

                                    <div>
                                        <label className="block text-base font-semibold text-gray-800 mb-2">
                                            Date de naissance *
                                        </label>
                                        <input
                                            type="date"
                                            name="residentDob"
                                            required
                                            value={formData.residentDob}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border border-gray-300 rounded-lg
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-base font-semibold text-gray-800 mb-2">
                                            Délais d’occupation souhaité *
                                        </label>
                                        <select
                                            name="moveInDelay"
                                            required
                                            value={formData.moveInDelay}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border border-gray-300 rounded-lg bg-white
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        >
                                            <option value="" disabled>— Sélectionnez —</option>
                                            {moveInDelays.map((d) => (
                                                <option key={d}>{d}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 2 • Personne responsable */}
                            <div>
                                <h3 className="flex items-center text-2xl md:text-3xl font-athelas font-bold mb-8">
                                    <Phone className="mr-3 text-granby-blue-light" size={28} aria-hidden="true" />
                                    Personne responsable
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { label: 'Nom *', name: 'contactLastName', placeholder: 'Nom' },
                                        { label: 'Prénom *', name: 'contactFirstName', placeholder: 'Prénom' },
                                        { label: 'Téléphone *', name: 'contactPhone', placeholder: '(450) 378-6374', type: 'tel' },
                                        { label: 'Courriel *', name: 'contactEmail', placeholder: 'contact@email.com', type: 'email' },
                                    ].map((f) => (
                                        <div key={f.name}>
                                            <label className="block text-base font-semibold text-gray-800 mb-2">
                                                {f.label}
                                            </label>
                                            <input
                                                type={f.type || 'text'}
                                                name={f.name}
                                                required
                                                value={formData[f.name]}
                                                onChange={handleChange}
                                                placeholder={f.placeholder}
                                                className="w-full px-5 py-4 border border-gray-300 rounded-lg
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SECTION 3 • Besoins de soins & dépendances */}
                            <div>
                                <h3 className="flex items-center text-2xl md:text-3xl font-athelas font-bold mb-8">
                                    <Heart className="mr-3 text-granby-blue-light" size={28} aria-hidden="true" />
                                    Besoins de soins et services
                                </h3>

                                {/* Mobilité */}
                                <div className="mb-12">
                                    <p className="font-semibold mb-4 text-lg text-gray-900">
                                        Déplacement physique *
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        {mobilityOptions.map((opt) => (
                                            <SquareCheck
                                                key={opt}
                                                name="mobilityAid"
                                                value={opt}
                                                required
                                                checked={formData.mobilityAid === opt}
                                                onChange={handleChange}
                                            >
                                                {opt}
                                            </SquareCheck>
                                        ))}
                                    </div>
                                </div>

                                {/* Troubles neurocognitifs */}
                                <div className="mb-12">
                                    <p className="font-semibold mb-4 text-lg text-gray-900">
                                        Diagnostic de troubles neurocognitifs ?
                                    </p>
                                    <SquareYesNo
                                        name="neuro"
                                        state={formData.neuro}
                                        onChange={handleChange}
                                        required
                                    />
                                    {formData.neuro === 'Oui' && (
                                        <input
                                            type="text"
                                            name="neuroDetails"
                                            value={formData.neuroDetails}
                                            onChange={handleChange}
                                            className="mt-4 w-full px-5 py-4 border border-gray-300 rounded-lg
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                            placeholder="Précisez le diagnostic"
                                        />
                                    )}
                                </div>

                                {/* Dépendances */}
                                <div className="mb-12">
                                    <p className="font-semibold mb-4 text-lg text-gray-900">Dépendances connues</p>

                                    {[
                                        ['smoking', 'Fumeur'],
                                        ['alcohol', 'Alcool'],
                                        ['other', 'Autres'],
                                    ].map(([k, lbl]) => (
                                        <div key={k} className="mb-6">
                                            <span className="mr-5 text-base text-gray-800">{lbl}</span>

                                            <SquareYesNo
                                                name={`dep_${k}`}
                                                state={formData.dependencies[k]}
                                                onChange={handleChange}
                                            />

                                            {k === 'other' && formData.dependencies.other === 'Oui' && (
                                                <input
                                                    type="text"
                                                    name="dep_otherDetails"
                                                    value={formData.dependencies.otherDetails}
                                                    onChange={(e) =>
                                                        setFormData((p) => ({
                                                            ...p,
                                                            dependencies: { ...p.dependencies, otherDetails: e.target.value },
                                                        }))
                                                    }
                                                    className="mt-3 w-full px-5 py-4 border border-gray-300 rounded-lg
                                     focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                                    placeholder="Précisez la dépendance"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* AVQ */}
                                <div className="mb-12">
                                    <p className="font-semibold mb-5 text-lg text-gray-900">
                                        Activités de vie quotidienne (Oui = aide nécessaire)
                                    </p>

                                    {avqItems.map((item) => (
                                        <div
                                            key={item}
                                            className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mb-4"
                                        >
                                            <span className="text-gray-800">{item}</span>

                                            {/* Non */}
                                            <SquareCheck
                                                name={`avq_${item}`}
                                                value="Non"
                                                checked={formData.avq[item] === 'Non'}
                                                onChange={handleChange}
                                            >
                                                Non
                                            </SquareCheck>

                                            {/* Oui */}
                                            <SquareCheck
                                                name={`avq_${item}`}
                                                value="Oui"
                                                checked={formData.avq[item] === 'Oui'}
                                                onChange={handleChange}
                                            >
                                                Oui
                                            </SquareCheck>
                                        </div>
                                    ))}
                                </div>

                                {/* Divers */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    {/* Animaux */}
                                    <div>
                                        <p className="font-semibold mb-2 text-lg text-gray-900">
                                            Animal de compagnie ?
                                        </p>
                                        <SquareYesNo
                                            name="pets"
                                            state={formData.pets}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Allergies */}
                                    <div>
                                        <label className="block font-semibold mb-2 text-lg text-gray-900">
                                            Allergies connues
                                        </label>
                                        <input
                                            type="text"
                                            name="allergies"
                                            value={formData.allergies}
                                            onChange={handleChange}
                                            placeholder="Aucune / Précisez"
                                            className="w-full px-5 py-4 border border-gray-300 rounded-lg
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light"
                                        />
                                    </div>
                                </div>

                                {/* Commentaires */}
                                <div>
                                    <label className="block font-semibold mb-2 text-lg text-gray-900">
                                        Demandes spéciales / Commentaires
                                    </label>
                                    <textarea
                                        name="comments"
                                        rows={5}
                                        value={formData.comments}
                                        onChange={handleChange}
                                        placeholder="Toute information pertinente"
                                        className="w-full px-5 py-4 border border-gray-300 rounded-lg
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-blue-light resize-none"
                                    />
                                </div>
                            </div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="w-full !bg-none bg-granby-blue text-white font-semibold
             py-5 px-6 rounded-lg flex items-center justify-center text-xl
             hover:brightness-95 transition-colors
             focus:outline-none focus-visible:ring-2 focus-visible:ring-granby-violet">
                                <Send className="mr-3" />
                                Envoyer la demande
                            </button>

                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Admission;

