<script>
export default {
  data() {
    return { 
    }
  },
  props: {
    charactersNumber: Number
  }
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col text-center py-3">
          Found {{ charactersNumber }} characters
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
</style>
