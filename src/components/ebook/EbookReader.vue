<template>
  <div>
    <div class="ebook-reader">
      <div id="read"></div>
    </div>

    <transition name="font-size-setting">
      <FontSizeSetting class="font-size-setting" v-show="settingVisibility.fontSize" @setfontsize="setFontSize" />
    </transition>

    <transition name="font-family-setting">
      <FontFamilySetting class="font-family-setting" v-show="settingVisibility.fontFamily"
        @setfontfamily="setFontFamily" />
    </transition>

    <transition name="theme-setting">
      <ThemeSetting class="theme-setting" v-show="settingVisibility.theme" />
    </transition>

    <transition name="progress-setting">
      <ProgressSetting class="progress-setting" v-show="settingVisibility.progress" />
    </transition>

    <transition name="catalog">
      <Catalog class="catalog" v-show="settingVisibility.catalog" />
    </transition>

    <transition name="more">
      <More class="more" v-show="settingVisibility.more" />
    </transition>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  import FontSizeSetting from './FontSizeSetting.vue'
  import FontFamilySetting from './FontFamilySetting.vue'
  import ThemeSetting from './ThemeSetting.vue'
  import ProgressSetting from './ProgressSetting.vue'
  import Catalog from './Catalog.vue'
  import More from './More.vue'
  import mixin from '@/mixins/storeOperateMixin.js'
  global.ePub = Epub

  export default {
    mixins: [mixin],
    components: {
      FontSizeSetting,
      FontFamilySetting,
      ThemeSetting,
      ProgressSetting,
      Catalog,
      More
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
        //  加载图书资源
        const url = `${process.env.VUE_APP_RES_URL}epub/` + this.fileName + '.epub'
        this.book = new Epub(url)
        this.setReadingBook(this.book)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        })
        //  加载字体资源
        this.rendition.hooks.content.register(contents => {
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/daysOne.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/cabin.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/montserrat.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/tangerine.css`)
        })
        //  读取字号缓存,若无则使用默认字号
        let localFontSize = localStorage.getItem('fontSize')
        if (localFontSize) {
          this.rendition.themes.fontSize(localFontSize + 'px')
          this.setFontSize(+localFontSize)
        } else {
          this.rendition.themes.fontSize(this.defaultFontSize + 'px')
        }
        //  读取字体缓存,若无则使用默认字体
        let localFontFamily = localStorage.getItem('fontFamily')
        if (localFontSize) {
          this.rendition.themes.font(localFontSize)
          this.setFontFamily(localFontFamily)
          this.setActivatedFontFamily(localFontFamily)
        } else {
          this.rendition.themes.font(this.activatedFontFamily)
        }
        //  显示图书
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
      // 挂载后得到图书资源url
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
  @include panelPosition(font-size-setting);
  @include panelPosition(font-family-setting);
  @include panelPosition(theme-setting);
  @include panelPosition(progress-setting);
  @include panelPosition(catalog);
  @include panelPosition(more);

  @include panelStyle(font-size-setting, Y, 100%);
  @include panelStyle(font-family-setting, Y, 100%);
  @include panelStyle(theme-setting, Y, 100%);
  @include panelStyle(progress-setting, Y, 100%);
  @include panelStyle(catalog, X, -100%);
  @include panelStyle(more, y, -100%);

</style>
