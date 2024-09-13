<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
      message: 'Rick & Morty App',
      searchText: '',
      searchStatus: '',
    }
  },
  methods: {
    performSearch() {
      /* 
      
        SE ho searchText oppure searchStatus
          aggiungo sicuramente il ?

          SE ho searchText
            agigungo il parametro name

          Se ho searchStatus
            SE ho searchText
              agigungo la &
            aggiungo il parametro status
      
      */

      // let params = '';
      // if (this.searchText != '') {
      //   params += 'name=' + this.searchText + '&';
      // }

      // if (this.searchStatus != '') {
      //   params += 'status=' + this.searchStatus;
      // }

      axios
        // .get('https://rickandmortyapi.com/api/character?' + params)
        .get('https://rickandmortyapi.com/api/character', {
          params: {
            name: this.searchText,
            status: this.searchStatus
          }
        })
        .then((res) => {
          console.log('OGGETTO CREATO DA AXIOS:', res);
          console.log('DATI CHE CI HA RISPOSTO IL SERVER:', res.data);
          console.log('TUTTI I PERSONAGGI:', res.data.results);

          this.store.allCharacters = res.data.results;
        })
        .catch((err) => {
          this.store.allCharacters = [];
        });
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col text-center py-4">
          <h1>
            {{ message }}
          </h1>

          <div class="d-flex justify-content-center align-items-center mt-4">
            <input v-model="searchText" type="text" class="form-control w-25" placeholder="Search character">
            <select v-model="searchStatus" class="form-control w-25 mx-2">
              <option value="">Select status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
            <button @click="performSearch()" class="btn btn-primary me-2">
              Search
            </button>
            <button class="btn btn-warning">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
</style>
