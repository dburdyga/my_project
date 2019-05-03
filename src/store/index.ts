import Vue from 'vue';
import Vuex from 'vuex';
import authState from '@/store/auth';
import alertState from '@/store/alert';
import accountState from '@/store/account';
import tasksState from '@/store/tasks';
import cardsState from '@/store/cards';
import index from '../router/index';
import {RouteNames} from '@/router/RouteNames';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authState,
        alertState,
        accountState,
        tasksState,
        cardsState,
    },
    // state: {
    //     loggingIn: false,
    //     loginError: null,
    //     loginSuccessful: false,
    //     requirements: [],
    //     sideBarVisible: false,
    // },
    // mutations: {
    //     loginStart: (state) => state.loggingIn = true,
    //     loginStop: (state, errorMessage) => {
    //         state.loggingIn = false;
    //         state.loginError = errorMessage;
    //         state.loginSuccessful = !errorMessage;
    //     },
    // },
    actions: {
        doLogin({ commit }) {
            commit('loginStart');
            index.push({name: RouteNames.Cards});
        },
    },
});

