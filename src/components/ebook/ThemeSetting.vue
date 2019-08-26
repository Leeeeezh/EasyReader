<template>
  <div class="wrap" :class="activatedTheme">
    <div class="title">
      主题
    </div>
    <div class="theme-setting">
      <div class="theme-box" v-for="(t,i) in themeList" :key="i" @click="setTheme(t)">
        <div class="preview" :class="t"><span>{{t}}</span></div>
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
      ...mapGetters(['activatedTheme', 'themeList'])
    },
    methods: {
      ...mapActions(['setActivatedTheme']),
      setTheme(t) {
        this.setActivatedTheme(t)
        localStorage.setItem('theme', t)
        this.$emit('settheme', t)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    padding: 0 0;
    font-size: $font-size-sm;
    box-sizing: border-box;

    .title {
      font-size: $font-size-lg;
      text-align: center;
      line-height: $li-height;
      width: 100%;
      height: $li-height;
      position: relative;
    }

    .theme-setting {
      height: 100%;
      padding: px2rem(20) 0;
      @include flex-center-row;

      .theme-box {
        height: px2rem(50);
        flex: 1;
        text-align: center;
        margin: 0 px2rem(6);
        @include flex-center-col;

        .preview {
          width: 100%;
          box-sizing: border-box;
          border: 2px solid rgba(0, 0, 0, .2);
          flex: 1;
          font-size: $font-size-md;
          @include flex-center-row;
          transition: all .2s ease-in-out;

          &:active {
            transform: translateY(px2rem(-12))
          }

          &.dark {
            border-color: rgba(255, 255, 255, .2)
          }
        }
      }
    }
  }

</style>
