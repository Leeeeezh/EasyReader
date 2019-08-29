<template>
  <div class="store" @touchstart="onTouchStart($event)" @touchmove="onTouchMove($event)">
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
        storeData: {}
      }
    },
    mounted() {
      getStoreData().then(res => {
        if (res.status === 200) {
          this.storeData = res.data
          console.log(this.storeData)
        }
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
    height: 92vh;
    overflow: scroll;

    .content {
      width: 100%;
    }

    .title {
      width: 100%;
      height: 8vh;
    }
  }

</style>
