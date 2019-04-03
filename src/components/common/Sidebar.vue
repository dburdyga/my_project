<template>
    <div class="menu" v-if="!isLoginRoute">
        <div class="menu-bar" v-on:click="show = !show">
            <img src="../../assets/menu.png" alt="menu icon" class="menu-img">
        </div>
        <transition name="fade">
            <div v-if="show" class="sidebar">
                <div class="cross" v-on:click="show = !show">
                    <img src="../../assets/cross.png" alt="cross icon" class="cross-img">
                </div>
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
    import {Routes} from '../../router';
    import {SIDE_BAR_VISIBLE} from "@/store/getter-types";
    import {TOOGLE_SIDEBAR} from "@/store/mutation-types";

    export default Vue.extend ({
        state: {
            el: 'menu',
        },
        computed: {
            isLoginRoute(): boolean {
                return this.$route.name === Routes.LOGIN;
            },
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
    $white: #ffffff;
    $light-purple: #6b4fbb;

    .menu-bar{
        float: left;
        margin-left: 10px;
        margin-top: 18px;
    }
    .sidebar {
        border-radius: 5px;
        height: 150px;
        margin-right: 90%;
        background-color: $light-purple;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .menu-img {
        width: 50px;
    }
    a {
        text-decoration: none;
    }
    .sidebar-content {
        margin: 37px;
    }
    .sidebar-item {
        font-weight: bold;
        color: $white;
        margin-bottom: 10px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .cross-img {
        width: 15px;
        float: right;
        padding-top: 5px;
        padding-right: 5px;
    }

</style>



