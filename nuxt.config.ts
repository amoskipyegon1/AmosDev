// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            charset: 'utf-16',
            title: 'Amos Dev',
            meta: [{ name: 'description', content: 'Trying to showcase my programming skills.' }],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
});
