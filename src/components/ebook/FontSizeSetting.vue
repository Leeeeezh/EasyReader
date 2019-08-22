<template>
  <div class="wrap">
    <div class="font-size-setting">
      <span class="preview-sm">A</span>
      <div class="controller" ref="controller">
        <div class="unit" v-for="(f,i) in fontsize" :key=i @touchend.self.capture="setFontSize($event, f)">
          <div class="hori-line" v-if="i!=0"></div>
          <div class="vert-line"></div>
          <div class="hori-line" v-if="i!=fontsize.length-1"></div>
        </div>
      </div>
      <div class="dot" ref="dot" :style="{left:dotLeft}"></div>
      <span class="preview-lg">A</span>
    </div>
    <div class="link-wrap">
      <div class="font-family-link" @click="setSettingVisibility({setting:['fontFamily'],visibility: [true]})">
        <span class="link">Choose Font Family</span>
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
    z-index: 10;
    width: 100%;
    @include flex-center-row;
    flex-direction: column;
    position: absolute;
    bottom: 50px;
    background-color: $bg-white;
    box-shadow: 0 0 18px $shadow;

    .font-size-setting {
      width: 100%;
      box-sizing: border-box;
      left: 0;
      height: 50px;
      padding: 0 10px;
      @include flex-center-row;
      background-color: $bg-white;

      [class^="preview"] {
        text-align: center;
        flex: .1;
      }

      .preview-sm {
        @include flex-center-row;
        font-size: 12px;
      }

      .preview-lg {
        font-size: 24px;
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
            height: 10px;
            background-color: #ccc;
          }
        }
      }

      .dot {
        width: 6px;
        height: 6px;
        border: 10px solid $bg-white;
        border-radius: 50%;
        box-shadow: 0 0 6px $dark-shadow;
        position: absolute;
        background-color: black;
      }
    }

    .link-wrap {
      width: 100%;
      height: 40px;
      @include flex-center-row;
    }

    .font-family-link {
      height: 16px;
      padding: 4px;
      font-size: 10px;
      @include flex-center-row;
      border: 1px solid $shadow;
      border-radius: 11px;
    }
  }

</style>
