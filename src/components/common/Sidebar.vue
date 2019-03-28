<template>
    <div class="sidebar" v-if="!isLoginRoute">
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
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Routes} from '../../router';

    export default Vue.extend ({
        computed: {
            isLoginRoute(): boolean {
                return this.$route.name === Routes.LOGIN;
            },
        },
    });

</script>

<style lang="scss" scoped>
    .sidebar {
        margin-left: 90%;
        margin-bottom: 35%;
        background-color: rgba(248, 249, 250, 0.7);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
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

</style>
