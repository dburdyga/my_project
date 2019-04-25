<template>
    <div class="modal is-active">
        <div
                @click="finishCardCreation"
                class="modal-background"></div>
        <div class="modal-content">
            <div class="add-task-box box">
                <div class="title is-3 has-text-centered">Add new card</div>
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
    import {NEW_CARD_TITLE} from '../store/cards/getter-types';
    import {
        UPDATE_NEW_CARD_TITLE,

    } from '../store/cards/mutation-types';

    export default Vue.extend({
        computed: {
            title: UtilService.mapTwoWay<string>(NEW_CARD_TITLE, UPDATE_NEW_CARD_TITLE),
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