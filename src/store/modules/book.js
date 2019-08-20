
export default {
  state: {
    fileName: '',
    menuVisibility: false
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENU_VISIBILITY': (state) => {
      state.menuVisibility = !state.menuVisibility
    }
  }
}
