import colors from 'vuetify/es5/util/colors'
import FriendlyErrorsWebpackPlugin from '@nuxt/friendly-errors-webpack-plugin'

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
  css: [
    '~/assets/app.scss'
  ],
  plugins: [
    { src: '~/plugins/vuex-store-plugin.js', ssr: true },
    '~/plugins/bootstrap-vue-plugin'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  modules: [
  ],
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
      // console.log(JSON.stringify(config, null, 2))
      config.plugins = config.plugins || []
      config.plugins.push(new FriendlyErrorsWebpackPlugin())

      if (config.module && config.module.rules) {
        // customize configs for the javascript/auto babel rules
        config
          .module.rules
          .filter(r => r.type && r.type === 'javascript/auto' && r.use)
          .forEach((rule) => {
            const loaders = rule.use.filter(x => x.loader && x.loader.includes('node_modules/babel-loader'))

            loaders
              .filter(l => !!l.options)
              .forEach((loader) => {
                loader.options.plugins = loader.options.plugins || []
                ;[
                  '@babel/plugin-proposal-async-generator-functions',
                  '@babel/plugin-proposal-export-namespace-from',
                  '@babel/plugin-proposal-json-strings',
                  '@babel/plugin-proposal-logical-assignment-operators',
                  '@babel/plugin-proposal-numeric-separator',
                  '@babel/plugin-proposal-object-rest-spread',
                  '@babel/plugin-proposal-optional-catch-binding',
                  '@babel/plugin-proposal-unicode-property-regex',
                  '@babel/plugin-transform-optional-chaining'
                  // The following are suspects:
                  // '@babel/plugin-proposal-dynamic-import',
                  // '@babel/plugin-transform-modules-commonjs'
                  // '@babel/plugin-transform-modules-umd'
                  // '@babel/plugin-transform-modules-amd'
                ].forEach(p => loader.options.plugins.push(p))
              })
          })
      }

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
