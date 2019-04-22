import Vue from 'vue';
import Vuex from 'vuex';
import authState from '@/store/auth';
import alertState from '@/store/alert';
import accountState from '@/store/account';
import tasksState from '@/store/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authState,
        alertState,
        accountState,
        tasksState,
    },
});
