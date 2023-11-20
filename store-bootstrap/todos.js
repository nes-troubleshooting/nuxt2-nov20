import Vue from 'vue'

class BSTodosStore {
  constructor () {
    this.state = new Vue({
      data: {
        todos: {
          list: []
        }
      }
    })
  }

  commit (path, payload) {
    const method = path.split('/').pop()
    this[method](payload)
  }

  add (todoText) {
    this.state.todos.list.push({
      text: todoText,
      done: false
    })
  }

  toggle (todo) {
    const i = this.state.todos.list.map(t => t.text).indexOf(todo.text)
    this.state.todos.list[i].done = !this.state.todos.list[i].done
  }
}

const todos = new BSTodosStore()

export default todos
