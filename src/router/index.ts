import Vue from 'vue';
import Router from 'vue-router';
import Cards from '../views/Cards.vue';
import Tasks from '../views/Tasks.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Card from '../views/Card.vue';
import PageNotFound from '../views/PageNotFound.vue';
import UserAccount from '../views/UserAccount.vue';
import {RouteNames} from '@/router/RouteNames';
import {AuthService} from '@/common/services/AuthService';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    routes: [
        {
            path: '/cards/:cardId',
            component: Card,
            props: true,
            name: RouteNames.Card,
            meta: {
                requiresAuth: true,
            },
       },
        {
            path: '/cards',
            component: Cards,
            name: RouteNames.Cards,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/account',
            component: UserAccount,
            name: RouteNames.Account,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '*',
            component: Login,
            name: RouteNames.Login,
            meta: {
                requiresGuest: true,
            },
        },
        {
            path: '/register',
            component: Register,
            name: RouteNames.Register,
            meta: {
                requiresGuest: true,
            },
        },
        {
            path: '/home',
            redirect: {name: RouteNames.Cards},
        },
        {
            path: '/tasks',
            component: Tasks,
            name: RouteNames.Tasks,
            meta: {
                requiresAuth: true,
            },
        },
        // {
        //     path: '*',
        //     component: PageNotFound,
        // },
    ],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {x: 0, y: 0};
    },
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);
    const requiresGuest = to.matched.some((route) => route.meta.requiresGuest);
    if (requiresAuth && !AuthService.isLoggedIn()) {
        next({
            name: RouteNames.Login,
            query: {redirect: to.fullPath },
        });
    } else if (requiresGuest && AuthService.isLoggedIn()) {
        next({name: RouteNames.Cards});
    } else {
        next();
    }
});

export default router;
