<template>
  <div class="wrap" :class="activatedTheme">
    <div class="view">
      <component :is="views[activeView]"></component>
    </div>
    <div class="btns">
      <div class="btn" @click="active('CatalogView')">
        <span>目录</span>
        <span class="bar" v-show="activeView==='CatalogView'"></span>
      </div>
      <div class="btn" ref="bookmark"
        @click="active('BookMarkView')">
        <span>书签</span>
        <span class="bar" v-show="activeView==='BookMarkView'"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import CatalogView from './CatalogView.vue'
  import BookMarkView from './BookMarkView.vue'
  export default {
    data() {
      return {
        views: {
          'CatalogView': CatalogView,
          'BookMarkView': BookMarkView
        },
        activeView: 'CatalogView'
      }
    },
    computed: {
      ...mapGetters(['activatedTheme', 'progress'])
    },
    methods: {
      active(view) {
        this.activeView = view
      }
    },
    components: {
      CatalogView,
      BookMarkView
    }
  }

</script>

<style lang="scss" scoped>
  .wrap {
    width: 80vw;
    height: 100vh;

    .view {
      height: 94vh;
    }

    .btns {
      width: 100%;
      height: 6vh;
      position: absolute;
      bottom: 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, .3);
      @include flex-center-row;

      .btn {
        height: 100%;
        transition: all .2s ease-in-out;
        flex: 1;
        font-size: $font-size-md;
        box-sizing: border-box;
        @include flex-center-col;
      }
    }
  }

</style>
