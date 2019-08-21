<template>
  <div class="font-size-setting">
    <span class="preview-sm">A</span>
    <div class="controller">
      <div class="unit" v-for="(f,i) in fontsize" :key=i @click.self="setFontSize($event, f)">
        <div class="hori-line" v-if="i!=0"></div>
        <div class="vert-line"></div>
        <div class="hori-line" v-if="i!=fontsize.length-1"></div>
      </div>
    </div>
    <div class="dot" ref="dot" :style="{left:left}"></div>
    <span class="preview-lg">A</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fontsize: [12, 14, 16, 18, 20, 22, 24],
        left: '90px'
      }
    },
    methods: {
      setFontSize(evt, f) {
        this.$emit('setfontsize', f)
        this.left = `${evt.target.offsetLeft + evt.target.offsetWidth / 2 - 13}px`
      }
    }
  }

</script>

<style lang="scss" scoped>
  .font-size-setting {
    position: absolute;
    box-sizing: border-box;
    bottom: 50px;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 0 10px;
    @include flex-center-row;
    background-color: $bg-white;
    z-index: 1;
    box-shadow: 0 0 18px $shadow;

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

        &.unit:last-child {
          justify-content: flex-start;

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
      box-shadow: 6px 6px 10px $shadow;
      position: absolute;
      background-color: black;
    }
  }

</style>
