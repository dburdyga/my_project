import {Module} from 'vuex';
import {UPDATE_CURRENT_USER} from '@/store/auth/mutation-types';
import {CURRENT_USER} from '@/store/auth/getter-types';
import {RouteNames} from '@/router/RouteNames';
import {AuthService} from '@/common/services/AuthService';
import {AlertType} from '@/common/interfaces/IAlert';
import router from '@/router';
import {UtilService} from '@/common/services/UtilService';
import {LOGIN, LOGOUT, REGISTER} from '@/store/auth/action-types';
import {ADD_ALERT} from '@/store/alert/action-types';

interface IAuthState {
    currentUser: firebase.User | null;
}

const authState: Module<IAuthState, {}> = {
    state: {
        currentUser: null,
    },
    actions: {
        [LOGIN]({commit, dispatch}, payload: { email: string; password: string; }) {
            return AuthService.login(payload)
                .then((res) => {
                    commit(UPDATE_CURRENT_USER, res.user);
                    dispatch(ADD_ALERT, {
                        type: AlertType.SUCCESS,
                        text: 'You are logged in now',
                    });
                    router.push(UtilService.getRedirectPath(router.currentRoute));
                })
                .catch((err) => {
                    dispatch(ADD_ALERT, {
                        type: AlertType.ERROR,
                        text: err.message,
                    });
                });
        },
        [REGISTER]({commit, dispatch}, payload: { email: string; password: string; }) {
            return AuthService.register(payload)
                .then((res) => {
                    commit(UPDATE_CURRENT_USER, res.user);
                    dispatch(ADD_ALERT, {
                        type: AlertType.SUCCESS,
                        text: 'Thank you for signing up!',
                    });
                    router.push(UtilService.getRedirectPath(router.currentRoute));
                })
                .catch((err) => {
                    dispatch(ADD_ALERT, {
                        type: AlertType.ERROR,
                        text: err.message,
                    });
                });
        },
        [LOGOUT]({commit}) {
            return AuthService.logout()
                .then(() => {
                    commit(UPDATE_CURRENT_USER, null);
                    router.push({
                        name: RouteNames.Login,
                        query: { redirect: router.currentRoute.fullPath },
                    });
                });
        },
    },
    mutations: {
        [UPDATE_CURRENT_USER](state, user) {
            state.currentUser = user instanceof Object ? {...user} : user;
        },
    },
    getters: {
        [CURRENT_USER](state): firebase.User | null {
            return state.currentUser;
        },
    },
};

export default authState;
