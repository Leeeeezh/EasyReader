import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  computed: {
    ...mapGetters(['fileName', 'menuVisibility', 'fontSizeSettingVisibility', 'readingBook', 'defaultFontSize', 'settingVisibility', 'fontFamilyList', 'activatedFontFamily', 'activatedTheme', 'themeList', 'progress'])
  },
  methods: {
    ...mapActions(['setFileName', 'toggleMenuVisibility', 'toggleFontSizeSettingVisibility', 'setReadingBook', 'setDefaultFontSize', 'setSettingVisibility', 'setActivatedFontFamily', 'setActivatedTheme', 'setProgress']),
    hideAllSettings() {
      this.setSettingVisibility('all')
    }
  }
}
