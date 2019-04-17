<template>
    <div class="login">
        <p><strong>{{ title }}</strong></p>
            <table class="card-table">
                <tr>
                    <td>Full name</td>
                    <td>
                        <input
                                type="text"
                                placeholder="Daria Burdyga"/>
                    </td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td>
                        <input
                                type="text"
                                placeholder="dburdyga"/>
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input
                            type="email"
                            placeholder="email@email.com"
                            v-model="email"></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input
                                type="text"
                                placeholder="password"/>
                    </td>
                </tr>
            </table>
            <button class="table-button">Register</button>
            <router-link to="/">
                <button class="table-button">Cancel</button>
            </router-link>
        </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                title: 'Register',
            };
        },
    });

</script>

<style lang="scss" scoped>
    $white: #ffffff;
    $orange: #ff6600;
    $light-purple: #6b4fbb;
    $purple: #4b3589;
    $middle-purple:#48367d;
    $dark-purple:#241842;
    $light-grey: #cbcfd3;
    $grey: #333333;
    $middle-grey: #2c3e50;
    $orange-grey: #b34700;

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
