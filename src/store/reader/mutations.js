export default {
  'SET_FLAG': (state, flag) => {
    state.flag = flag
  },
  'SET_BOOK_AVAILABLE': state => {
    state.bokkAvailable = true
  },
  'SET_SECTION': (state, section) => {
    state.section = section
  },
  'SET_CHAPTER': (state, chapter) => {
    state.chapter = chapter
  },
  'SET_META_DATA': (state, {
    creator,
    title
  }) => {
    state.metaData = {
      creator,
      title
    }
  },

  'SET_CATALOG': (state, catalog) => {
    state.catalog = catalog
  },

  'SET_COVER_URL': (state, coverURL) => {
    state.coverURL = coverURL
  },

  'SET_PROGRESS': (state, progress) => {
    state.progress = progress
  },

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

  'SET_SETTING_VISIBILITY': (state, setting) => {
    for (let s of Object.keys(state.settingVisibility)) {
      if (s === setting) {
        state.settingVisibility[s] = !state.settingVisibility[s]
      } else {
        if (setting !== 'fontFamily' || setting === 'all') {
          state.settingVisibility[s] = false
        } else if (s === 'fontSize') {
          state.settingVisibility[s] = true
        }
      }
    }
  },

  'SET_ACTIVATED_FONT_FAMILY': (state, fontFamilyName) => {
    state.activatedFontFamily = fontFamilyName
  },

  'SET_ACTIVATED_THEME': (state, theme) => {
    state.activatedTheme = theme
  }
}
