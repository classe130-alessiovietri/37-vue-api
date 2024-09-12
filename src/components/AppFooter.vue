<script>
import { store } from '../store.js';

export default {
  data() {
    return { 
      store
    }
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
    </div>
  </footer>
</template>

<style lang="scss" scoped>
</style>
