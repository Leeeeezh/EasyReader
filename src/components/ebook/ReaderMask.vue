<template>
  <div class="mask" @click="setSettingVisibility('catalog')">
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    methods: {
      ...mapActions(['setSettingVisibility', 'activatedTheme'])
    }
  }

</script>

<style lang="scss" scoped>
  .mask {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .6);
    backdrop-filter: blur(2px);
  }

</style>
