import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//firebase config
const firebase = require('firebase/app');
require('firebase/firestore');
require('firebase/auth');

const config = {
  apiKey: "AIzaSyCvR3O-Ikws1jmlRET_lscmn001YKA1NAw",
  authDomain: "revision-writer.firebaseapp.com",
  databaseURL: "https://revision-writer.firebaseio.com",
  projectId: "revision-writer",
  storageBucket: "revision-writer.appspot.com",
  messagingSenderId: "857594769474",
  appId: "1:857594769474:web:64d3e03069152a23e3fddb"
}
const firebaseApp = firebase.initializeApp(config);


let app;
firebaseApp.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })
    }
});

/*
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();

