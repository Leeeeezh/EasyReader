<template>
  <div class="wrap" :class="activatedTheme">
    <div class="more">
      更多
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['activatedTheme'])
    }
  }

</script>

<style lang="scss" scoped>
  .wrap {
    width: 40vw;
    height: 40%;
    background-color: gray;
  }

</style>
