<template>
    <header :class="{'no-shadow' : isLoginRoute}">
            <div class="header-item" style="padding-top: 10px;">
                <img class="header-img" src="../../assets/logo.png" alt="Logo">
            </div>
            <div class="header-item">
                <div class="header-item--block" v-if="!isLoginRoute">Username</div>
                <div class="header-item--block" style="padding-left: 30px; padding-right: 30px;" v-if="!isLoginRoute">
                    <img class="user-img" src="../../assets/photo.png" alt="Photo">
                </div>
                <router-link v-if="!isLoginRoute" to="/">
                    <button>Log out</button>
                </router-link>
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
    $mobile: 769px;

    @mixin mobile {
        @media screen and (max-width: $mobile) {
            @content
        }
    }

    header {
        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 10px;
        margin-bottom: 50px;
        &.no-shadow{
            box-shadow: none;
        }
        @include mobile {
            margin-bottom: 80px;
        }
    }
    .header-item {
        display: flex;
        align-items: center;
        @include mobile {
            padding-top: 10px;
        }
    }
    .header-item--block {
        font-family: "Source Sans Pro", sans-serif;
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
        width: 3rem;
        height: 3rem;
    }
</style>
