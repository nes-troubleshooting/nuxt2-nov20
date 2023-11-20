// plugins/store-plugin.js
import vuexStore from '~/store-vuex/todos'

export default ({ app }, inject) => {
  app.vuexStore = vuexStore
  inject('vuexStore', app.vuexStore)
}
