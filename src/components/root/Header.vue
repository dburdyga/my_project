<template>
    <header>
        <div class="header-item">
            <router-link to="/list">
                <img class="header-img" src="../../assets/logo.png" alt="Logo">
            </router-link>
        </div>
        <div class="header-item">
            <h1>{{title}}</h1>
        </div>
        <div class="header-item">
            <div class="header-item--block" v-if="!isLoginRoute">Username</div>
            <div class="header-item--block" v-if="!isLoginRoute">
                <img class="user-img" src="../../assets/photo.png" alt="Photo">
            </div>
        </div>
    </header>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {Routes} from '../../router';


    export default Vue.extend ({
        data() {
            return {
                title: 'Estimation tool',
                isHidden: false
            };
        },
        computed: {
            isLoginRoute(): boolean {
                return this.$route.name === Routes.LOGIN;
            },
        },
        components: {
            Sidebar,
        }
    });
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .header-item {
        display: flex;
        align-items: center;
    }
    .header-item--block {
        padding: 1rem;
        color: white;
        font-size: 16px;
        font-weight: bold;
    }
    h1 {
        color: white;
    }
    .header-img {
        width: 5rem;
    }
    .user-img {
        width: 3rem;
        height: 3rem;
    }
</style>
