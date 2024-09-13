<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
      message: 'Rick & Morty App',
      availableStatuses: [
        {
          label: 'Alive',
          value: 'alive'
        },
        {
          label: 'Dead',
          value: 'dead'
        },
        {
          label: 'Unknown',
          value: 'unknown'
        },
      ],
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

          <form class="w-100 d-flex justify-content-center align-items-center mt-4"  @submit.prevent="performSearch()">
            <input v-model="searchText" type="text" class="form-control w-25" placeholder="Search character">
            <select v-model="searchStatus" class="form-control w-25 mx-2">
              <option value="">Select status</option>
              <option v-for="(status, i) in availableStatuses" :key="i" :value="status.value">{{ status.label }}</option>
            </select>
            <button type="submit" class="btn btn-primary me-2">
              Search
            </button>
            <button type="reset" class="btn btn-warning">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
</style>
