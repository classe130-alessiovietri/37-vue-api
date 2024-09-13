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
    }
  },
  methods: {
    performSearch() {
      this.$emit('performSearch');
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

          <form @submit.prevent="performSearch()" class="w-100 d-flex justify-content-center align-items-center mt-4">
            <input v-model="store.searchText" type="text" class="form-control w-25" placeholder="Search character">
            <select v-model="store.searchStatus" class="form-control w-25 mx-2">
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
