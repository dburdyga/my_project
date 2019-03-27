import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import data from './data';
import './styles/style.scss';


import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
Vue.use(VueSidebarMenu);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data,
  render: (h) => h(App),
}).$mount('#app');

