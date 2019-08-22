import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  computed: {
    ...mapGetters(['fileName', 'menuVisibility', 'fontSizeSettingVisibility', 'readingBook', 'defaultFontSize', 'settingVisibility', 'fontFamilyList', 'activatedFontFamily'])
  },
  methods: {
    ...mapActions(['setFileName', 'toggleMenuVisibility', 'toggleFontSizeSettingVisibility', 'setReadingBook', 'setDefaultFontSize', 'setSettingVisibility', 'setActivatedFontFamily']),
    hideAllSettings() {
      this.setSettingVisibility({
        setting: ['fontSize', 'fontFamily'],
        visibility: [false, false]
      })
    }
  }
}
