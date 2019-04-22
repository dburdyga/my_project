import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
// import firebase from 'firebase';
import './styles/style.scss';
import dateFilter from './shared/filters/date.filter';


import firebase from 'firebase/app';
import 'firebase/firestore';

export const db = firebase.firestore();



Vue.filter('date', dateFilter);
Vue.config.productionTip = false;


// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');


let app: Vue;
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});