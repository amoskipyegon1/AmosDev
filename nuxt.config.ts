import { defineNuxtConfig } from 'nuxt'
import presetIcons from '@unocss/preset-icons';

export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss', '@unocss/nuxt'],
    unocss: {
        icons: true,
        presets: [presetIcons({})],
    }

})