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
    import firebase from 'firebase';

    export default Vue.extend({
        data() {
            return {
                title: 'Register',
            };
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
