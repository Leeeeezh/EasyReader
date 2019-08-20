
export default {
  state: {
    fileName: '',
    menuVisibility: false
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    }
  }
}
