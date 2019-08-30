<template>
  <div class="store" @touchstart="onTouchStart($event)" @touchmove="onTouchMove($event)" @touchend="onTouchEnd">
    <div class="title">
      <Title :class="[fixTitle?'fixTitle':'unfixTitle']" />
    </div>
    <div class="content" ref="content">
      <GuessYouLike :guessYouLikeData="storeData.guessYouLike" />
      <Feature :featured="storeData.featured" />
    </div>
  </div>
</template>

<script>
  import {
    // mapGetters,
    mapActions
  } from 'vuex'
  import '@/mock/index.js'
  import {
    getStoreData
  } from '@/api/store.js'
  import Title from '@/components/store/Title.vue'
  import GuessYouLike from '@/components/store/GuessYouLike.vue'
  import Feature from '@/components//store/Feature.vue'
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
      },
      onTouchEnd() {
        this.scrollTop = document.documentElement.scrollTop
        console.dir(document.documentElement.scrollTop)
      }
    },
    components: {
      Title,
      GuessYouLike,
      Feature
    },
    data() {
      return {
        touchStartY: 0,
        fixTitle: true,
        storeData: {},
        scrollTop: 0
      }
    },
    mounted() {
      getStoreData().then(res => {
        if (res.status === 200) {
          this.storeData = res.data
          console.log(this.storeData)
        }
      })
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        document.documentElement.scrollTop = vm.scrollTop
      })
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
    padding-bottom:8vh;
    // height: 100vh;
    // overflow: scroll;

    .content {
      width: 100%;
    }

    .title {
      width: 100%;
      height: 8vh;
    }
  }

</style>
