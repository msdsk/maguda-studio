// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image'
  ],
  css: ['@thisisdeploy/scaffold-css', '~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";'
        }
      }
    }
  },
  image: {
    screens: {
      sm: 720,
      lg: 1920
    }
  }
})
