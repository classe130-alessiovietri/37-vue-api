<script>

export default {
  data() {
    return {
    }
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
          <div>
            <img :src="character.image" :alt="character.name" class="w-100 rounded-circle">
          </div>

          <h3>
            {{ character.name }}
          </h3>

          <h6>
            {{ character.status }}
          </h6>
          <h5>
            {{ character.species }}
          </h5>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>
