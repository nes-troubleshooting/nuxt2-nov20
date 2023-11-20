import colors from 'vuetify/es5/util/colors'
import X0 from '@nuxt/friendly-errors-webpack-plugin'
// import X1 from "@babel/eslint-parser"
// import X2 from "@babel/plugin-proposal-async-generator-functions"
// import X3 from "@babel/plugin-proposal-dynamic-import"
// import X4 from "@babel/plugin-proposal-export-namespace-from"
// import X5 from "@babel/plugin-proposal-json-strings"
// import X6 from "@babel/plugin-proposal-logical-assignment-operators"
// import X7 from "@babel/plugin-proposal-numeric-separator"
// import X8 from "@babel/plugin-proposal-object-rest-spread"
// import X9 from "@babel/plugin-proposal-optional-catch-binding"
// import X10 from "@babel/plugin-proposal-unicode-property-regex"
// import X11 from "@babel/preset-env"
// import X12 from "@babel/preset-modules"

export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - a1',
    title: 'a1',
    htmlAttrs: {
      lang: 'en'
    },
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
    '~/assets/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-store-plugin.js', ssr: true },
    '~/plugins/bootstrap-vue-plugin'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
    babel: {
      babelrc: true
    },
    optimization: {
      splitChunks: {
        // Do not provide boolean values, set proper configuration
        cacheGroups: {
          default: false,
          vendors: false,
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
        // Do not provide a boolean, but an object or remove the property
      },
      runtimeChunk: false // Correctly set as boolean
    },
    filenames: {
      app: '[name].js',
      chunk: '[name].js'
    },
    extractCSS: false,
    // Extend the webpack config here
    extend (config, { _isDev, isClient }) {
      config.plugins = config.plugins || []
      // config.plugins.push(new FriendlyErrorsWebpackPlugin())

      ;[
        new X0()
        // new X1(),
        // X2({}),
        // new X3(),
        // new X4(),
        // new X5(),
        // new X6(),
        // new X7(),
        // new X8(),
        // new X9(),
        // new X10(),
      ].forEach(s => config.plugins.push(s))

      if (isClient) {
        // Override the default entry
        config.entry = {
          app: '.nuxt/client.js' // Replace with actual path to entry file
        }

        // Attempt to disable all chunk splitting; might not be entirely effective
        config.optimization.splitChunks = {
          cacheGroups: {
            default: false,
            vendors: false,
            styles: false,
            commons: false
          }
        }

        config.optimization.runtimeChunk = false
      }
    }
  }
}
