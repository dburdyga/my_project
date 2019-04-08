<template>
    <div class="card-form">
        <div>
            <button v-on:click="show = !show" v-if="!show">Registration</button>
        </div>
        <div>
            <transition name="fade">
                <form v-if="show" class="register-form">
                    <h3>Register</h3>
                    <table class="card-table">
                        <tr>
                            <td>Full name</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="text"/></td>
                        </tr>
                    </table>
                    <button class="table-button table-button--register">Register</button>
                    <button class="table-button table-button--register" v-on:click="show = !show">Cancel</button>
                </form>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {REGISTRATION_VISIBLE} from '@/store/getter-types';
import {TOOGLE_REGISTRATION} from '@/store/mutation-types';



export default Vue.extend({
    computed: {
        show: {
            get(): boolean {
                return this.$store.getters[REGISTRATION_VISIBLE];
            },
            set(value: boolean) {
                this.$store.commit(TOOGLE_REGISTRATION, value);
            },
        },
    },
});
</script>

<style lang="scss"scoped>
    $white: #ffffff;
    $orange: #ff6600;
    $light-purple: #6b4fbb;
    $purple: #4b3589;
    $middle-purple:#48367d;
    $dark-purple:#241842;
    $light-grey: #cbcfd3;
    $grey: #333333;
    $middle-grey: #2c3e50;

    button {
        width: 300px;
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
    .table-button--register {
        width: 260px;
        margin-bottom: 0px;
    }
    .register-form {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        padding: 10px;
        border-radius: 5px;
        background-color: $dark-purple;
        display: table;
        font-size: 14px;
    }
    .card-table {
        text-align: left;
        margin-left: 16px;
    }
    td {
        color: $white;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    ::-webkit-input-placeholder {
        border: none;
    }
    .form-block {
        display: flex;
        align-items: center;
    }
    input {
        padding: 3px;
        border: none;
        border-radius: 3px;
    }
    @media screen and (max-width: 769px) {
        .form {
            display: table-caption;
            padding-left: 30px;
            padding-right: 30px;
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