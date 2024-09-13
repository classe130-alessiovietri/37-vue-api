<script>
import SingleCharacter from './SingleCharacter.vue';
import { store } from '../store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    SingleCharacter
  }
}
</script>

<template>
  <main>
    <div class="container py-5">
      <div class="row">
        <div v-for="(character, i) in store.allCharacters"
          :key="i"
          class="col-12 col-sm-6 col-md-3 mb-4">
          <SingleCharacter :character="character" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>
