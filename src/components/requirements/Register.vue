<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel grey lighten-4 black-text center">
                        <h3>Register</h3>
                        <form action="index.html">
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="email" id="email" v-model="email">
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label for="password">Password</label>
                            </div>
                            <button @click.prevent="register" class="btn btn-large btn-extended grey lighten-4 black-text">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from '../../firebase/firebaseInit';
import {Routes} from '@/router';



export default Vue.extend({
    name: 'register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    // methods: {
    //     register() {
    //         firebase
    //             .auth()
    //             .createUserWithEmailAndPassword(this.email, this.password)
    //             .then(
    //                 (user) => {
    //                     // console.log(user);
    //                     alert(`Account Created for ${user.email}`);
    //                     this.$router.push({ name: Routes.HOME });
    //                 },
    //                 (err) => {
    //                     alert(err.message);
    //                 },
    //             );
    //     },
    // },
    methods: {
        login() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    (credentials: firebase.auth.UserCredential) => {
                        alert(`Account Created for ${credentials!.user!.email}`);
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
            background-color: $orange-grey;
        }
    }
    .table-button--register {
        width: 260px;
        margin-bottom: 0px;
    }
    .card-table {
        text-align: left;
        font-size: 16px;
    }
    td {
        color: $white;
    }
    tr {
        vertical-align: baseline;
    }
    input {
        border: none;
        border-radius: 3px;
        margin-bottom: 10px;
        margin-left: 15px;
        padding: .5rem;
        width: 180px;
    }
    @media screen and (max-width: 769px) {
        td {
            text-align: center;
        }
        .table-button--form {
            margin-left: 0px;
        }
        .card-table {
            display: inline-block;
        }
        .button-list {
            display: flex;
        }
        .form-block {
            display: inline-flex;
        }
    }

</style>
