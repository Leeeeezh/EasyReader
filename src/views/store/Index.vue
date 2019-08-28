<template>
  <div class="store">
    store
  </div>
</template>

<script>
  import {
    // mapGetters,
    mapActions
  } from 'vuex'
  export default {
    methods: {
      ...mapActions(['setView'])
    }
  }

</script>

<style lang="scss" scoped>
  .store {
    width: 100%;
    height: 92vh;
    background-color: violet;
  }

</style>
