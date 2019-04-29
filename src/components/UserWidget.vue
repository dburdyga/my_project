<template>
    <section class="user-widget">
        <div class="desktop-menu is-hidden-mobile">
            <div v-if="currentUser" class="user-controls">
                <router-link
                        :to="{name: $routeNames.Account}"
                        class="user-name">
                    <div class="user-logo" :style="{backgroundImage: photoURLBg}"/>
                    <span>{{ currentUser.displayName || currentUser.email }}</span>
                </router-link>
                <button @click="logout" class="button">Log out</button>
            </div>
        </div>
        <div class="mobile-menu is-hidden-desktop is-hidden-tablet">
            <button
                    @click="isMobileMenuOpen = !isMobileMenuOpen"
                    style="background-color: transparent">
                <img src="../assets/menu.png"
                     alt="menu icon"
                     class="menu-img">
                <!--{{ isMobileMenuOpen }}-->
            </button>
            <div v-if="isMobileMenuOpen" class="popup-menu">
                <form class="form">
                    <div v-if="currentUser" class="user-controls">
                        <router-link
                                :to="{name: $routeNames.Account}"
                                class="user-name">
                            <div class="user-logo" :style="{backgroundImage: photoURLBg}"/>
                            <span>{{ currentUser.displayName || currentUser.email }}</span>
                        </router-link>
                        <button @click="logout" class="button">Log out</button>
                        <button
                                @click="isMobileMenuOpen = !isMobileMenuOpen"
                                class="modal-close is-large">
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {CURRENT_USER} from '@/store/auth/getter-types';
    import {LOGOUT} from '@/store/auth/action-types';
    import {GET_ACCOUNT_PHOTO_URL} from '../store/account/action-types';
    import {ACCOUNT_PHOTO_URL} from '../store/account/getter-types';

    export default Vue.extend({
        data() {
            return {
                isHidden: false,
                isMobileMenuOpen: false,
                isLoggedIn: false,
            };
        },
        created() {
            this.getPhotoURL();
        },
        watch: {
            currentUser() {
                this.getPhotoURL();
            },
        },
        computed: {
            photoURL(): string {
                return this.$store.getters[ACCOUNT_PHOTO_URL];
            },
            currentUser(): firebase.User | null {
                return this.$store.getters[CURRENT_USER];
            },
            photoURLBg(): string {
                return this.photoURL ? `url('${this.photoURL}')` : '';
            },
        },
        methods: {
            getPhotoURL() {
                this.$store.dispatch(GET_ACCOUNT_PHOTO_URL);
            },
            logout() {
                this.$store.dispatch(LOGOUT);
            },
        },

    });
</script>


<style lang="scss" scoped>
    @import '../styles/mixins';
    @import '../styles/variables';

    button {
        background-color: $blue;
        color: $white;
        border: none;
        border-radius: 3px;
        &:hover {
            background-color: $dark-blue;
            color: $white;
        }
    }

    .user-controls {
        display: flex;
        align-items: center;
        @include mobile {
            display: grid;
        }
    }
    .user-logo {
        border-radius: 50%;
        width: 45px;
        height: 45px;
        margin-right: 12px;
        border: 3px solid $blue;
        display: block;
        background: center / cover no-repeat;
        @include mobile {
            width: 60px;
            height: 60px;
        }
        @include tablet {
            width: 60px;
            height: 60px;
        }

    }
    .user-name {
        color: $blue;
        font-size: 16px;
        font-weight: bold;
        margin-right: 12px;
        display: flex;
        align-items: center;
        text-decoration: none;
        &:hover {
            color: $dark-blue;
        }
        @include mobile {
            justify-content: space-evenly;
            font-size: 20px;
        }
        @include tablet {
            font-size: 20px;
        }
    }
    button.modal-close.is-large {
        top: 100px;
        background-color: transparent;
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
            height: 200px;
            display: inline-grid;
        }
        @include tablet {
            height: 200px;
            display: inline-grid;
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
            position: fixed;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(10, 10, 10, 0.86);
        }
    }
</style>