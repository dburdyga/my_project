import Vue from 'vue';
import Vuex from 'vuex';
import authState from '@/store/auth';
import alertState from '@/store/alert';
import accountState from '@/store/account';
import tasksState from '@/store/tasks';
import cardsState from '@/store/cards';
import index from '../router/index';
import {RouteNames} from '@/router/RouteNames';
import {RequirementsService} from '@/common/services/RequirementsService';
import {FETCH_REQUIREMENTS} from '@/store/action-types';
import {REQUIREMENTS} from '@/store/getter-types';
import {SET_REQUIREMENTS} from '@/store/mutation-types';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authState,
        alertState,
        accountState,
        tasksState,
        cardsState,
    },
    state: {
        loggingIn: false,
        loginError: null,
        loginSuccessful: false,
        requirements: [],
        sideBarVisible: false,
        filter: {
            crNumber: '',
            crTitle: '',
            crStatus: '',
            crProject: '',
            crDate: '',
        },
    },
    getters: {
        [REQUIREMENTS]: (state) => state.requirements,
        filter: (state) => state.filter,
    },
    mutations: {
        loginStart: (state) => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
            state.loggingIn = false;
            state.loginError = errorMessage;
            state.loginSuccessful = !errorMessage;
        },
        [SET_REQUIREMENTS](state, requirements) {
            state.requirements = requirements;
        },
        // [TOOGLE_SIDEBAR](state, payload: boolean) {
        //     state.sideBarVisible = payload;
        // },
    },
    actions: {
        [FETCH_REQUIREMENTS]({ commit }) {
            RequirementsService.getRequirements()
                .then((requirements) => commit(SET_REQUIREMENTS, requirements));
        },
        doLogin({ commit }) {
            commit('loginStart');
            index.push({name: RouteNames.Cards});
        },
    },
});

