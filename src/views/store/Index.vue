<template>
  <div class="store" @touchstart="onTouchStart($event)" @touchmove="onTouchMove($event)">
    <div class="title">
      <Title :class="[fixTitle?'fixTitle':'unfixTitle',]"/>
    </div>
    <div class="content">
      aa
    </div>
  </div>
</template>

<script>
  import {
    // mapGetters,
    mapActions
  } from 'vuex'
  import Title from '@/components/store/Title.vue'
  export default {
    methods: {
      ...mapActions(['setView']),
      onTouchStart(event) {
        this.touchStartY = event.touches[0].clientY
      },
      onTouchMove(event) {
        if (event.touches[0].clientY > this.touchStartY) {
          this.fixTitle = true
        } else {
          this.fixTitle = false
        }
      }
    },
    components: {
      Title
    },
    data() {
      return {
        touchStartY: 0,
        showTitle: true,
        fixTitle: false
      }
    }
  }

</script>

<style lang="scss" scoped>
  .fixTitle {
    position: fixed;
    top: 0;
    left: 0;
  }
  .unfixTitle {
    position: fixed;
    left: 0;
    top: -8vh;
  }
  .store {
    width: 100%;
    height: 92vh;
    overflow: scroll;

    .content {
      width: 100%;
      height: 200vh;
    }

    .title {
      width: 100%;
      height: 8vh;
    }
  }

</style>
