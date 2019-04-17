<template>
    <header>
            <div class="header-item">
                <img class="header-img" src="../../assets/logo.png" alt="Logo">
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
                isHidden: false,
            };
        },
        computed: {
            isLoginRoute(): boolean {
                return this.$route.name === Routes.LOGIN;
            }
        },
    });
</script>

<style lang="scss" scoped>
    $white: #ffffff;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 30px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        padding-bottom: 10px;
        margin-bottom: 50px;
    }
    .header-item {
        padding-top: 5px;
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
        width: 4.5rem;
    }
    .user-img {
        width: 3.5rem;
        height: 3.5rem;
    }
    @media screen and (max-width: 769px) {
        header {
            margin-bottom: 80px;
        }
        .header-item {
            padding-top: 10px;
        }
    }
</style>
