<template>
  <v-app dark toolbar>
    <v-toolbar class="indigo" dark fixed>
      <v-spacer></v-spacer>
      <v-toolbar-title>Block Chain</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-snackbar class="white" top right v-model="searchbox" :timeout="0">
        <form method="get" v-on:submit.prevent="searchBook">
          <v-text-field prepend-icon="search" label="Search book..." hide-details single-line autofocus v-model="query"></v-text-field>
        </form>
        <v-btn icon class="darken-12 grey--text" @click.native.stop="searchbox = !searchbox">
          <v-icon>close</v-icon>
        </v-btn>
      </v-snackbar>
    </v-toolbar>
    <main>
      <v-container fluid>
        <transition name="slide-fade" mode="out-in">
          <router-view :key="routerKey"></router-view>
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  require('vuetify/dist/vuetify.min.css');

  export default {
    name: 'app',
    data() {
      return {
        query: '',
        number: 0,
        permanent: true,
        temporary: false,
        mini: true,
        more: false,
        pages: [
          { name: 'Home', target: 'Hello', icon: 'home', fa: false, mobile: true, external: false },
        ],
        searchbox: false,
      };
    },
    created() {
    },
    watch: {
    },
    computed: {
    },
    methods: {
    },
  };
</script>

<style>
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
