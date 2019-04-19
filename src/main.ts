import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './styles/style.scss';
import dateFilter from './shared/filters/date.filter';


Vue.filter('date', dateFilter);
Vue.config.productionTip = false;


const config = {
  apiKey: 'AIzaSyC7JkmYFlHfJihdYKcaEShshQyY034E-vg',
  authDomain: 'frontend-school.firebaseapp.com',
  databaseURL: 'https://frontend-school.firebaseio.com',
  projectId: 'frontend-school',
  storageBucket: 'frontend-school.appspot.com',
  messagingSenderId: '570721181687',
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

