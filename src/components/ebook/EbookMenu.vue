<template>
  <div class="wrap" :class="activatedTheme">
    <div class="ebook-menu" :class="{noshadow:settingVisibility.fontSize}">
      <div class="icon-wrapper">
        <span class="icon-menu" @click="setSettingVisibility('catalog');toggleMenuVisibility()"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-progress" @click="setSettingVisibility('progress')"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-bright" @click="setSettingVisibility('theme')"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-A" @click="setSettingVisibility('fontSize')"></span>
      </div>
    </div>
  </div>
</template>
<script>
  import mixin from '@/mixins/storeOperateMixin.js'
  export default {
    mixins: [mixin],
    methods: {

    }
  }

</script>
<style lang="scss" scoped>
  .ebook-menu {
    width: 100%;
    height: px2rem(50);
    @include flex-center-row;
    font-size: $font-size-sm;
    box-shadow: 0 0 px2rem(18) $shadow;
    transition: .3s ease-in-out;
    @include reader-menu-icon;
  }

  .dark {
    .icon-wrapper:active {
      background-color: rgba(255, 255, 255, .2)
    }
  }

</style>
