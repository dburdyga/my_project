<template>
    <div class="login">
        <div>
            <p><strong>{{ title }}</strong></p>
                <form>
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
                    <router-link to="/">
                        <button class="table-button table-button--register">Cancel</button>
                    </router-link>
                </form>
        </div>
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
    }
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