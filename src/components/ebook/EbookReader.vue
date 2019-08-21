<template>
  <div>
    <div class="ebook-reader">
      <div id="read"></div>
    </div>
    <transition name="setting-toggle">
      <FontSizeSetting v-show="fontSizeSettingVisibility" @setfontsize="setFontSize" />
    </transition>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  import FontSizeSetting from './FontSizeSetting.vue'
  import mixin from '@/mixins/storeOperateMixin.js'
  global.ePub = Epub

  export default {
    mixins: [mixin],
    components: {
      FontSizeSetting
    },
    methods: {
      setFontSize(f) {
        this.rendition.themes.fontSize(`${f}px`)
        this.setDefaultFontSize(f)
      },
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
          this.menuVisibility && this.toggleTitleAndMenu()
        }
        if (this.fontSizeSettingVisibility === true) {
          this.toggleFontSizeSettingVisibility()
        }
      },
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
          this.menuVisibility && this.toggleTitleAndMenu()
        }
        if (this.fontSizeSettingVisibility === true) {
          this.toggleFontSizeSettingVisibility()
        }
      },
      toggleTitleAndMenu() {
        this.toggleMenuVisibility()
      },
      initEpub() {
        //  渲染图书
        const url = 'http://127.0.0.1:8081/epub/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.setReadingBook(this.book)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        })
        this.rendition.themes.fontSize(this.defaultFontsize + 'px')
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
            if (this.fontSizeSettingVisibility === true) {
              this.toggleFontSizeSettingVisibility()
            }
          }
        }, {
          passive: false
        })
      }
    },
    mounted() {
      // 挂载后请求图书数据并渲染
      const fileName = this.$route.params.fileName.split('|').join('/')
      this.setFileName(fileName).then(() => {
        this.initEpub()
      })
    }
  }

</script>

<style lang="scss" scoped>
  .ebook-reader {
    z-index: 0;
  }

  .setting-toggle-enter,
  .setting-toggle-leave-to {
    transform: translateY(100px);
  }

  .setting-toggle-enter-active,
  .setting-toggle-leave-active {
    transition: .3s ease-in-out;
  }

  .setting-toggle-leave,
  .setting-toggle-enter-to {
    transform: translateY(0);
  }

</style>
