<template>
  <div class="wrap" :class="activatedTheme">
    <div class="view">
      <component :is="views[activeView]"></component>
    </div>
    <div class="btns">
      <div class="btn" :class="[activeView==='CatalogView'?'':'deactive']" ref="catalog" @click="active('CatalogView')"><span>目录</span></div>
      <div class="btn" :class="[activeView==='BookMarkView'?'':'deactive']" ref="bookmark" @click="active('BookMarkView')"><span>书签</span></div>
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
    width: 60vw;
    height: 100vh;

    .btns{
      width:100%;
      position: absolute;
      bottom: 0;
      @include flex-center-row;
      .btn {
        transition: all .2s ease-in-out;
        flex: 1;
        font-size: $font-size-md;
        @include flex-center-row;
        padding: px2rem(10) 0;
      }
    }
  }

</style>
