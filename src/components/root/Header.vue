<template>
    <header>
        <div class="header-item">
            <router-link to="/list">
                <img v-if="isListRoute" class="header-img" src="../../assets/logo.png" alt="Logo">
            </router-link>
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
                isHidden: false,
            };
        },
        computed: {
            isLoginRoute(): boolean {
                return this.$route.name === Routes.LOGIN;
            },
            isListRoute(): boolean {
                return this.$route.name === Routes.LOGIN;
            },
        },
    });
</script>

<style lang="scss" scoped>
    $white: #ffffff;

    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0px;
    }
    .header-item {
        padding-top: 15px;
        display: flex;
        align-items: center;
    }
    .header-item--block {
        font-family: "Source Sans Pro", sans-serif;
        padding: 1rem;
        color: $white;
        font-size: 16px;
        font-weight: bold;
    }
    h1 {
        color: $white;
    }
    .header-img {
        width: 5rem;
    }
    .user-img {
        width: 3rem;
        height: 3rem;
    }

    @media screen and (max-width: 769px) {
        header {
            margin-bottom: 30px;
        }
        .header-item {
            display: contents;
        }
    }
</style>
