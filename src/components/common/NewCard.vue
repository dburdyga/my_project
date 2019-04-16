<template>
    <Modal @close="close">
        <form class="form">
            <h3>Create new CR</h3>
            <table class="card-table">
                <tr>
                    <td>CRNumber</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Version</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Jira Link</td>
                    <td><input type="text"/></td>
                </tr>
            </table>
            <div class="form-block">
                <h3>Tasks</h3>
                <button class="table-button table-button--form">Add</button>
            </div>
            <table class="card-table">
                <tr>
                    <td>Task title</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td><input type="text"/></td>
                </tr>
            </table>
            <div class="button-list">
                <button class="table-button">Save</button>
                <button class="table-button" v-on:click="show = !show">Cancel</button>
            </div>
        </form>
    </Modal>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Modal from './Modal';
    import {TOOGLE_NEWCARD} from "@/store/mutation-types";


    export default Vue.extend({
        components: {Modal},
        methods: {
            close() {
                this.$store.commit(TOOGLE_NEWCARD, false);
            }
        }
    });
</script>

<style lang="scss" scoped>
    $white: #ffffff;
    $middle-grey: #2c3e50;
    $middle-purple:#48367d;
    $light-purple: #6b4fbb;

    .card-form {
        display: inline-block;
    }
    .form {
        display: table;
        border-radius: 5px;
        background-color: $light-purple;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .card-table {
        text-align: left;
    }
    td {
        color: $white;
        padding-left: 10px;
    }

    ::-webkit-input-placeholder {
        border: none;
    }
    .form-block {
        display: flex;
        align-items: center;
    }
    .table-button--form {
        margin-left: 38px;
    }
    input {
        padding: 5px;
        border: none;
        border-radius: 2px;
        width: 166px;
        margin-bottom: 5px;
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
