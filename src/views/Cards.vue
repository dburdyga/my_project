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
                                <router-link :to="{name: routeNames.Card, params: {cardId: card.id}}">
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
            <Pagination
                    :numberOfPages="numberOfPages"
                    :requirementsTotal="requirementsTotal"
                    :requirementsPerPage="2"
                    @page-selected="changeStartPage"/>
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
import Pagination from '../views/Pagination.vue';
import {RESET_CARDS} from '../store/cards/mutation-types';
import {RouteNames} from '@/router/RouteNames';
import {ICard} from '@/common/interfaces/ICard';

export default Vue.extend({
    components: {
        AddCard,
        Pagination
    },
    data() {
      return {
          routeNames: RouteNames,
          requirementsPerPage: 2,
          startPage: 0,
      };
    },
    created() {
        this.getCards();
    },
    destroyed() {
        this.resetCards();
    },
    computed: {
        ...mapGetters({
            isCardCreationStarted: IS_CARD_CREATION_STARTED,
            isLoading: CARDS_LOADING,
        }),
        cards(): ICard[] {
            return  this.$store.getters[CARDS].slice(this.startPage, this.startPage + this.requirementsPerPage);
        },
        numberOfPages(): number {
            return Math.round(this.requirementsTotal / this.requirementsPerPage);
        },
        requirementsTotal(): number {
            return this.$store.getters[CARDS].length;
        },
    },
    methods: {
        ...mapActions({
            getCards: GET_CARDS,
            addCard: START_CARD_CREATION,
        }),
        ...mapMutations({
            resetCards: RESET_CARDS,
        }),
        changeStartPage(index: number) {
            this.startPage = this.requirementsPerPage * index;
        },
    },
});
</script>

<style lang="scss" scoped>
    @import '../styles/variables';
    @import '../styles/mixins';

    p {
        color: $white;
    }

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
