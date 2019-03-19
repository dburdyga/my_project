import Vue from 'vue';
import Vuex from 'vuex';
import router, {Routes} from './router';
import {RequirementsService} from './common/services/RequirementsService';

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
    requirements: (state) => state.requirements,
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
    updateRequirements: (state, requirements) => {
      state.requirements = requirements;
    },
    updateFilterCrNumber: (state, str) => {
      state.filter.crNumber = str;
    },
    updateFilterCrTitle: (state, str) => {
      state.filter.crTitle = str;
    },
    updateFilterCrStatus: (state, str) => {
      state.filter.crStatus = str;
    },
    updateFilterCrProject: (state, str) => {
      state.filter.crProject = str;
    },
    updateFilterCrDate: (state, str) => {
      state.filter.crDate = str;
    },
  },
  actions: {
    getRequirements({ commit }) {
      RequirementsService.getRequirements()
          .then((requirements) => commit('updateRequirements', requirements));
    },
    doLogin({ commit }) {
      commit('loginStart');
      router.push({name: Routes.HOME});
    },
  },
});
