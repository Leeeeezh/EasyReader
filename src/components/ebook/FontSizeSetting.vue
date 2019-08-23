<template>
  <div class="wrap">
    <div class="font-size-setting">
      <span class="preview-sm">A</span>
      <div class="controller" ref="controller">
        <div class="unit" v-for="(f,i) in fontsize" :key=i @click.self.capture="setFontSize($event, f)">
          <div class="hori-line" v-if="i!=0"></div>
          <div class="vert-line"></div>
          <div class="hori-line" v-if="i!=fontsize.length-1"></div>
        </div>
      </div>
      <div class="dot" ref="dot" :style="{left:dotLeft}"></div>
      <span class="preview-lg">A</span>
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
  import mixin from '@/mixins/storeOperateMixin.js'
  export default {
    mixins: [mixin],
    data() {
      return {
        fontsize: [16, 18, 20, 22, 24, 26, 28],
        dotLeft: localStorage.getItem('dotLeft') ? localStorage.getItem('dotLeft') : window.innerWidth / 2 - 13 + 'px'
      }
    },
    methods: {
      setFontSize(evt, f) {
        this.$emit('setfontsize', f)
        this.dotLeft = `${evt.target.offsetLeft + evt.target.offsetWidth / 2 - 13}px`
        localStorage.setItem('fontSize', f)
        localStorage.setItem('dotLeft', this.dotLeft)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: px2rem(100);
    @include flex-center-row;
    flex-direction: column;
    background-color: $bg-white;
    box-shadow: 0 0 px2rem(18) $shadow;

    .font-size-setting {
      width: 100%;
      box-sizing: border-box;
      left: 0;
      height: 50px;
      padding: 0 px2rem(10);
      @include flex-center-row;
      background-color: $bg-white;

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
        @include flex-center-row;
        flex: 1 0;
        height: 100%;

        .unit {
          flex: 1 0;
          height: 100%;
          @include flex-center-row;

          &:first-child {
            justify-content: flex-end;

            .hori-line:first-child {
              visibility: hidden;
            }
          }

          &:last-child {
            justify-content: flex-start !important;

            .hori-line:last-child {
              visibility: hidden;
            }
          }

          .hori-line {
            width: 50%;
            height: 1px;
            background-color: #ccc;
          }

          .vert-line {
            width: 1px;
            height: px2rem(8);
            background-color: #ccc;
          }
        }
      }

      .dot {
        width: 6px;
        height: 6px;
        border: 10px solid $bg-white;
        border-radius: 50%;
        box-shadow: 0 0 px2rem(2) $dark-shadow;
        position: absolute;
        background-color: black;
        transition: 0.2s ease-in-out;
      }
    }

    .link-wrap {
      width: 100%;
      height: px2rem(40);
      @include flex-center-row;
    }

    .font-family-link {
      height: px2rem(16);
      padding: px2rem(4) px2rem(8);
      font-size: px2rem(10);
      @include flex-center-row;
      border: 1px solid $shadow;
      border-radius: px2rem(14);
      transition: all .1s ease-in-out;
      &:active {
        background-color: $shadow;
      }
    }
  }

</style>
