<script>
import SingleCharacter from './SingleCharacter.vue';

export default {
  components: {
    SingleCharacter
  },
  props: {
    characters: Array
  }
}
</script>

<template>
  <main>
    <div class="container py-5">
      <div class="row">
        <div v-for="(character, i) in characters" :key="i" class="col-12 col-sm-6 col-md-3 mb-4">
          <SingleCharacter :character="character" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>
