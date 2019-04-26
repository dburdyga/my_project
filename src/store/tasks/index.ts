import {Module} from 'vuex';
import {ITask} from '@/common/interfaces/ITask';
import {ADD_TASK, FINISH_TASK_CREATION, GET_TASKS, START_TASK_CREATION} from '@/store/tasks/action-types';
import {TaskService} from '@/common/services/TaskService';
import {
    RESET_NEW_TASK, RESET_TASKS, UPDATE_NEW_TASK_EFFORT,
    UPDATE_NEW_TASK_COMPLETED,
    UPDATE_NEW_TASK_DESCRIPTION,
    UPDATE_NEW_TASK_TITLE,
    UPDATE_NEW_TASK_DVK,
    UPDATE_TASK_CREATION_STARTED,
    UPDATE_TASKS, UPDATE_TASKS_LOADING, UPDATE_NEW_TASK_ESTIMATOR,
    UPDATE_NEW_TASK_IMP,
    UPDATE_NEW_TASK_ETEST,
} from '@/store/tasks/mutation-types';
import {
    IS_TASK_CREATION_STARTED, NEW_TASK_EFFORT,
    NEW_TASK_COMPLETED,
    NEW_TASK_DESCRIPTION,
    NEW_TASK_TITLE,
    NEW_TASK_DVK,
    TASKS, TASKS_LOADING, NEW_TASK_ESTIMATOR, NEW_TASK_IMP,
    NEW_TASK_ETEST,
} from '@/store/tasks/getter-types';
import {ADD_ALERT} from '@/store/alert/action-types';
import {AlertType} from '@/common/interfaces/IAlert';

interface ITasksState {
    isLoading: boolean;
    tasks: ITask[];
    isTaskCreationStarted: boolean;
    newTask: ITask;
}

const INITIAL_TASK: ITask = {
    userId: '',
    title: '',
    description: '',
    completed: false,
    effort: '',
    estimator: '',
    dvk: '',
    imp: '',
    etest: '',
};

const accountState: Module<ITasksState, {}> = {
    state: {
        tasks: [],
        isLoading: false,
        isTaskCreationStarted: false,
        newTask: {...INITIAL_TASK},
    },
    actions: {
        [GET_TASKS]({state, commit, dispatch}, cardId: string) {
            commit(UPDATE_TASKS_LOADING, true);
            return TaskService.getTasksByCardId(cardId)
                .then((tasks: ITask[]) => {
                    commit(UPDATE_TASKS, tasks);
                    commit(UPDATE_TASKS_LOADING, false);
                    return tasks;
                })
                .catch((err) => {
                    commit(UPDATE_TASKS_LOADING, false);
                    dispatch(ADD_ALERT, {
                        type: AlertType.SUCCESS,
                        text: err.message,
                    });
                });
        },
        [START_TASK_CREATION]({state, commit}) {
            commit(UPDATE_TASK_CREATION_STARTED, true);
        },
        [FINISH_TASK_CREATION]({state, commit}) {
            commit(UPDATE_TASK_CREATION_STARTED, false);
            commit(RESET_NEW_TASK);
        },
        [ADD_TASK]({state, dispatch}) {
            return TaskService.addTask(state.newTask)
                .then(() => {
                    dispatch(GET_TASKS);
                    dispatch(ADD_ALERT, {
                        type: AlertType.SUCCESS,
                        text: `'${state.newTask.title}' task has been successfully created!`,
                    });
                    dispatch(FINISH_TASK_CREATION);
                })
                .catch((err) => {
                    dispatch(ADD_ALERT, {
                        type: AlertType.SUCCESS,
                        text: err.message,
                    });
                });
        },
    },
    mutations: {
        [UPDATE_TASKS](state, tasks) {
            state.tasks = tasks;
        },
        [UPDATE_TASKS_LOADING](state, value: boolean) {
            state.isLoading = value;
        },
        [UPDATE_TASK_CREATION_STARTED](state, value: boolean) {
            state.isTaskCreationStarted = value;
        },
        [UPDATE_NEW_TASK_TITLE](state, value: string) {
            state.newTask.title = value;
        },
        [UPDATE_NEW_TASK_DESCRIPTION](state, value: string) {
            state.newTask.description = value;
        },
        [UPDATE_NEW_TASK_EFFORT](state, value: string) {
            state.newTask.effort = value;
        },
        [UPDATE_NEW_TASK_ESTIMATOR](state, value: string) {
            state.newTask.estimator = value;
        },
        [UPDATE_NEW_TASK_ETEST](state, value: string) {
            state.newTask.etest = value;
        },
        [UPDATE_NEW_TASK_DVK](state, value: string) {
            state.newTask.dvk = value;
        },
        [UPDATE_NEW_TASK_IMP](state, value: string) {
            state.newTask.imp = value;
        },
        [UPDATE_NEW_TASK_COMPLETED](state, value: boolean) {
            state.newTask.completed = value;
        },
        [RESET_NEW_TASK](state) {
            state.newTask = {...INITIAL_TASK};
        },
        [RESET_TASKS](state) {
            state.tasks = [];
        },
    },
    getters: {
        [TASKS](state): ITask[] {
            return state.tasks;
        },
        [TASKS_LOADING](state): boolean {
            return state.isLoading;
        },
        [IS_TASK_CREATION_STARTED](state): boolean {
            return state.isTaskCreationStarted;
        },
        [NEW_TASK_TITLE](state): string {
            return state.newTask.title;
        },
        [NEW_TASK_DESCRIPTION](state): string {
            return state.newTask.description;
        },
        [NEW_TASK_COMPLETED](state): boolean {
            return state.newTask.completed;
        },
        [NEW_TASK_EFFORT](state): string {
            return state.newTask.effort;
        },
        [NEW_TASK_ETEST](state): string {
            return state.newTask.etest;
        },
        [NEW_TASK_DVK](state): string {
            return state.newTask.dvk;
        },
        [NEW_TASK_ESTIMATOR](state): string {
            return state.newTask.estimator;
        },
        [NEW_TASK_IMP](state): string {
            return state.newTask.imp;
        },
    },
};

export default accountState;
