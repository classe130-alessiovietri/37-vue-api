<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
  data() {
    return { 
      // store: store,
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  created() {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) => {
        console.log('OGGETTO CREATO DA AXIOS:', res);
        console.log('DATI CHE CI HA RISPOSTO IL SERVER:', res.data);
        console.log('TUTTI I PERSONAGGI:', res.data.results);

        this.store.allCharacters = res.data.results;
      });
  }
}
</script>

<template>
  <AppHeader />

  <AppMain />

  <AppFooter />
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
