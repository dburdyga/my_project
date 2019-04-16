<template>
    <div class="login" v-if="!show">
        <p><strong>{{ title }}</strong></p>
        <p v-if="loginError">{{ loginError }}</p>
        <p v-if="loginSuccessful">Login Successful</p>
        <form @submit.prevent="loginSubmit">
            <input
                    type="email"
                    placeholder="E-Mail"
                    v-model="email">
            <input
                    type="password"
                    placeholder="Password"
                    v-model="password">
            <button @click="component='Login'">Login</button>
            <router-link to="">
                <a class="link">Forgot Password?</a>
            </router-link>
            <router-link to="/registration">
                <a class="link">Register</a>
            </router-link>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Registration from '../../requirements/Registration.vue';
    import {mapState} from 'vuex';
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
        components: {
            Registration,
        },
    });
</script>

<style lang="scss" scoped>
    $orange: #ff6600;
    $white: #ffffff;
    $middle-grey: #2c3e50;
    $light-purple: #6b4fbb;
    $light-grey: #cbcfd3;

    .login {
        margin-bottom: 0px;
        color: $white;
        border: none;
        border-radius: 10px;
        padding: 8px 35px;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        background-color: $light-purple;
        font-size: 25px;
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
            margin-bottom: 0px;
            display: flex;
            flex-flow: column;
            *:not(:last-child) {
                margin-bottom: 1rem;
            }
            input {
                font-family: "Source Sans Pro", sans-serif;
                line-height: 1.5;
                padding: .5rem;
                border: none;
                border-radius: 3px;
                padding-left: 14px;
                font-size: 14px;
            }
            button {
                font-family: "Source Sans Pro", sans-serif;
                line-height: 1.5;
                font-size: 14px;
                color: $white;
                padding: .5rem;
                background-color: $orange;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                &:hover {
                    background-color: lightslategray;
                }
            }
        }
        .link {
            font-family: "Source Sans Pro", sans-serif;
            line-height: 1.5;
            font-size: 14px;
            border: none;
            background-color: unset;
            text-decoration: none;
            color: $middle-grey;
            font-weight: bold;
            &:hover {
                background-color: unset;
            }
        }
        a {
            margin-bottom: 15px;
        }
    }
</style>
