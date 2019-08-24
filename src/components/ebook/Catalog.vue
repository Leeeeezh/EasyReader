<template>
  <div class="wrap" :class="activatedTheme">
    <div class="catalog" >Catalog
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
    width: 60vw;
    height: 100vh;
    background-color: skyblue;
    // box-shadow: 0 0 10px #ccc;
  }

</style>
