import Vue from 'vue'
import Vuex from 'vuex'

import {
  db
} from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    writingResult: '',
    writing: false,
    prompt: '',
    userInfo: {
      email: '',
      password: ''
    }
  },
  mutations: {

    updateWriting(state, text) {
      state.writingResult = text;
    },

    updateWritingState(state, isWriting) {
      state.writing = isWriting;
    },

    updatePrompt(state, prompt) {
      state.prompt = prompt;
    },

    updateNewPrompt(state, newPrompt) {
      state.newPrompt = newPrompt;
    }

  },
  actions: {

    async getPromptOnce({commit}) {
      const snapshot = await db.collection('prompt').doc('currentPrompt').get();

      // update the store with the prompt
      commit('updatePrompt', snapshot.data().promptText);
    },

    async updatePrompt({commit}, newPrompt) {
      const promptRef = db.collection('prompt');
      promptRef.doc('currentPrompt').set({
        promptText: newPrompt
      });
    }
  },
  modules: {}
})