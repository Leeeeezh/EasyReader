<template>
  <div class="wrap">
    <div class="font-family-setting">
      <div class="title">
        <span class="icon-down2" @click.self="setSettingVisibility('fontFamily')"></span>
        <p>{{$t('message.fontFamily')}}</p>
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
  .wrap {
    box-shadow: 0 0 px2rem(18) $shadow;
    box-sizing: border-box;
    width: 100%;
    background-color: $bg-white;
    max-height: px2rem(400);

    .title {
      border-bottom: 1px solid $shadow;
      font-size: $font-size-lg;
      text-align: center;
      line-height: $li-height;
      height: $li-height;
      position: relative;

      .icon-down2 {
        position: absolute;
        right: 0;
        top: 50%;
        width: $li-height;
        height: $li-height;
        transform: translateY(-50%);
        line-height: $li-height;
        font-weight: bold;
      }
    }

    li {
      display: flex;
      justify-content: space-between;
      font-size: $font-size-md;
      text-align: center;
      line-height: $li-height;
      height: $li-height;
      transition: all .2s;
      @include flex-center-row;
      justify-content: space-between;

      &.checked {
        color: $font-color;
        background-color: $shadow;
        font-weight: bold;
      }

      span {
        width: $font-size-xxl;
        height: $font-size-xxl;
        line-height: $font-size-xxl;

        &:first-child {
          padding-left: $screen-margin;
        }

        &:last-child {
          font-size: $font-size-lg;
          padding-right: $screen-margin;
        }
      }
    }
  }

</style>
