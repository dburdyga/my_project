import Vue from 'vue';
import Vuex from 'vuex';
import router, {Routes} from '../router';
import {RequirementsService} from '../common/services/RequirementsService';
import {REQUIREMENTS, SIDE_BAR_VISIBLE, NEW_CARD_VISIBLE, REGISTRATION_VISIBLE} from '@/store/getter-types';
import {FETCH_REQUIREMENTS} from '@/store/action-types';
import {SET_REQUIREMENTS, TOOGLE_SIDEBAR, TOOGLE_NEWCARD, TOOGLE_REGISTRATION} from '@/store/mutation-types';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    loggingIn: false,
    loginError: null,
    loginSuccessful: false,
    requirements: [],
    sideBarVisible: false,
    newCardVisible: false,
    RegistrationVisible: false,
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
    [SIDE_BAR_VISIBLE]: (state) => state.sideBarVisible,
    [NEW_CARD_VISIBLE]: (state) => state.newCardVisible,
    [REGISTRATION_VISIBLE]: (state) => state.RegistrationVisible,
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
    [TOOGLE_SIDEBAR](state, payload: boolean) {
      state.sideBarVisible = payload;
    },
    [TOOGLE_NEWCARD](state, payload: boolean) {
      state.newCardVisible = payload;
    },
    [TOOGLE_REGISTRATION](state, payload: boolean) {
      state.RegistrationVisible = payload;
    },
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
