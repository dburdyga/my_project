<template>
    <header :class="{'no-shadow' : isLoginRoute}">
            <div class="header-item" style="padding-top: 10px;">
                <img class="header-img" src="../../assets/logo.png" alt="Logo">
            </div>
            <div class="desktop-menu is-hidden-mobile">
                <div class="header-item">
                    <div class="header-item--block" v-if="isLoggedIn && !isLoginRoute">{{currentUser}}</div>
                    <div class="header-item--block" style="padding-left: 30px; padding-right: 30px;" v-if="!isLoginRoute">
                        <img class="user-img" src="../../assets/chick.jpeg" alt="Photo">
                    </div>
                    <button v-if="isLoggedIn && !isLoginRoute" v-on:click="logout">Logout</button>

                </div>
            </div>
            <div class="mobile-menu is-hidden-desktop" v-if="!isLoginRoute">
                <button
                        @click="isMobileMenuOpen = !isMobileMenuOpen"
                        style="background-color: transparent">
                        <img src="../../assets/menu.png"
                             alt="menu icon"
                             class="menu-img">
                        <!--{{ isMobileMenuOpen }}-->
                </button>
                <div v-if="isMobileMenuOpen" class="popup-menu">
                    <form class="form">
                        <div class="header-item">
                            <div class="header-item--block" v-if="isLoggedIn && !isLoginRoute">{{currentUser}}</div>
                            <div class="header-item--block" style="padding-left: 30px; padding-right: 30px;" v-if="!isLoginRoute">
                                <img class="user-img" src="../../assets/photo.png" alt="Photo">
                            </div>
                            <button v-if="isLoggedIn && !isLoginRoute" v-on:click="logout">Logout</button>
                            <!--<button v-if="isLoggedIn" v-on:click="logout">Logout</button>-->
                        </div>
                    </form>
                </div>
            </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import {Routes} from '../../router';
import firebase from 'firebase';

export default Vue.extend ({
    data() {
        return {
            isHidden: false,
            isMobileMenuOpen: false,
            isLoggedIn: false,
            currentUser: false,
        };
    },
    computed: {
        isLoginRoute(): boolean {
            return this.$route.name === Routes.LOGIN || this.$route.name === Routes.REGISTER;
        },
    },
    created() {
        if (firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    },
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.push({ name: Routes.LOGIN });
                });
        },
    },
});
</script>

<style lang="scss" scoped>
    @import '../../styles/mixins';
    @import '../../styles/variables';

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
    .menu-img {
        width: 45px;
        padding-top: 15px;
    }
    .header-item {
        display: flex;
        align-items: center;
        @include mobile {
            padding-top: 10px;
            display: table-row;
        }
    }
    .header-item--block {
        font-family: "Source Sans Pro", sans-serif;
        color: $white;
        font-size: 16px;
        font-weight: bold;
        @include mobile {
            margin-bottom: 20px;
        }
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
        border-radius: 100px;
        box-shadow: 0 0 7px #666;
        border: 3px solid $orange;
    }
    .card-form {
        display: inline-block;
    }
    .form {
        display: table;
        border-radius: 5px;
        background-color: $light-purple;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
        @include mobile {
            width: 50%;
            height: 30%;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
    .card-table {
        text-align: left;
        @include mobile {
            display: inline-block;
        }
    }
    td {
        color: $white;
        padding-left: 10px;
    }
    ::-webkit-input-placeholder {
        border: none;
    }
    .form-block {
        display: flex;
        align-items: center;
        @include mobile {
            display: inline-flex;
        }
    }
    .table-button--form {
        margin-left: 38px;
        @include mobile {
            margin-left: 0px;
        }
    }
    input {
        padding: 5px;
        border: none;
        border-radius: 2px;
        width: 166px;
        margin-bottom: 5px;
    }
    .popup-menu {
        @include mobile {
            margin-top: 105px;
            margin-left: 124px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }
    }
</style>
