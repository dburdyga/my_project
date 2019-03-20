import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/root/login/Login.vue';
import List from '../src/components/common/List.vue';
import Card from './components/common/Card.vue';
import EstimateCard from './components/common/EstimateCard.vue';
import MergeCard from './components/common/MergeCard.vue';

Vue.use(Router);

export enum Routes {
  HOME = 'Home',
  LOGIN = 'Login',
  CARD = 'Card',
}


const router = new Router({
  routes: [
    {
      path: '/',
      name: Routes.HOME,
      component: List,
    },
    {
      path: '/login',
      name: Routes.LOGIN,
      component: Login,
    },
    {
      path: '/card',
      name: Routes.CARD,
      component: Card,
    },
    {
      path: '/estimatecard',
      name: 'estimatecard',
      component: EstimateCard,
    },
    {
      path: '/mergecard',
      name: 'mergecard',
      component: MergeCard,
    },
  ],
});

export default router;
