<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <v-card>
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div v-for="(todo, index) in todos" :key="index" class="todo-item-row">
        <v-checkbox
          :input-value="todo.done"
          :class="{ done: todo.done }"
          :label="todo.text"
          @change="toggle(todo)"
        />
      </div>
      <!-- if not using bootstrap -->
      <div v-if="!useBootstrap" class="todo-text-row">
        <v-text-field
          v-model="text"
          label="What needs to be done?"
          hide-details="auto"
          @keyup.enter="addTodo"
        />
        <b-form-input
          v-if="useBootstrap"
          v-model="text"
          placeholder="What needs to be done?"
          @keyup.enter="addTodo"
        />
      </div>
      <!-- if using bootstrap -->
      <div v-if="useBootstrap" class="todo-text-row">
        <b-form-input
          v-model="text"
          placeholder="What needs to be done?"
          @keyup.enter="addTodo"
        />
      </div>
      <div class="spacer">
        &nbsp;
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'TODOsStore',
  props: {
    store: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: 'Nuxt Todos'
    },
    useBootstrap: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      text: ''
    }
  },
  computed: {
    todos () {
      return this.store.state.todos.list
    }
  },
  methods: {
    addTodo () {
      if (this.text) {
        this.store.commit('todos/add', this.text)
        this.text = ''
      }
    },
    toggle (todo) {
      this.store.commit('todos/toggle', todo)
    }
  }
}
</script>
