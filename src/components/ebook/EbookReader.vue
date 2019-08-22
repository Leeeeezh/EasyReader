<template>
  <div>
    <div class="ebook-reader">
      <div id="read"></div>
    </div>
    <transition name="font-size-setting-animation">
      <FontSizeSetting v-show="settingVisibility.fontSize" @setfontsize="setFontSize" />
    </transition>
    <transition name="font-family-setting-animation">
      <FontFamilySetting v-show="settingVisibility.fontFamily" @setfontfamily="setFontFamily" />
    </transition>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  import FontSizeSetting from './FontSizeSetting.vue'
  import FontFamilySetting from './FontFamilySetting.vue'
  import mixin from '@/mixins/storeOperateMixin.js'
  global.ePub = Epub

  export default {
    mixins: [mixin],
    components: {
      FontSizeSetting,
      FontFamilySetting
    },
    methods: {
      setFontSize(f) {
        this.rendition.themes.fontSize(`${f}px`)
        this.setDefaultFontSize(f)
      },
      setFontFamily(f) {
        this.rendition.themes.font(`${f}`)
      },
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
          this.menuVisibility && this.toggleTitleAndMenu()
        }
        this.hideAllSettings()
      },
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
          this.menuVisibility && this.toggleTitleAndMenu()
        }
        this.hideAllSettings()
      },
      toggleTitleAndMenu() {
        this.toggleMenuVisibility()
      },
      initEpub() {
        //  渲染图书
        const url = `${process.env.VUE_APP_RES_URL}epub/` + this.fileName + '.epub'
        this.book = new Epub(url)
        this.setReadingBook(this.book)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        })
        this.rendition.hooks.content.register(contents => {
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/daysOne.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/cabin.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/montserrat.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/tangerine.css`)
        })
        //  字号缓存
        let localFontSize = localStorage.getItem('fontSize')
        if (localFontSize) {
          this.rendition.themes.fontSize(localFontSize + 'px')
          this.setFontSize(+localFontSize)
        } else {
          this.rendition.themes.fontSize(this.defaultFontSize + 'px')
        }
        //  字体缓存
        let localFontFamily = localStorage.getItem('fontFamily')
        if (localFontSize) {
          this.rendition.themes.font(localFontSize)
          this.setFontFamily(localFontFamily)
        } else {
          this.rendition.themes.font(this.activatedFontFamily)
        }
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
            this.hideAllSettings()
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

  .font-size-setting-animation-enter,
  .font-size-setting-animation-leave-to {
    transform: translateY(100px);
    opacity: .4;
  }

  .font-size-setting-animation-enter-active,
  .font-size-setting-animation-leave-active {
    transition: .3s ease-in-out;
  }

  .font-size-setting-animation-leave,
  .font-size-setting-animation-enter-to {
    transform: translateY(0px);
    opacity: 1;
  }

  .font-family-setting-animation-enter,
  .font-family-setting-animation-leave-to {
    transform: translateY(150px);
    opacity: .4;
  }

  .font-family-setting-animation-enter-active,
  .font-family-setting-animation-leave-active {
    transition: .3s ease-in-out;
  }

  .font-family-setting-animation-leave,
  .font-family-setting-animation-enter-to {
    transform: translateY(0px);
    opacity: 1;
  }

</style>
