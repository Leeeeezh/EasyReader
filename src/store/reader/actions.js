export default {
  setMetaData({
    commit
  }, {
    creator,
    title
  }) {
    return commit('SET_META_DATA', {
      creator,
      title
    })
  },

  setCoverURL({
    commit
  }, coverURL) {
    return commit('SET_COVER_URL', coverURL)
  },

  setProgress({
    commit
  }, progress) {
    return commit('SET_PROGRESS', progress)
  },

  setFileName({
    commit
  }, fileName) {
    return commit('SET_FILENAME', fileName)
  },

  toggleMenuVisibility({
    commit
  }, menuVisibility) {
    return commit('TOGGLE_MENU_VISIBILITY')
  },

  toggleFontSizeSettingVisibility({
    commit
  }, fontSizeSettingVisibility) {
    return commit('TOGGLE_FONTSIZE_SETTING_VISIBILITY')
  },

  setReadingBook({
    commit
  }, readingBook) {
    return commit('SET_READING_BOOK', readingBook)
  },

  setDefaultFontSize({
    commit
  }, fontSize) {
    return commit('SET_DEFAULT_FONT_SIZE', fontSize)
  },

  setSettingVisibility({
    commit
  }, setting) {
    return commit('SET_SETTING_VISIBILITY', setting)
  },

  setActivatedFontFamily({
    commit
  }, fontFamily) {
    return commit('SET_ACTIVATED_FONT_FAMILY', fontFamily)
  },
  setActivatedTheme({
    commit
  }, theme) {
    return commit('SET_ACTIVATED_THEME', theme)
  }
}
