<template>
    <div id="demo">
        <button v-on:click="show = !show">
            Переключить
        </button>
        <transition name="fade">
            <p v-if="show">привет</p>
        </transition>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {SIDE_BAR_VISIBLE} from "@/store/getter-types";
    import {TOOGLE_SIDEBAR} from "@/store/mutation-types";

    export default Vue.extend ({
        state: {
            el: '#demo',
        },
        computed: {
            show: {
                get(): boolean {
                    return this.$store.getters[SIDE_BAR_VISIBLE]
                },
                set(value: boolean) {
                    this.$store.commit(TOOGLE_SIDEBAR, value);
                }
            }
        }
    });





</script>

<style lang="scss"scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

</style>



