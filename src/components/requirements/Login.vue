<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel green white-text center">
                        <h3>Login</h3>
                        <form action="index.html">
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="email" id="email" v-model="email">
                                <label class="white-text" for="email">Email</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label class="white-text" for="password">Password</label>
                            </div>
                            <button @click.prevent="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Routes} from '@/router';
import firebase from 'firebase';



export default Vue.extend({
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                    (credentials: firebase.auth.UserCredential) => {
                        alert(`You are logged in as ${credentials!.user!.email}`);
                        this.$router.push({name: Routes.HOME });
                    },
                    (err: Error) => {
                        alert(err.message);
                    },
                );
        },
    },
});
</script>


<style lang="scss" scoped>
    @import '../../styles/mixins';
    @import '../../styles/variables';

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
        a {
            margin-bottom: 15px;
        }
    }
</style>
