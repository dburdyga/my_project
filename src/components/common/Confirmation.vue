<template>
    <!--<Modal @close="close">-->
        <!--<form class="form">-->

        <!--</form>-->
    <!--</Modal>-->
    <div>
        <img v-if="!show" class="icon" src="../../assets/edit.png" alt="Edit">
        <img v-if="!show" v-on:click="show = !show" class="icon" src="../../assets/delete.png" alt="Delete">
        <transition name="slide-fade" >
            <form v-if="show">
                <h3>Confirmation</h3>
                <p>Are you sure you want to delete this item?</p>
                <button>Yes</button>
                <button v-on:click="show = !show">No</button>
            </form>
        </transition>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {NEW_CARD_VISIBLE} from '../../store/getter-types';
    import {TOOGLE_NEWCARD} from '../../store/mutation-types';

    export default Vue.extend({
        computed: {
            show: {
                get(): boolean {
                    return this.$store.getters[NEW_CARD_VISIBLE];
                },
                set(value: boolean) {
                    this.$store.commit(TOOGLE_NEWCARD, value);
                },
            },
        },
    });

</script>

<style lang="scss" scoped>
    form {
        background-color: #6b4fbb;
        color: white;
        border-radius: 3px;
        padding: 5px;
    }
    button {
        margin: 5px;
    }
    .slide-fade-enter-active, .slide-fade-leave-active  {
        transition: all .5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        opacity: 0;
    }

</style>