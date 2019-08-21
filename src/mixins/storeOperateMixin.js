import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  computed: {
    ...mapGetters(['fileName', 'menuVisibility', 'fontSizeSettingVisibility', 'readingBook', 'defaultFontSize'])
  },
  methods: {
    ...mapActions(['setFileName', 'toggleMenuVisibility', 'toggleFontSizeSettingVisibility', 'setReadingBook', 'setDefaultFontSize'])
  }
}
