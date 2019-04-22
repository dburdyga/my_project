<template>
    <div class="modal is-active">
        <div
                @click="finishTaskCreation"
                class="modal-background"></div>
        <div class="modal-content">
            <div class="add-task-box box">
                <div class="title is-3 has-text-centered">Add new task</div>
                <form class="new-task-form">
                    <div class="field">
                        <label for="title">
                            Title*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.title.$touch()"
                                    :class="{'is-danger': $v.title.$error}"
                                    v-model="title"
                                    id="title"
                                    type="text"
                                    placeholder="Title">
                        </div>
                        <p
                                v-if="$v.title.$dirty && $v.title.$error"
                                class="help is-danger">
                            <span v-if="!$v.title.required">The title is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="description">
                            Description*
                        </label>
                        <div class="control">
              <textarea
                      class="input"
                      @blur="$v.description.$touch()"
                      :class="{'is-danger': $v.description.$error}"
                      v-model="description"
                      id="description"
                      type="text"
                      placeholder="Title"/>
                        </div>
                        <p
                                v-if="$v.description.$dirty && $v.description.$error"
                                class="help is-danger">
                            <span v-if="!$v.description.required">The description is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="description">
                            Completed*
                        </label>
                        <div class="control">
                            <button
                                    @click="completed = !completed"
                                    :class="completed ? 'is-primary' : 'is-danger'"
                                    class="button"
                                    type="button">{{ completed ? '&#x2611;' : '&#x2610;' }}</button>
                        </div>
                    </div>
                    <div class="field is-grouped is-grouped-centered">
                        <div class="control">
                            <button
                                    @click.prevent="addTask"
                                    class="button is-link">Submit</button>
                        </div>
                        <div class="control">
                            <button
                                    @click.prevent="finishTaskCreation"
                                    class="button is-text">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <button
                @click="finishTaskCreation"
                class="modal-close is-large"></button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions} from 'vuex';
import {ADD_TASK, FINISH_TASK_CREATION} from '../store/tasks/action-types';
import {required} from 'vuelidate/lib/validators';
import {UtilService} from '../common/services/UtilService';
import {NEW_TASK_COMPLETED, NEW_TASK_DESCRIPTION, NEW_TASK_TITLE} from '../store/tasks/getter-types';
import {
    UPDATE_NEW_TASK_COMPLETED,
    UPDATE_NEW_TASK_DESCRIPTION,
    UPDATE_NEW_TASK_TITLE,
} from '../store/tasks/mutation-types';

export default Vue.extend({
    computed: {
        title: UtilService.mapTwoWay<string>(NEW_TASK_TITLE, UPDATE_NEW_TASK_TITLE),
        description: UtilService.mapTwoWay<string>(NEW_TASK_DESCRIPTION, UPDATE_NEW_TASK_DESCRIPTION),
        completed: UtilService.mapTwoWay<string>(NEW_TASK_COMPLETED, UPDATE_NEW_TASK_COMPLETED),
    },
    methods: {
        ...mapActions({
            finishTaskCreation: FINISH_TASK_CREATION,
        }),
        addTask() {
            if (!this.$v.$invalid) {
                this.$store.dispatch(ADD_TASK);
            }
        },
    },
    validations: {
        title: {required},
        description: {required},
    },
});
</script>

<style lang="scss" scoped>
    .modal-content {
        max-width: 400px;
    }
</style>