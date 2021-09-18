export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Reagan Sheets',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `I'm Reagan Sheets, a quirky, modern, and relatable geek - that loves to write about anything ranging from anime to food. Check it out!` },
      { hid: 'og:type', name: 'og:type', content: 'blog' },
      { hid: 'og:title', name: 'og:title', content: 'Reagan Sheets' },
      { hid: 'og:description', name: 'og:description', content: `I'm Reagan Sheets, a quirky, modern, and relatable geek - that loves to write about anything ranging from anime to food. Check it out!` },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Reagan Sheets' },
      { hid: 'og:image', name: 'og:image', content: '/' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'Regan Sheets Logo' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Reagan Sheets' },
      { hid: 'twitter:description', name: 'twitter:description', content: `I'm Reagan Sheets, a quirky, modern, and relatable geek - that loves to write about anything ranging from anime to food. Check it out!` },
      { hid: 'twitter:image', name: 'twitter:image', content: '/' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Regan Sheets Logo' },
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
