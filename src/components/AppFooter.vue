<script>
import { store } from '../store.js';

export default {
  data() {
    return { 
      store,
      count: 0,
      firstName: 'Alessio',
      lastName: 'Vietri',
    }
  },
  methods: {
    // getAliveNumber() {
    //   console.log('ALIVE METHOD');

    //   const aliveNumber = this.store.allCharacters.filter((character) => {
    //         return character.status.toLowerCase() == 'alive';
    //       }).length;

    //   return aliveNumber;
    // },
    // getDeadNumber() {
    //   console.log('DEAD METHOD');

    //   const deadNumber = this.store.allCharacters.filter((character) => {
    //         return character.status.toLowerCase() == 'dead';
    //       }).length;

    //   return deadNumber;
    // },
    // getUnknownNumber() {
    //   console.log('UNKNOWN METHOD');

    //   const unknownNumber = this.store.allCharacters.filter((character) => {
    //         return character.status.toLowerCase() == 'unknown';
    //       }).length;

    //   return unknownNumber;
    // },
    uselessFunction() {
      this.count++;
      return 3;
    }
  },
  computed: {
    fullName() {
      console.log('fullName COMPUTED');

      return this.firstName + ' ' + this.lastName;
    },
    aliveNumber() {
      console.log('ALIVE COMPUTED');

      const num = this.store.allCharacters.filter((character) => {
            return character.status.toLowerCase() == 'alive';
          }).length;

      return num;
    },
    deadNumber() {
      console.log('DEAD COMPUTED');

      const num = this.store.allCharacters.filter((character) => {
            return character.status.toLowerCase() == 'dead';
          }).length;

      return num;
    },
    unknownNumber() {
      console.log('UNKNOWN COMPUTED');

      const num = this.store.allCharacters.filter((character) => {
            return character.status.toLowerCase() == 'unknown';
          }).length;

      return num;
    },
  }
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col text-center py-3">
          Found {{ store.allCharacters.length }} characters
        </div>
      </div>

      <div>
        <div>
          {{ fullName }}
        </div>

        <div>
          <input type="text" v-model="firstName">
        </div>
      </div>

      <div>
        <div>
          COUNT: {{ count }}
        </div>
        <div>
          <button @click="count++">
            CLICK
          </button>
          <button @click="uselessFunction()">
            ALTRO CLICK
          </button>
        </div>
      </div>

      <div class="row py-3">
        <div class="col-12 col-sm-4 text-center">
          Found {{ aliveNumber }} characters ALIVE
        </div>
        <div class="col-12 col-sm-4 text-center">
          Found {{ deadNumber }} characters DEAD
        </div>
        <div class="col-12 col-sm-4 text-center">
          Found {{ unknownNumber }} characters UNKNOWN
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
</style>
