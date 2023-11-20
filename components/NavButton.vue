<template>
  <v-btn
    class="back-or-next-button"
    variant="plain"
    nuxt
    :to="to"
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'NavButton',
  props: {
    button: {
      type: String,
      default: 'back'
    },
    to: {
      type: String,
      default: '/'
    }
  },
  setup: (props) => {
    return {
      icon: props.button === 'next' ? 'mdi-chevron-right' : 'mdi-chevron-left'
    }
  }
}
</script>
<style>
.back-or-next-button {
  min-height: 4.5em;
  border-radius: 5em 5em 5em 5em;
  background-color: #1976d2 !important;
  color: white !important;
}
</style>
