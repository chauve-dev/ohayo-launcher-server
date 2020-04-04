const fs = require('fs')
const path = require('path')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#00d1b2',
    error: '#f14668',
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/axios-accessor'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },

  /*
   ** Typescript module configuration
   ** See https://typescript.nuxtjs.org
   */
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },

  /*
   ** Server middleware configuration
   ** See https://nuxtjs.org/api/configuration-servermiddleware
   */
  serverMiddleware: ['~/api/index.ts'],

  /*
   ** Router configuration
   ** See https://nuxtjs.org/guide/routing
   */
  router: {
    middleware: ['installed', 'auth'],
  },

  /*
   ** I18N configuration
   ** See https://nuxt-community.github.io/nuxt-i18n
   */
  i18n: {
    locales: () => {
      return fs
        .readFileSync(path.resolve(__dirname, './assets/lang'))
        .filter((file) => /^[^.]+(.json)$/.test(file))
    },
    defaultLocale: 'en',
    vueI18nLoader: false,
    lazy: true,
    langDir: '~/assets/lang',
    seo: true,
  },
}
