<template>
  <b-row align-v="center" align-h="center">
    <b-col class="left-btn">
      <NavButton button="back" to="/bootstrap" />
    </b-col>

    <b-col cols="12" sm="8" md="6">
      <TodosStore :store="store" :title="title" />
    </b-col>
    <b-col class="right-btn">
      <NavButton button="next" to="/vuex" />
    </b-col>
  </b-row>
</template>

<script>
import NavButton from '~/components/NavButton.vue'
import TodosStore from '~/components/TodosStore.vue'

export default {
  name: 'IndexPage',
  components: { TodosStore, NavButton },
  data () {
    return {
      store: this.$store,
      title: 'Nuxt Todos'
    }
  }
}
</script>
