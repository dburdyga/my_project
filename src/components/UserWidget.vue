<template>
    <section class="user-widget">
        <div
                v-if="currentUser"
                class="user-controls">
            <router-link
                    :to="{name: $routeNames.Account}"
                    class="user-name">
                <div
                        class="user-logo"
                        :style="{backgroundImage: photoURLBg}"/>
                <span>{{ currentUser.displayName || currentUser.email }}</span>
            </router-link>
            <button
                    @click="logout"
                    class="button">Log out</button>
        </div>
        <!--<div-->
                <!--v-else-->
                <!--class="guest-controls">-->
            <!--<router-link-->
                    <!--:to="{name: $routeNames.Login}"-->
                    <!--class="button is-primary" style="background-color:#ff6600; text-decoration: none;">Login</router-link>-->
            <!--<router-link-->
                    <!--:to="{name: $routeNames.Register}"-->
                    <!--class="button is-primary" style="background-color:#ff6600; text-decoration: none;">Register</router-link>-->
        <!--</div>-->
    </section>

</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters} from 'vuex';
import {auth, storage} from '@/firebase';
import {CURRENT_USER} from '@/store/auth/getter-types';
import {LOGOUT} from '@/store/auth/action-types';
import {GET_ACCOUNT_PHOTO_URL} from '../store/account/action-types';
import {ACCOUNT_PHOTO_URL} from '../store/account/getter-types';

export default Vue.extend({
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
    }
    .user-controls {
        display: flex;
        align-items: center;
    }
    .user-logo {
        border-radius: 50%;
        width: 45px;
        height: 45px;
        margin-right: 12px;
        border: 3px solid $blue;
        display: block;
        background: center / cover no-repeat;
    }
    .user-name {
        color: $blue;
        font-size: 16px;
        font-weight: bold;
        margin-right: 12px;
        display: flex;
        align-items: center;
    }
</style>