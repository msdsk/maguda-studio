// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/mdc',
    '@nuxt/content',
    '@nuxt/image',
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
  },
  mdc: {
    headings: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false
      }
    }
  }
})
