/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'granby-blue': '#A6CCE6',
        'granby-violet': '#BAAED9',
        'granby-white': '#FFFFFF',

        'granby-blue-dark': '#2A7FA8',        // stroke SVG / CTA
        'granby-blue-light': '#84B8D9',       // icônes & accents
        'granby-violet-light': '#B7A5D7',     // icônes & accents
        'granby-bg-blue': '#F1F8FC',          // fond icône bleu / cards
        'granby-bg-violet': '#F8F5FC',        // fond icône violet / cards
      },
      fontFamily: {
        // Si tu utilises @fontsource :
        // Inter: via import dans index.js (voir étape 6)
        // Sinon, elles seront fallback si non chargées
        sans: ['Inter', 'system-ui', 'sans-serif'],
        athelas: ['Athelas', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'gradient-granby':
          'linear-gradient(135deg, #A6CCE6 0%, #BAAED9 100%)',
        'gradient-granby-light':
          'linear-gradient(135deg, rgba(166, 204, 230, 0.1) 0%, rgba(186, 174, 217, 0.1) 100%)',
      },
      boxShadow: {
        'granby': '0 4px 20px rgba(166, 204, 230, 0.3)',
        'granby-lg': '0 8px 40px rgba(166, 204, 230, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
