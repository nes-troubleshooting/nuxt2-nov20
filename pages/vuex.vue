<template>
  <b-row align-v="center" align-h="center">
    <b-col class="left-btn">
      <NavButton button="back" to="/" />
    </b-col>

    <b-col cols="12" sm="8" md="6">
      <TodosStore :store="store" :title="title" />
    </b-col>
    <b-col class="right-btn">
      <NavButton button="next" to="/bootstrap" />
    </b-col>
  </b-row>
</template>

<script>
import NavButton from '~/components/NavButton.vue'
import TodosStore from '~/components/TodosStore.vue'

export default {
  name: 'VueX',
  components: { NavButton, TodosStore },
  data () {
    return {
      store: this.$vuexStore,
      title: 'Vuex Todos'
    }
  }
}
</script>
