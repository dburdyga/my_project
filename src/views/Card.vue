<template>
    <div class="tasks">
        <div class="container">
            <header class="tasks-header">
                <h1 class="title is-2">Card</h1>
            </header>
            <div class="card" v-if="!isLoading">
                <h4 class="card-title"><strong>CR Number: </strong>{{card.crNumber}}</h4>
                <div class="card-item">
                    <p><strong>Title: </strong>{{card.title}}</p>
                    <p><strong>Project: </strong>{{card.project}}</p>
                    <p><strong>Jira Link: </strong>{{card.jiraLink}}</p>
                    <p><strong>Created at: </strong>{{card.createdAt}}</p>
                </div>
            </div>
            <p v-else-if="!isLoading">no cards yet</p>
            <div v-else class="spinner-container">
                <div class="spinner"/>
            </div>
        </div>
        <Tasks :cardId="cardId"/>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import {GET_CARD} from '@/store/cards/action-types';
import {ICard} from '@/common/interfaces/ICard';
import Tasks from '../views/Tasks.vue';
import {mapGetters} from 'vuex';
import {CARDS_LOADING} from '../store/cards/getter-types';

export default Vue.extend({
    props: {
        cardId: {
            type: String,
        },
    },
    data() {
      return {
          card: {} as ICard,
      };
    },
    created(): void {
        this.$store.dispatch(GET_CARD, this.cardId)
            .then((card: ICard) => this.card = card);
    },
    components: {
        Tasks,
    },
    computed: {
        ...mapGetters({

            isLoading: CARDS_LOADING,
        }),
    },
});
</script>


<style lang="scss" scoped>
    @import '../styles/variables';
    @import '../styles/mixins';

    .card {
        padding-left: 10px;
        padding-right: 10px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        margin-bottom: 20px;
        color: $purple;
        display: flex;
        border-radius: 3px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        border-top: 5px solid $orange;
        border-left-width: 0px;
        border-right-width: 0px;
        border-bottom-width: 0px;
        padding-top: 14px;
        padding-bottom: 14px;
        @include mobile {
            display: inline-table;
            font-size: 14px;
            width: 100%;
            text-align: center;
        }
    }
    .content p:not(:last-child) {
        margin-bottom: 0px;
    }
    strong{
        color: $purple;
    }
    .card-item {
        display: flex;
        justify-content: space-around;
        @include mobile {
            display: table;
            font-size: 18px;
            text-align: center;
            width: 100%;
        }
    }
    .card-title {
        margin-right: auto;
        margin-left: auto;
        color: $purple;
        font-weight: normal;
        margin-bottom: 30px;
        @include mobile {
            font-size: 18px;
        }
    }
    .card-title::after {
        content: '';
        position: absolute;
        left: 1%;
        display: inline-block;
        height: 30px;
        width: 98%;
        border-bottom: 2px solid;
        margin-top: 5px;
        color: $grey2;
    }
</style>
