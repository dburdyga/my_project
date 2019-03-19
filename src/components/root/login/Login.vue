<template>
    <div class="login">
        <p><strong>{{ title }}</strong></p>
        <div v-if="loggingIn" class="container-loading">
            <img src="../../../assets/loading.gif" alt="Loading Icon">
        </div>
        <p v-if="loginError">{{ loginError }}</p>
        <p v-if="loginSuccessful">Login Successful</p>
        <form @submit.prevent="loginSubmit">
            <input type="email" placeholder="E-Mail" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit">Login</button>
            <button class="button button-link">Reset login</button>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapState, mapActions } from 'vuex';
    import {Routes} from '../../../router';

    export default Vue.extend({
        data() {
            return {
                email: '',
                password: '',
                title: 'Sign in',
            };
        },
        computed: {
            ...mapState([
                'loggingIn',
                'loginError',
                'loginSuccessful',
            ]),
        },
        methods: {
            loginSubmit() {
                this.$router.push({name: Routes.HOME});
            },
        },
    });
</script>

<style lang="scss" scoped>
    $orange-color: #ff6600;

    .login {
        border: none;
        border-radius: 10px;
        padding: 1.5rem;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        background-color: rgba(248, 249, 250, 0.43);
        font-size: 20px;
        .container-loading {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0,0,0,.3);
            img {
                width: 5rem;
                height: 5rem;
            }
        }
        form {
            display: flex;
            flex-flow: column;
            *:not(:last-child) {
                margin-bottom: 1rem;
            }
            input {
                padding: .5rem;
            }
            button {
                color: white;
                padding: .5rem;
                background-color: $orange-color;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                &:hover {
                    background-color: lightslategray;
                }
            }
        }
        .button-link {
            border: none;
            background-color: unset;
            text-decoration: none;
            color: grey;
            &:hover {
                background-color: unset;
            }
        }

    }
</style>
