/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
    theme: {
        extend: {
            colors: {
                'deep-color': '#1A237E',
                'app-purple': '#29233f',
                'app-dark': '#171c23',
                'app-dark-blue': '#05192d',
                'app-gold': 'rgb(251 191 36)',
            },
            transitionProperty: {
                length: 'height, width',
                spacing: 'margin, padding',
            },
            backgroundSize: {
                100: '100% 100%',
            },
            fontFamily: {
                plexmono: ['IBMPlexMono', 'Inter', 'sans-serif'],
                freight: ['Freight Sans', 'Inter', 'sans-serif'],
            },
        },
    },
};
