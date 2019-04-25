<template>
    <div class="tasks">
        <div class="container">
            <header class="tasks-header">
                <h1 class="title is-2">Requirements</h1>
                <button
                        class="button is-primary"
                        @click="addCard">Create new CR</button>
            </header>
            <div
                    v-if="cards.length && !isLoading"
                    class="table-container">
                <table
                        class="table">
                    <thead>
                    <tr>
                        <th>CR Number</th>
                        <th>Title</th>
                        <th>Project</th>
                        <th>Jira Link</th>
                        <th>Created at</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="card in cards">
                            <td>
                                <router-link :to="{name: $routeNames.OpenCard}">
                                    {{ card.crNumber }}
                                </router-link>
                            </td>
                            <td>{{ card.title }}</td>
                            <td>{{ card.project }}</td>
                            <td>{{ card.jiraLink }}</td>
                            <td>{{ card.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p v-else-if="!cards.length && !isLoading">no cards yet</p>
            <div v-else class="spinner-container">
                <div class="spinner"/>
            </div>
        </div>
        <AddCard v-if="isCardCreationStarted"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapActions, mapGetters, mapMutations} from 'vuex';
    import {IS_CARD_CREATION_STARTED, CARDS, CARDS_LOADING} from '../store/cards/getter-types';
    import {GET_CARDS, START_CARD_CREATION} from '../store/cards/action-types';
    import AddCard from '@/components/AddCard.vue';
    import {RESET_CARDS} from '../store/cards/mutation-types';

    export default Vue.extend({
        components: {AddCard},
        created() {
            this.getCards();
        },
        destroyed() {
            this.resetCards();
        },
        computed: {
            ...mapGetters({
                cards: CARDS,
                isCardCreationStarted: IS_CARD_CREATION_STARTED,
                isLoading: CARDS_LOADING,
            }),
        },
        methods: {
            ...mapActions({
                getCards: GET_CARDS,
                addCard: START_CARD_CREATION,
                // openCard: OPEN_CARD,
            }),
            ...mapMutations({
                resetCards: RESET_CARDS,
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