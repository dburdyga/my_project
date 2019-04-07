import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import data from './data';
import './styles/style.scss';

import dateFilter from './shared/filters/date.filter';

Vue.filter('date', dateFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data,
  render: (h) => h(App),
}).$mount('#app');

