export default {
  state: {
    fileName: '',
    menuVisibility: true,
    fontSizeSettingVisibility: false,
    fontFamilyList: ['daysOne', 'cabin', 'montserrat', 'tangerine'],
    activatedFontFamily: 'daysOne',
    readingBook: null,
    defaultFontSize: 22,
    settingVisibility: {
      fontSize: false,
      fontFamily: false,
      theme: false,
      Brightness: false,
      catalog: false
    }
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'TOGGLE_MENU_VISIBILITY': (state) => {
      state.menuVisibility = !state.menuVisibility
    },
    'TOGGLE_FONTSIZE_SETTING_VISIBILITY': (state) => {
      state.fontSizeSettingVisibility = !state.fontSizeSettingVisibility
    },
    'SET_READING_BOOK': (state, readingBook) => {
      state.readingBook = readingBook
    },
    'SET_DEFAULT_FONT_SIZE': (state, fontSize) => {
      state.defaultFontSize = fontSize
    },
    'SET_SETTING_VISIBILITY': (state, {
      setting,
      visibility
    }) => {
      for (let i in setting) {
        state.settingVisibility[setting[i]] = visibility[i]
      }
    },
    'SET_ACTIVATED_FONT_FAMILY': (state, fontFamilyName) => {
      state.activatedFontFamily = fontFamilyName
    }
  }
}
