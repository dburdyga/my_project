import Vue from 'vue';
import Vuex from 'vuex';
import router, {Routes} from '../router';
import {RequirementsService} from '../common/services/RequirementsService';
import {REQUIREMENTS} from '@/store/getter-types';
import {FETCH_REQUIREMENTS} from '@/store/action-types';
import {SET_REQUIREMENTS} from '@/store/mutation-types';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    loggingIn: false,
    loginError: null,
    loginSuccessful: false,
    requirements: [],
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
    sorterdReq: (state) => state.requirements.sort(),
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
    }
  },
  actions: {
    [FETCH_REQUIREMENTS]({ commit }) {
      RequirementsService.getRequirements()
          .then((requirements) => commit(SET_REQUIREMENTS, requirements));
    },
    doLogin({ commit }) {
      commit('loginStart');
      router.push({name: Routes.HOME});
    },
  },
});
