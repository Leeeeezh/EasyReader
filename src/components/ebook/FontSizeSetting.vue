<template>
  <div class="wrap" :class="activatedTheme">
    <div class="title">
      字号
    </div>
    <div class="font-size-setting">
      <span class="preview-sm">A</span>
      <div class="controller" ref="controller">
        <div class="controller"><input type="range" @change="setFontSize($event)" @input="setFontSize($event)"
            :value="defaultFontSize" min="16" max="28" step="2">
        </div>
      </div>
      <span class="preview-lg">A</span>
    </div>
    <div class="value">
      <span>{{defaultFontSize}}</span>
    </div>
    <div class="link-wrap">
      <div class="font-family-link" @click="setSettingVisibility('fontFamily')">
        <span class="link">{{$t('message.fontFamily')}}</span>
        <span class="icon-forward"></span>
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
    // mixins: [mixin],
    computed: {
      ...mapGetters(['defaultFontSize', 'activatedTheme'])
    },
    data() {
      return {
        fontSize: 22,
        fontSizeList: [16, 18, 20, 22, 24, 26, 28],
        dotLeft: localStorage.getItem('dotLeft') ? localStorage.getItem('dotLeft') : window.innerWidth / 2 - 13 + 'px'
      }
    },
    methods: {
      ...mapActions(['setSettingVisibility']),
      setFontSize({
        target: {
          value
        }
      }) {
        localStorage.setItem('fontSize', value)
        this.$emit('setfontsize', value)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    @include flex-center-row;
    flex-direction: column;
    background-color: $bg-white;
    box-shadow: 0 0 px2rem(18) $shadow;

    .title {
      font-size: $font-size-lg;
      text-align: center;
      line-height: $li-height;
      width: 100%;
      height: $li-height;
      position: relative;
    }

    .value {
      font-size: $font-size-md;
      width: 100%;
      padding: 0 px2rem(10);
      @include flex-center-row;
    }

    .font-size-setting {
      width: 100%;
      box-sizing: border-box;
      left: 0;
      height: px2rem(40);
      padding: 0 px2rem(10);
      @include flex-center-row;
      // background-color: $bg-white;

      [class^="preview"] {
        text-align: center;
        flex: .1;
      }

      .preview-sm {
        @include flex-center-row;
        font-size: px2rem(16);
      }

      .preview-lg {
        font-size: px2rem(28);
      }

      .controller {
        @include flex-center-col;
        flex: 1 0;
        height: 100%;

        input {
          display: block;
          -webkit-appearance: none;
          width: 80vw;
          height: px2rem(2);
          outline: none;
          border-radius: px2rem(2)
        }

        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          display: block;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(0, 0, 0, .2);
        }
      }
    }

    .link-wrap {
      width: 100%;
      height: px2rem(40);
      padding: px2rem(10) 0;
      @include flex-center-row;
    }

    .font-family-link {
      height: px2rem(16);
      padding: px2rem(4) px2rem(8);
      font-size: px2rem(10);
      @include flex-center-row;
      border-radius: px2rem(14);
    }
  }

</style>
