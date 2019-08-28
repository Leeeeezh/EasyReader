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
      <ThemeSetting class="theme-setting" v-show="settingVisibility.theme" @settheme="setTheme" />
    </transition>

    <transition name="progress-setting">
      <ProgressSetting class="progress-setting" v-show="settingVisibility.progress" @setprogress="onProgressChange" />
    </transition>

    <transition name="catalog">
      <Catalog class="catalog" v-show="settingVisibility.catalog" />
    </transition>

    <transition name="more">
      <More class="more" v-show="settingVisibility.more" />
    </transition>
    <transition name="mask">
      <ReaderMask v-show="settingVisibility.catalog" />
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
  import ReaderMask from './ReaderMask.vue'
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  global.ePub = Epub

  export default {
    computed: {
      ...mapGetters(['fileName', 'menuVisibility', 'fontSizeSettingVisibility', 'readingBook', 'defaultFontSize',
        'settingVisibility', 'fontFamilyList', 'activatedFontFamily', 'activatedTheme', 'themeList', 'progress',
        'coverURL', 'metaData', 'catalog', 'section'
      ])
    },
    data() {
      return {
        bookName: this.$route.params.fileName,
        bookThemeList: [{
            name: 'default',
            style: {
              body: {
                'color': '#555',
                'background': 'rgb(243, 243, 243)'
              }
            }
          },
          {
            name: 'dark',
            style: {
              body: {
                'color': '#999',
                'background': 'black'
              }
            }
          },
          {
            name: 'jungle',
            style: {
              body: {
                'color': 'cadetblue',
                'background': 'darkslategrey'
              }
            }
          },
          {
            name: 'pink',
            style: {
              body: {
                'color': '#ffc0cb',
                'background': '#d87093'
              }
            }
          }
        ]
      }
    },
    components: {
      FontSizeSetting,
      FontFamilySetting,
      ThemeSetting,
      ProgressSetting,
      Catalog,
      More,
      ReaderMask
    },
    methods: {
      ...mapActions(['setFileName', 'toggleMenuVisibility', 'toggleFontSizeSettingVisibility', 'setReadingBook',
        'setDefaultFontSize', 'setSettingVisibility', 'setActivatedFontFamily', 'setActivatedTheme', 'setProgress',
        'setCoverURL', 'setMetaData', 'setCatalog', 'setChapter', 'setSection'
      ]),
      refreshLocation() {
        let currentLocation = this.book.rendition.currentLocation()
        let progress = (this.book.locations.percentageFromCfi(currentLocation.start.cfi) * 100).toFixed(0)
        this.setProgress(progress)
      },
      refreshSection() {
        this.setSection(this.book.section(this.book.rendition.currentLocation().start.index).href)
      },
      onProgressChange(progress) {
        this.setProgress(progress)
        let percentage = progress / 100
        //  epubjs通过locations对象的cfiFromPercentage定位阅读进度,将产生的location定位对象传入rendition对象的display方法显示对应进度的内容
        let location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
        //  display为异步方法!!!
        this.rendition.display(location).then(() => {
          this.refreshSection()
        })
      },
      setTheme(t) {
        this.rendition.themes.select(t)
      },
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
        this.setSettingVisibility('all')
        this.setSection(this.book.section(this.book.rendition.currentLocation().start.index).href)
      },
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
          this.menuVisibility && this.toggleTitleAndMenu()
        }
        this.setSection(this.book.section(this.book.rendition.currentLocation().start.index).href)
        this.setSettingVisibility('all')
      },
      toggleTitleAndMenu() {
        this.toggleMenuVisibility()
      },
      initBook() {
        //  加载图书资源
        const url = `${process.env.VUE_APP_RES_URL}epub/` + this.fileName + '.epub'
        this.book = new Epub(url)
        this.setReadingBook(this.book)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        })
      },
      regFontFamily() {
        //  注册字体资源
        this.rendition.hooks.content.register(contents => {
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/daysOne.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/cabin.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/montserrat.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/tangerine.css`)
        })
      },
      regTheme() {
        //  注册主题样式
        this.bookThemeList.forEach(theme => {
          this.rendition.themes.register(theme.name, theme.style)
        })
      },
      initFontSize() {
        //  读取字号缓存,若无则使用默认字号
        let localFontSize = localStorage.getItem('fontSize')
        if (localFontSize) {
          this.rendition.themes.fontSize(localFontSize + 'px')
          this.setFontSize(+localFontSize)
        } else {
          this.rendition.themes.fontSize(this.defaultFontSize + 'px')
        }
      },
      initTheme() {
        //  读取主题缓存, 若无则使用默认主题
        let theme = localStorage.getItem('theme')
        if (theme) {
          this.rendition.themes.select(theme)
          this.setActivatedTheme(theme)
        } else {
          this.rendition.themes.select('default')
          this.setActivatedTheme('default')
        }
      },
      initFontFamily() {
        //  读取字体缓存,若无则使用默认字体
        let localFontFamily = localStorage.getItem('fontFamily')
        if (localFontFamily) {
          this.rendition.themes.font(localFontFamily)
          this.setFontFamily(localFontFamily)
          this.setActivatedFontFamily(localFontFamily)
        } else {
          this.rendition.themes.font(this.activatedFontFamily)
        }
      },
      initProgress() {
        //  加载进度,locations对象默认不生成,需要手动生成
        this.book.ready.then(() => {
          console.log(this.book.section())
          return this.book.locations.generate()
        }).then(result => {
          this.locations = this.book.locations
          //  检查该图书是否有进度缓存,有则加载
          let progress = localStorage.getItem('progress')
          if (progress) {
            let progressObj = JSON.parse(progress)
            if (progressObj[this.bookName]) {
              this.onProgressChange(+progressObj[this.bookName])
            }
          }
        })
      },
      initGesture() {
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
            this.setSettingVisibility('all')
          }
        }, {
          passive: false
        })
      },
      navToSection(section) {
        this.book.rendition.display(section)
      },
      getBookMetaInfo() {
        this.book.loaded.cover.then(cover => {
          this.book.archive.createUrl(cover).then(url => {
            this.setCoverURL(url)
          })
        })
        this.book.loaded.metadata.then(metadata => {
          this.setMetaData(metadata)
        })

        this.book.loaded.navigation.then(nav => {
          console.log(nav)
          let flattenTOC = (function flattenTOC(toc) {
            return [].concat(...toc.map(item => [].concat(item, ...flattenTOC(item.subitems))))
          })(nav.toc)
          let catalog = []
          for (let item of flattenTOC) {
            let level = (function getLevel(item, level = 1) {
              if (!item.parent) {
                return level
              } else {
                return getLevel(flattenTOC.filter(parentItem => parentItem.id === item.parent)[0], ++level)
              }
            })(item)
            catalog.push({
              label: item.label.replace(/\s/, '').trim(),
              level: level,
              section: item.href
            })
          }
          this.setCatalog(catalog)
          this.setChapter(catalog[0].label)
        })
      },
      initEpub() {
        this.initBook()
        this.regFontFamily()
        this.regTheme()
        this.initFontSize()
        this.initTheme()
        this.initFontFamily()
        this.initProgress()
        this.initGesture()
        this.getBookMetaInfo()
        //  显示图书
        this.rendition.display()
      }
    },
    watch: {
      section(section) {
        this.navToSection(section)
        // setTimeout(() => {
        //   this.setSettingVisibility('all')
        // }, 1000)
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

  .mask-enter,
  .mask-leave-to {
    opacity: 0;
  }

  .mask-enter-active,
  .mask-leave-active {
    transition: all .2s ease-in-out;
  }

  .mask-leave,
  .mask-enter-to {
    opacity: 1;
  }

</style>
