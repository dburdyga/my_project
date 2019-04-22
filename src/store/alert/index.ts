import {Module} from 'vuex';
import {IAlert} from '@/common/interfaces/IAlert';
import {ALERTS} from '@/store/alert/getter-types';
import {UtilService} from '@/common/services/UtilService';
import {REMOVE_ALERT} from '@/store/alert/mutation-types';
import {ADD_ALERT} from '@/store/alert/action-types';

interface IAlertState {
    alerts: IAlert[];
}

const alertState: Module<IAlertState, {}> = {
    state: {
        alerts: [],
    },
    actions: {
        [ADD_ALERT]({state, commit}, alert) {
            const alertItem = {
                ...alert,
                id: UtilService.generateUUID(),
            };
            state.alerts.push(alertItem);
            setTimeout(() => {
                commit(REMOVE_ALERT, alertItem);
            }, 10000);
        },
    },
    mutations: {
        [REMOVE_ALERT](state, alert) {
            state.alerts.splice(state.alerts.findIndex((item: IAlert) => item.id === alert.id), 1);
        },
    },
    getters: {
        [ALERTS](state): IAlert[] {
            return state.alerts;
        },
    },
};

export default alertState;
