import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/root/login/Login.vue';
import Requirements from './components/requirements/Requirements.vue';
import Card from './components/requirements/Card.vue';
import Registration from './components/requirements/Registration.vue';
import EstimateCard from './components/requirements/EstimateCard.vue';
import MergeCard from './components/requirements/MergeCard.vue';

Vue.use(Router);

export enum Routes {
  HOME = 'Home',
  LOGIN = 'Login',
  CARD = 'Card'
}


const router = new Router({
  routes: [
    {
      path: '/requirements',
      name: Routes.HOME,
      component: Requirements,
    },
    {
      path: '/',
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
    {
      path: '/registration',
      name: Routes.LOGIN,
      component: Registration,
    },
  ],
});

export default router;
