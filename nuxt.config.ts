// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
    modules: ['@nuxtjs/tailwindcss',"@nuxt/image-edge", 'nuxt-icon'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
})
