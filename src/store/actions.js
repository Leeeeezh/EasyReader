export default {
  setFileName({
    commit
  }, fileName) {
    return commit('SET_FILENAME', fileName)
  }
}
