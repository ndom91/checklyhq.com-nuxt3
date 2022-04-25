import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  vite: {
    plugins: [svgLoader()],
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
