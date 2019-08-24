<template>
  <div class="wrap" :class="activatedTheme">
    <div class="title">
      阅读进度
    </div>
    <div class="theme-setting">
      <div class="progress-value">
        <span>{{progress}}%</span>
      </div>
      <div class="slider">
        <input type="range" @change="setProgress($event)" @input="changeValue($event)" :value="progress" min="0"
          max="100" step="1">
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '@/mixins/storeOperateMixin.js'
  export default {
    mixins: [mixin],
    data() {
      return {}
    },
    methods: {
      changeValue(evt) {
        evt.target.style.backgroundSize = `${evt.target.value}% 100%`
      },
      setProgress({
        target: {
          value
        }
      }) {
        this.$emit('setprogress', +value)

        let progressObj = JSON.parse(localStorage.getItem('progress'))
        let bookName = this.$route.params.fileName
        if (progressObj) {
          progressObj[bookName] = value
          localStorage.setItem('progress', JSON.stringify(progressObj))
        } else {
          localStorage.setItem('progress', `{"${bookName}" : ${value}}`)
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    // padding: px2rem(30) 0;

    .title {
      font-size: $font-size-lg;
      text-align: center;
      line-height: $li-height;
      width: 100%;
      height: $li-height;
      position: relative;
    }

    .theme-setting {
      @include flex-center-col;
      box-sizing: border;
      padding: px2rem(20) 0;

      div {
        height: px2rem(30);
      }

      .slider {
        width: 90%;
        @include flex-center-row;

        input {
          flex: 1;
          display: block;
          -webkit-appearance: none;
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
          // box-sizing: border-box;
          box-shadow: 0 0 6px rgba(0, 0, 0, .2);
        }
      }

      .progress-value {
        width: 100%;
        flex: 1;
        display: block;
        font-size: $font-size-md;
        @include flex-center-row;
      }
    }
  }

</style>
