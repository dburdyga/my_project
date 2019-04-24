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
                            Sub Tasks*
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
                            <input
                              class="input"
                              @blur="$v.description.$touch()"
                              :class="{'is-danger': $v.description.$error}"
                              v-model="description"
                              id="description"
                              type="text"
                              placeholder="Description">
                        </div>
                        <p
                                v-if="$v.description.$dirty && $v.description.$error"
                                class="help is-danger">
                            <span v-if="!$v.description.required">The description is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="effort">
                            Effort*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.effort.$touch()"
                                    :class="{'is-danger': $v.effort.$error}"
                                    v-model="effort"
                                    id="effort"
                                    type="text"
                                    placeholder="Effort">
                        </div>
                        <p
                                v-if="$v.effort.$dirty && $v.effort.$error"
                                class="help is-danger">
                            <span v-if="!$v.effort.required">The effort is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="title">
                            Estimator*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.estimator.$touch()"
                                    :class="{'is-danger': $v.estimator.$error}"
                                    v-model="estimator"
                                    id="estimator"
                                    type="text"
                                    placeholder="Estimator">
                        </div>
                        <p
                                v-if="$v.estimator.$dirty && $v.estimator.$error"
                                class="help is-danger">
                            <span v-if="!$v.estimator.required">The estimator is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="title">
                            DVK*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.dvk.$touch()"
                                    :class="{'is-danger': $v.dvk.$error}"
                                    v-model="dvk"
                                    id="dvk"
                                    type="text"
                                    placeholder="DVK">
                        </div>
                        <p
                                v-if="$v.dvk.$dirty && $v.dvk.$error"
                                class="help is-danger">
                            <span v-if="!$v.dvk.required">The dvk is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="title">
                            IMP*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.imp.$touch()"
                                    :class="{'is-danger': $v.imp.$error}"
                                    v-model="imp"
                                    id="imp"
                                    type="text"
                                    placeholder="IMP">
                        </div>
                        <p
                                v-if="$v.imp.$dirty && $v.imp.$error"
                                class="help is-danger">
                            <span v-if="!$v.imp.required">The imp is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="title">
                            E-Test*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.etest.$touch()"
                                    :class="{'is-danger': $v.etest.$error}"
                                    v-model="etest"
                                    id="etest"
                                    type="text"
                                    placeholder="E-Test">
                        </div>
                        <p
                                v-if="$v.etest.$dirty && $v.etest.$error"
                                class="help is-danger">
                            <span v-if="!$v.etest.required">The etest is required.</span>
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
import {NEW_TASK_ESTIMATOR, NEW_TASK_ETEST, NEW_TASK_IMP, NEW_TASK_DVK, NEW_TASK_EFFORT, NEW_TASK_COMPLETED, NEW_TASK_DESCRIPTION, NEW_TASK_TITLE} from '../store/tasks/getter-types';
import {
    UPDATE_NEW_TASK_EFFORT,
    UPDATE_NEW_TASK_ETEST,
    UPDATE_NEW_TASK_DVK,
    UPDATE_NEW_TASK_COMPLETED,
    UPDATE_NEW_TASK_DESCRIPTION,
    UPDATE_NEW_TASK_TITLE,
    UPDATE_NEW_TASK_ESTIMATOR,
    UPDATE_NEW_TASK_IMP,
} from '../store/tasks/mutation-types';

export default Vue.extend({
    computed: {
        title: UtilService.mapTwoWay<string>(NEW_TASK_TITLE, UPDATE_NEW_TASK_TITLE),
        description: UtilService.mapTwoWay<string>(NEW_TASK_DESCRIPTION, UPDATE_NEW_TASK_DESCRIPTION),
        completed: UtilService.mapTwoWay<string>(NEW_TASK_COMPLETED, UPDATE_NEW_TASK_COMPLETED),
        effort: UtilService.mapTwoWay<string>(NEW_TASK_EFFORT, UPDATE_NEW_TASK_EFFORT),
        estimator: UtilService.mapTwoWay<string>(NEW_TASK_ESTIMATOR, UPDATE_NEW_TASK_ESTIMATOR),
        dvk: UtilService.mapTwoWay<string>(NEW_TASK_DVK, UPDATE_NEW_TASK_DVK),
        imp: UtilService.mapTwoWay<string>(NEW_TASK_IMP, UPDATE_NEW_TASK_IMP),
        etest: UtilService.mapTwoWay<string>(NEW_TASK_ETEST, UPDATE_NEW_TASK_ETEST),
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
        effort: {required},
        estimator: {required},
        dvk: {required},
        imp: {required},
        etest: {required},
    },
});
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    .modal-content {
        max-width: 400px;
    }
    .add-task-box {
        background-color: $light-purple;
        color: $white;
    }
    .button.is-link {
        background-color: $orange;
        color: $white;
    }
</style>