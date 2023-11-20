import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bsStore from '~/store-bootstrap/todos'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default ({ app }, inject) => {
  app.bsStore = bsStore
  inject('bsStore', app.bsStore)
}
