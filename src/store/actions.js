export default {
  setFileName({
    commit
  }, fileName) {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisibility({
    commit
  }, menuVisibility) {
    return commit('SET_MENU_VISIBILITY', menuVisibility)
  }
}
