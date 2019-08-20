<template>
  <div class="ebook-title">
    <div class="icon-wrapper"><span class="icon-back"></span></div>
    <div class="ebook-title-icons">
      <div class="icon-wrapper"><span class="icon-shelf"></span></div>
      <div class="icon-wrapper"><span class="icon-cart"></span></div>
      <div class="icon-wrapper"><span class="icon-more"></span></div>
    </div>
  </div>
</template>
<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .ebook-title {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 0 20px;

    font-size: $font-size-xl;
    font-weight: bold;
    background-color: $bg-white;
    z-index: 100;
    box-shadow: 0 0 18px $shadow;

    @include flex-center-row;
    justify-content: space-between;

    .ebook-title-icons {
      @include flex-center-row;

      .icon-wrapper {
        margin: 0 8px;
      }
    }
  }

</style>
