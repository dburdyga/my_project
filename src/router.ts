import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/requirements/Login.vue';
import Requirements from './components/requirements/Requirements.vue';
import Card from './components/requirements/Card.vue';
import Register from './components/requirements/Register.vue';
import EstimateCard from './components/requirements/EstimateCard.vue';
import MergeCard from './components/requirements/MergeCard.vue';
import firebase from 'firebase';

Vue.use(Router);

export enum Routes {
  HOME = 'Home',
  LOGIN = 'Login',
  REGISTER = 'Register',
  CARD = 'Card',
}


const router = new Router({
  routes: [
    {
      path: '/requirements',
      name: Routes.HOME,
      component: Requirements,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/',
      name: Routes.LOGIN,
      component: Login,
      meta: {
        requiresGuest: true,
      },
    },
    {
      path: '/register',
      name: Routes.REGISTER,
      component: Register,
      meta: {
        requiresGuest: true,
      },
    },
    {
      path: '/card',
      name: Routes.CARD,
      component: Card,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/estimatecard',
      name: 'estimatecard',
      component: EstimateCard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/mergecard',
      name: 'mergecard',
      component: MergeCard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// // Nav Guard
// router.beforeEach((to, from, next) => {
//   // Check for requiresAuth guard
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // Check if NO logged user
//     if (!firebase.auth().currentUser) {
//       // Go to login
//       next({
//         path: '/',
//         query: {
//           redirect: to.fullPath,
//         },
//       });
//     } else {
//       // Proceed to route
//       next();
//     }
//   } else if (to.matched.some((record) => record.meta.requiresGuest)) {
//     // Check if NO logged user
//     if (firebase.auth().currentUser) {
//       // Go to login
//       next({
//         path: '/requirements',
//         query: {
//           redirect: to.fullPath,
//         },
//       });
//     } else {
//       // Proceed to route
//       next();
//     }
//   } else {
//     // Proceed to route
//     next();
//   }
// });

export default router;
