/**
 * This is the default Nuxt store impl... ~/store
 */

export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  toggle (_state, todo) {
    todo.done = !todo.done
  }
}
