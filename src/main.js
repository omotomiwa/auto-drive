import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify';
import store from './store'
import firebase from "firebase";

var firebaseConfig = {
   apiKey: "AIzaSyBFgQWaONj8elLqSdpAn-hJBeTtymABOJc",
    authDomain: "autodrive-fa819.firebaseapp.com",
    projectId: "autodrive-fa819",
    storageBucket: "autodrive-fa819.appspot.com",
    messagingSenderId: "431568541212",
    appId: "1:431568541212:web:5fca93b48308e1ad17b1d9",
    measurementId: "G-RPEC1KQ6CQ"

}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  firebase.analytics();
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
