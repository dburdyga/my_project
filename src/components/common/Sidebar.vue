<template>
    <div id="demo">
        <button class="menu-button" v-on:click="show = !show">
            MENU
        </button>
        <transition name="fade">
            <div v-if="show" class="sidebar">
                <div class="sidebar-content">
                    <router-link to="/list">
                        <div class="sidebar-item">List</div>
                    </router-link>
                    <router-link to="/card">
                        <div class="sidebar-item">Card</div>
                    </router-link>
                    <router-link to="/">
                        <div class="sidebar-item">Logout</div>
                    </router-link>
                </div>
            </div>
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
    $orange-color: #ff6600;

    .sidebar {
        height: 150px;
        margin-left: 90%;
        background-color: rgba(248, 249, 250, 0.7);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .menu-button {
        height: 25px;
        width: 70px;
        background: $orange-color;
        color: white;
        border: none;
        margin: 10px 10px;
        border-radius: 3px;
        font-weight: bold;
    }
    a {
        text-decoration: none;
    }
    .sidebar-content {
        margin: 37px;
    }
    .sidebar-item {
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 10px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

</style>



