# Nuxt 2 NES - Demo

A simple Nuxt 2 demo application, based off the Nuxt 2 starter code.




## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Nuxt Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## Additional Info

### Package Aliases

1. In `package.json`, you may notice, there is a package listed in `dependencies`, called `vyooex-is-vuex`. This is an alias for `npm:@neverendingsupport/vuex@4.1.1`. The only reason this is done in this manner is because `nuxt` ships with its own in-built version of `vuex`, and by including `vuex` in the `package.json`, we break nuxt's internal vuex references. By aliasing it in this manner, we avoid conflicts and can use both.
  - You will likely never need to do this; however, if you do, you may.

### Note About Dependencies in this repo

1. The dependencies in this repo are not all strictly required to run this project.
   - Should you wish to run this project with the bare mimimum needed for this project, use the following:
      ```
      // package.json
      {
        /*
         * other package.json contents here
         */
        "dependencies": {
          "bootstrap": "^5.3.2",
          "bootstrap-vue": "npm:@neverendingsupport/bootstrap-vue2@2.23.2",
          "core-js": "^3.25.3",
          "nuxt": "npm:@neverendingsupport/nuxt2@2.17.2",
          "vue": "npm:@neverendingsupport/vue2@2.7.17",
          "vue-server-renderer": "npm:@neverendingsupport/vue2@2.7.17-server-renderer",
          "vue-template-compiler": "npm:@neverendingsupport/vue2@2.7.17-template-compiler",
          "vuetify": "npm:@neverendingsupport/vuetify2@2.7.1",
          "vyooex-is-vuex": "npm:@neverendingsupport/vuex@4.1.1"
        },
        "overrides": {
          "bootstrap-vue": {".": "npm:@neverendingsupport/bootstrap-vue2@2.23.2" },
          "nuxt": { ".": "npm:@neverendingsupport/nuxt2@2.17.2" },
          "vue": { ".": "npm:@neverendingsupport/vue2@2.7.17" },
          "vue-server-renderer": { ".": "npm:@neverendingsupport/vue2@2.7.17-server-renderer" },
          "vue-template-compiler": { ".": "npm:@neverendingsupport/vue2@2.7.17-template-compiler" },
          "vuetify": { ".": "npm:@neverendingsupport/vuetify2@2.7.1" },
          "vyooex-is-vuex": { ".": "npm:@neverendingsupport/vuex@4.1.1" }
        },
        "devDependencies": {
          "@babel/eslint-parser": "^7.19.1",
          "@nuxt/types": "^2.17.2",
          "@nuxt/typescript-build": "^2.1.0",
          "@nuxtjs/eslint-config-typescript": "^11.0.0",
          "@nuxtjs/eslint-module": "^3.1.0",
          "@nuxtjs/vuetify": "^1.12.3",
          "@vue/test-utils": "^1.3.0",
          "babel-core": "7.0.0-bridge.0",
          "babel-jest": "^29.1.2",
          "eslint": "^8.24.0",
          "eslint-plugin-jest": "^27.0.4",
          "eslint-plugin-nuxt": "^4.0.0",
          "eslint-plugin-vue": "^9.5.1",
          "jest": "^29.1.2",
          "jest-environment-jsdom": "^29.1.2",
          "ts-jest": "^29.0.3",
          "vue-jest": "^3.0.4"
        }
      }
      ```

### Bundling NES packages

In this repository, the bundle build bundles all js into per-page files, orchestrated by an app.js

To build:
- npm run generate

To host:
- copy `dist` to your web server root directory, and browse to `/index.html` 

relevant configuration:
```
// nuxt.config.js
export default {
  /* ... */
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
```
