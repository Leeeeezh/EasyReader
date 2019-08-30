export default {
  setView({
    commit
  }, view) {
    return commit('SET_VIEW', view)
  },
  setBookDetail({
    commit
  }, detail) {
    return commit('SET_BOOK_DETAIL', detail)
  }
}
