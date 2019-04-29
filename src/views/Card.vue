<template>
    <div class="tasks">
        <div class="container">
            <header class="tasks-header">
                <h1 class="title is-2">Card</h1>
            </header>
            <div class="card">
                <div class="card-item">
                    <p><strong>CR Number: </strong>{{card.crNumber}}</p>
                    <p><strong>Title: </strong>{{card.title}}</p>
                    <p><strong>Project: </strong>{{card.project}}</p>
                </div>
                <div class="card-item">
                    <p><strong>Jira Link: </strong>{{card.jiraLink}}</p>
                    <p><strong>Created at: </strong>{{card.createdAt}}</p>
                </div>
            </div>
        </div>
        <Tasks/>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import {GET_CARD} from '@/store/cards/action-types';
import {ICard} from '@/common/interfaces/ICard';
import Tasks from '../views/Tasks.vue';

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
});
</script>



<style lang="scss" scoped>
    @import '../styles/variables';

    .card {
        padding-left: 0px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        margin-bottom: 20px;
        color: $purple;
        display: flex;
        border-radius: 3px;
    }
    .content p:not(:last-child) {
        margin-bottom: 0px;
    }
    strong{
        color: $purple;
    }
    .card-item {
        margin-right: 100px;
        margin-left: 20px;
    }


</style>