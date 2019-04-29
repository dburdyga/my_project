<template>
    <div class="modal is-active">
        <div
                @click="finishCardCreation"
                class="modal-background"></div>
        <div class="modal-content">
            <div class="add-task-box box">
                <div class="title is-3 has-text-centered">Create new CR</div>
                <form class="new-task-form">
                    <div class="field">
                        <label for="crNumber">
                            CR Number*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.crNumber.$touch()"
                                    :class="{'is-danger': $v.crNumber.$error}"
                                    v-model="crNumber"
                                    id="crNumber"
                                    type="text"
                                    placeholder="CR Number">
                        </div>
                        <p
                                v-if="$v.crNumber.$dirty && $v.crNumber.$error"
                                class="help is-danger">
                            <span v-if="!$v.crNumber.required">The crNumber is required.</span>
                        </p>
                    </div>
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
                        <label for="project">
                            Project*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.project.$touch()"
                                    :class="{'is-danger': $v.project.$error}"
                                    v-model="project"
                                    id="project"
                                    type="text"
                                    placeholder="Project">
                        </div>
                        <p
                                v-if="$v.project.$dirty && $v.project.$error"
                                class="help is-danger">
                            <span v-if="!$v.project.required">The project is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="jiraLink">
                            Jira Link*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.jiraLink.$touch()"
                                    :class="{'is-danger': $v.jiraLink.$error}"
                                    v-model="jiraLink"
                                    id="jiraLink"
                                    type="text"
                                    placeholder="Jira Link">
                        </div>
                        <p
                                v-if="$v.jiraLink.$dirty && $v.jiraLink.$error"
                                class="help is-danger">
                            <span v-if="!$v.jiraLink.required">The jiraLink is required.</span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="createdAt">
                            Created At*
                        </label>
                        <div class="control">
                            <input
                                    class="input"
                                    @blur="$v.createdAt.$touch()"
                                    :class="{'is-danger': $v.createdAt.$error}"
                                    v-model="createdAt"
                                    id="createdAt"
                                    type="text"
                                    placeholder="Created At">
                        </div>
                        <p
                                v-if="$v.createdAt.$dirty && $v.createdAt.$error"
                                class="help is-danger">
                            <span v-if="!$v.createdAt.required">The createdAt is required.</span>
                        </p>
                    </div>
                    <div class="field is-grouped is-grouped-centered">
                        <div class="control">
                            <button
                                    @click.prevent="addCard"
                                    class="button is-link">Submit</button>
                        </div>
                        <div class="control">
                            <button
                                    @click.prevent="finishCardCreation"
                                    class="button is-text">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <button
                @click="finishCardCreation"
                class="modal-close is-large"></button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions} from 'vuex';
import {ADD_CARD, FINISH_CARD_CREATION} from '../store/cards/action-types';
import {required} from 'vuelidate/lib/validators';
import {UtilService} from '../common/services/UtilService';
import {
    NEW_CARD_TITLE,
    NEW_CARD_JIRALINK,
    NEW_CARD_CRNUMBER,
    NEW_CARD_PROJECT,
    NEW_CARD_CREATEDAT,
} from '../store/cards/getter-types';
import {
    UPDATE_NEW_CARD_TITLE,
    UPDATE_NEW_CARD_JIRALINK, UPDATE_NEW_CARD_CRNUMBER,
    UPDATE_NEW_CARD_PROJECT,
    UPDATE_NEW_CARD_CREATEDAT,
} from '../store/cards/mutation-types';

export default Vue.extend({
    computed: {
        title: UtilService.mapTwoWay<string>(NEW_CARD_TITLE, UPDATE_NEW_CARD_TITLE),
        crNumber: UtilService.mapTwoWay<string>(NEW_CARD_CRNUMBER, UPDATE_NEW_CARD_CRNUMBER),
        project: UtilService.mapTwoWay<string>(NEW_CARD_PROJECT, UPDATE_NEW_CARD_PROJECT),
        jiraLink: UtilService.mapTwoWay<string>(NEW_CARD_JIRALINK, UPDATE_NEW_CARD_JIRALINK),
        createdAt: UtilService.mapTwoWay<string>(NEW_CARD_CREATEDAT, UPDATE_NEW_CARD_CREATEDAT),
    },
    methods: {
        ...mapActions({
            finishCardCreation: FINISH_CARD_CREATION,
        }),
        addCard() {
            if (!this.$v.$invalid) {
                this.$store.dispatch(ADD_CARD);
            }
        },
    },
    validations: {
        title: {required},
        crNumber: {required},
        project: {required},
        createdAt: {required},
        jiraLink: {required},
    },
});
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    .modal-content {
        max-width: 400px;
    }
    .add-task-box {
        background: linear-gradient(-90deg, $blue, $light-purple);
        color: $white;
    }
    .button.is-link {
        background-color: $orange;
        color: $white;
    }
</style>