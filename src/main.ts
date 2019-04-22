import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import store from './store/index';
import router from './router';
import './firebase';
import {auth} from './firebase';
import './styles/styles.scss';
import {RouteNames} from '@/router/RouteNames';

Vue.config.productionTip = false;

Vue.prototype.$routeNames = RouteNames;

// add validation lib
Vue.use(Vuelidate);

let app: Vue;
// start app when get update auth state update from firebase
// to avoid re-login after page reload
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      render: (h) => h(App),
    }).$mount('#app');
  }
});



// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');


