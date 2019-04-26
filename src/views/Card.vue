<template>
    <div class="tasks">
            <header class="tasks-header">
                <h1 class="title is-2">Card</h1>
            </header>
            <div class="card">
                <p>{{card.crNumber}}</p>
                <p>{{card.title}}</p>
                <p>{{card.project}}</p>
                <p>{{card.jiraLink}}</p>
                <p>{{card.createdAt}}</p>
            </div>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import {GET_CARD} from "@/store/cards/action-types";
    import {ICard} from "@/common/interfaces/ICard";

    export default Vue.extend({
        props: {
            cardId: {
                type: String
            }
        },
        data() {
          return {
              card: {} as ICard
          }
        },
        created(): void {
            this.$store.dispatch(GET_CARD, this.cardId)
                .then((card: ICard) => this.card = card);
        }
    });
</script>






<style lang="scss" scoped>
    @import '../styles/variables';



</style>