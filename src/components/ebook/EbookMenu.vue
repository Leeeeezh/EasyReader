<template>
  <div class="ebook-menu">
    <div class="icon-wrapper"><span class="icon-menu"></span></div>
    <div class="icon-wrapper"><span class="icon-progress"></span></div>
    <div class="icon-wrapper"><span class="icon-bright"></span></div>
    <div class="icon-wrapper"><span class="icon-A"></span></div>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="scss" scoped>
  .ebook-menu {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    @include flex-center-row;
    font-size: $font-size-sm;
    background-color: $bg-white;
    z-index: 100;
    box-shadow: 0 0 18px $shadow;

    .icon-wrapper {
      flex: 1;
      @include flex-center-row;

      [class^="icon"] {
        font-size: $font-size-lg;
        font-weight: bold;
      }
    }
  }

</style>
