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
                    <td>Project</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Owner</td>
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
                <tr>
                    <td>Created at</td>
                    <td><input type="text"/></td>
                </tr>
            </table>
            <div class="button-list">
                <button class="table-button">Save</button>
                <button
                        @click="close"
                        class="table-button">Cancel
                </button>
            </div>
        </form>
    </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import Modal from './Modal.vue';
import {TOOGLE_NEWCARD} from '@/store/mutation-types';


export default Vue.extend({
    components: {Modal},
    methods: {
        close() {
            this.$store.commit(TOOGLE_NEWCARD, false);
        },
    },
});
</script>

<style lang="scss" scoped>
    @import '../../styles/mixins';
    @import '../../styles/variables';

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
        @include mobile {
            display: table-caption;
            padding-left: 30px;
            padding-right: 30px;
        }
    }
    .card-table {
        text-align: left;
        @include mobile {
            display: inline-block;
        }
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
        @include mobile {
            display: inline-flex;
        }
    }
    .table-button--form {
        margin-left: 38px;
        @include mobile {
            margin-left: 0px;
        }
    }
    input {
        padding: 5px;
        border: none;
        border-radius: 2px;
        width: 166px;
        margin-bottom: 5px;
    }
    @media screen and (max-width: 769px) {
        .button-list {
            display: flex;
        }
    }
</style>
