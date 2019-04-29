<template>
    <div class="tasks">
        <div class="container">
            <header class="tasks-header">
                <h1 class="title is-2">Tasks</h1>
                <button
                        class="button is-primary"
                        @click="addTask">Add Task</button>
            </header>
            <div
                    v-if="tasks.length && !isLoading"
                    class="table-container">
                <table
                        class="table">
                    <thead>
                    <tr>
                        <th>Sub Tasks</th>
                        <th>Description</th>
                        <th>Effort</th>
                        <th>Estimator</th>
                        <th>DVK</th>
                        <th>IMP</th>
                        <th>E-Test</th>
                        <th>Completed</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="task in tasks">
                        <td>{{ task.title }}</td>
                        <td>{{ task.description }}</td>
                        <td>{{ task.effort }}</td>
                        <td>{{ task.estimator }}</td>
                        <td>{{ task.dvk }}</td>
                        <td>{{ task.imp }}</td>
                        <td>{{ task.etest }}</td>
                        <td>{{ task.completed }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p v-else-if="!tasks.length && !isLoading">no tasks yet</p>
        </div>
        <AddTask
                :cardId="cardId"
                v-if="isTaskCreationStarted"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters, mapMutations} from 'vuex';
import {IS_TASK_CREATION_STARTED, TASKS, TASKS_LOADING} from '../store/tasks/getter-types';
import {GET_TASKS, START_TASK_CREATION} from '../store/tasks/action-types';
import AddTask from '@/components/AddTask.vue';
import {RESET_TASKS} from '../store/tasks/mutation-types';

export default Vue.extend({
    components: {AddTask},
    props: {
        cardId: {
            type: String,
        },
    },
    created() {
        this.getTasks(this.cardId);
    },
    destroyed() {
        this.resetTasks();
    },
    computed: {
        ...mapGetters({
            tasks: TASKS,
            isTaskCreationStarted: IS_TASK_CREATION_STARTED,
            isLoading: TASKS_LOADING,
        }),
    },
    methods: {
        ...mapActions({
            getTasks: GET_TASKS,
            addTask: START_TASK_CREATION,
        }),
        ...mapMutations({
            resetTasks: RESET_TASKS,
        }),
    },
});
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    .table {
        min-width: 380px;
    }

    .button.is-primary {
        background-color: $orange;
    }

    .tasks-header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .title {
            margin-bottom: 0;
        }
    }
</style>