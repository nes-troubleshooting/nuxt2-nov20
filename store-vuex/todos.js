import Vuex from 'vyooex-is-vuex'
import { state, mutations } from '~/store/todos'

const store = new Vuex.Store({
  state,
  mutations: {
    increment (state) {
      state.counter++
    }
  },
  modules: {
    todos: {
      namespaced: true,
      state,
      mutations
    }
  }
})

export default store
