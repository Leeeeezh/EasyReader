
export default {
  state: {
    fileName: '',
    menuVisibility: true,
    fontSizeSettingVisibility: false,
    readingBook: null,
    defaultFontSize: 18
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
    }
  }
}
