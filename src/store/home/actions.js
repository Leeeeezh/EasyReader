export default {
  setView({
    commit
  }, view) {
    return commit('SET_VIEW', view)
  }
}
