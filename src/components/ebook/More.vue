<template>
  <div class="wrap" :class="activatedTheme">
    <div class="more">progress
    </div>
  </div>
</template>

<script>
  import mixin from '@/mixins/storeOperateMixin.js'
  export default {
    mixins: [mixin]
  }

</script>

<style lang="scss" scoped>
  .wrap {
    width: 40vw;
    height: 40%;
    background-color: gray;
  }

</style>
