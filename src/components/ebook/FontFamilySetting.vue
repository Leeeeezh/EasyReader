<template>
  <div class="font-family-setting">
    <div class="wrapper">
      <div class="title">
        <span class="icon-down2" @click.self="setSettingVisibility({setting:['fontFamily'],visibility:[false]})"></span>
        <p>Font Family</p>
      </div>
      <div class="list">
        <ul>
          <li v-for="(f,i) in fontFamilyList" :key="i" :class="{checked:f===activatedFontFamily}"
            @click="setFontFamily(f)">
            <span class="font-family-name">{{f}}</span>
            <span class="icon-check" v-show="f===activatedFontFamily"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '@/mixins/storeOperateMixin.js'
  export default {
    mixins: [mixin],
    methods: {
      setFontFamily(f) {
        this.$emit('setfontfamily', f)
        this.setActivatedFontFamily(f)
        localStorage.setItem('fontFamily', f)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .font-family-setting {
    box-shadow: 0 0 18px $shadow;
    box-sizing: border-box;
    position: absolute;
    bottom: 50px;
    width: 100%;
    z-index: 15;
    background-color: $bg-white;
    max-height: 400px;

    .title {
      border-bottom: 1px solid $shadow;
      font-size: $font-size-lg;
      text-align: center;
      line-height: 40px;
      height: 40px;
      position: relative;

      .icon-down2 {
        position: absolute;
        right: 0;
        top: 50%;
        width: 40px;
        height: 40px;
        transform: translateY(-50%);
        line-height: 40px;
      }
    }

    li {
      display: flex;
      justify-content: space-between;
      font-size: $font-size-md;
      text-align: center;
      line-height: 30px;
      height: 30px;
      transition: all .2s;

      &.checked {
        color: $font-color;
        background-color: $shadow;
        font-weight: bold;
      }

      span {
        width: 30px;
        height: 30px;
        line-height: 30px;

        &:first-child {
          padding-left: 10px;
        }
      }
    }
  }

</style>
