<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  import {
    mapGetters
  } from 'vuex'
  global.ePub = Epub

  export default {
    computed: {
      ...mapGetters(['fileName'])
    },
    methods: {
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
        }
      },
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
        }
      },
      toggleTitleAndMenu() {
        console.log('??')
      },
      initEpub() {
        //  渲染图书
        const url = 'http://127.0.0.1:8081/epub/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        })
        this.rendition.display()
        //  绑定翻页手势事件监听
        this.rendition.on('touchstart', evt => {
          this.touchStartX = evt.changedTouches[0].clientX
          this.touchStartTime = evt.timeStamp
        })
        this.rendition.on('touchend', evt => {
          let offsetX = evt.changedTouches[0].clientX - this.touchStartX
          let duration = evt.timeStamp - this.touchStartTime
          if (duration < 1000 && offsetX > 50) {
            this.prevPage()
          } else if (duration < 1000 && offsetX < -50) {
            this.nextPage()
          } else {
            this.toggleTitleAndMenu()
          }
        }, {
          passive: false
        })
      }
    },
    mounted() {
      const fileName = this.$route.params.fileName.split('|').join('/')
      this.$store.dispatch('setFileName', fileName).then(() => {
        this.initEpub()
      })
    }
  }

</script>

<style lang="scss" scoped>
  .ebook-reader{
    z-index: 0;
  }
</style>
