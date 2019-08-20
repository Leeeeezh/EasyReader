import getters from '../getters.js'

export default {
  state: {
    fileName: ''
  },
  getters,
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    }
  },
  actions: {
    setFileName({
      commit
    }, fileName) {
      return commit('SET_FILENAME', fileName)
    }
  }
}
