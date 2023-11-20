<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      :absolute="true"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <div class="vuetify-logo">
        <VuetifyLogo />
      </div>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <div class="desc-title">
        [ Vuetify / Vuex / Nuxt / Bootstrap ]
      </div>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <b-container>
        <Nuxt />
      </b-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  name: 'DefaultLayout',
  components: { VuetifyLogo },
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-nuxt',
          title: 'Nuxt TODOs',
          to: '/'
        },
        {
          icon: 'mdi-vuejs',
          title: 'Vue TODOs',
          to: '/vuex'
        },
        {
          icon: 'mdi-bootstrap',
          title: 'Bootstrap TODOs',
          to: '/bootstrap'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vue 2 Essentials'
    }
  }
}
</script>
<style>
.desc-title {
  text-align: center;
  width: 65%;
}
.vuetify-logo {
  height: 3em !important;
  margin: 0 1em 0 .5em;
  padding: 0 0 0 0;
  width: 4em;
}
.vuetify-logo img {
  height: 100%;
  width: 2em;
}
.v-toolbar__title {
  text-transform: uppercase;
  font-weight: 700;
}
</style>
