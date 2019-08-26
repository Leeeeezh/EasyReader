<template>
  <div class="wrap" :class="activatedTheme">
    <div class="ebook-title">
      <div class="back">
        <div class="icon-wrapper"><span class="icon-back"></span></div>
      </div>
      <div class="ebook-title-icons">
        <div class="icon-wrapper"><span class="icon-shelf"></span></div>
        <div class="icon-wrapper"><span class="icon-cart"></span></div>
        <div class="icon-wrapper"><span class="icon-more" @click="setSettingVisibility('more')"></span></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['activatedTheme'])
    },
    methods: {
      ...mapActions(['setSettingVisibility'])
    }
  }

</script>

<style lang="scss" scoped>
  .ebook-title {
    box-sizing: border-box;
    width: 100%;
    height: px2rem(50);
    font-size: $font-size-xl;
    font-weight: bold;
    @include flex-center-row;
    @include reader-menu-icon;
    justify-content: space-between;

    .ebook-title-icons {
      @include flex-center-row;
      height: 100%;
    }
  }

  .dark {
    .icon-wrapper:active {
      background-color: rgba(255, 255, 255, .2)
    }
  }

</style>
