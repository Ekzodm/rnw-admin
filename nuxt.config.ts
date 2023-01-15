export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1', 
      title: 'RnW Admin Panel',
      meta: [
        { name: 'description', content: 'RnW Admin Panel' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        // { rel: 'apply-touch-icon', sizes: '180x180', href: '/apply-touch-icon.png' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32',  href: '/favicon-32x32.png' },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'manifest', href: '/site.webmanifest' },
        // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  css: ["@/assets/sass/main.sass"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
            additionalData: '@import "@/assets/sass/helpers.sass"',
        }
      }
    }
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt']
})