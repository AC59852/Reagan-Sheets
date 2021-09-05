export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'reagan-sheets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload:true,
    
    families: {
      'Noto+Sans': [300, 400, 700, 900],
      'Open+Sans': [400, 500, 600, 700, 800],
      'Roboto': [100,200,300,400,500,600,700,800,900],
      'Lato': [100,200,300,400,500,600,700,800,900],
      'Poppins': [100,200,300,400,500,600,700,800,900],
      'Montserrat': [100,200,300,400,500,600,700,800,900],
      'Spartan': [100,200,300,400,500,600,700,800,900],
      'Rubik': [100,200,300,400,500,600,700,800,900],
      'Heebo': [100,200,300,400,500,600,700,800,900],
    }
  },

  env: {
    previewLayer0DevtoolsEnabled: false
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://prismic-nuxt.js.org/
    "@nuxtjs/prismic",
    "@layer0/nuxt/module"
  ],

  prismic: {
    endpoint: "https://videogame-news.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    preview: false
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      fileName: 'icon.png'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
