import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    writingResult: '',
    writing: false
  },
  mutations: {

    updateWriting(state, text) {
      state.writingResult = text;
    },

    updateWritingState(state, isWriting) {
      state.writing = isWriting;
    }

  },
  actions: {
  },
  modules: {
  }
})
