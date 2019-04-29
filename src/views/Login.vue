<template>
    <div class="login-form">
        <form class="form">
            <h3 class="title is-3 has-text-centered">Login</h3>
            <div class="field">
                <label for="email">
                    Email
                </label>
                <div class="control">
                    <input
                            class="input"
                            :class="{'is-danger': $v.email.$error}"
                            v-model="email"
                            @blur="$v.email.$touch()"
                            id="email"
                            type="text"
                            placeholder="Email">
                </div>
                <p
                        v-if="$v.email.$dirty && $v.email.$error"
                        class="help is-danger">
                    <span v-if="!$v.email.required">The email is required.</span>
                    <span v-if="!$v.email.email">Invalid email format.</span>
                </p>
            </div>
            <div class="field">
                <label for="password">
                    Password
                </label>
                <div class="control">
                    <input
                            @blur="$v.password.$touch()"
                            :class="{'is-danger': $v.password.$error}"
                            class="input"
                            v-model="password"
                            id="password"
                            type="password"
                            placeholder="Password">
                </div>
                <p
                        v-if="$v.password.$dirty && $v.password.$error"
                        class="help is-danger">
                    <span v-if="!$v.password.required">The password is required.</span>
                    <span v-else-if="!$v.password.minLength">The password should be at least 6 symbols long.</span>
                </p>
            </div>
            <div class="field has-text-centered">
                <button
                        @click.prevent="login"
                        class="button is-primary"
                        style="background-color:#ff6600;">Login
                </button>
                <router-link :to="{name: $routeNames.Register}">
                    <a>Registration</a>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {email, minLength, required} from 'vuelidate/lib/validators';
import {LOGIN} from '@/store/auth/action-types';

export default Vue.extend({
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            if (!this.$v.$invalid) {
                this.$store.dispatch(LOGIN, {email: this.email, password: this.password});
            }
        },
    },
    validations: {
        email: {required, email},
        password: {
            required,
            minLength: minLength(6),
        },
    },
});
</script>


<style lang="scss" scoped>
    @import '../styles/mixins';
    @import '../styles/variables';

    a {
        text-decoration: none;
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: bold;
        color: $middle-grey;
    }
    button {
        margin-bottom: 20px;
        margin-top: 15px;
        width: 240px;
    }
    .material-icons {
        margin-top: 6px;
        margin-bottom: 0px;
        margin-right: 20px;

    }
    .input-field {
        display: flex;
        justify-content: space-between;
    }
    .email, .password {
        height: 20px;
    }
    .login {
        width: 240px;
        margin-bottom: 0px;
        color: $white;
        border: none;
        border-radius: 10px;
        padding: 8px 35px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        background-color: $light-purple;
        font-size: 16px;
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
    }
</style>
