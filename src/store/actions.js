export default {
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
  }
}
