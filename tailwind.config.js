/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'deep-color': '#1A237E',
            },
            transitionProperty: {
                length: 'height, width',
                spacing: 'margin, padding',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
