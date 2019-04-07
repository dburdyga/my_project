<template>
    <div class="card-form">
        <div>
        <button
                class="table-button"
                v-on:click="show = !show">Add</button>
        </div>
        <div>
            <transition name="slide-fade" >
                <keep-alive>
                <form v-if="show" class="form">
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
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {NEW_CARD_VISIBLE} from '../../store/getter-types';
import {TOOGLE_NEWCARD} from '../../store/mutation-types';


export default Vue.extend({
    computed: {
        show: {
            get(): boolean {
                return this.$store.getters[NEW_CARD_VISIBLE];
            },
            set(value: boolean) {
                this.$store.commit(TOOGLE_NEWCARD, value);
            },
        },
    },
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
        border-radius: 5px;
        background-color: $light-purple;
        padding: 20px;
        display: table;
    }
    .card-table {
        text-align: left;
    }
    td {
        color: $white;
        padding-left: 10px;
    }
    .slide-fade-enter-active {
        transition: all .8s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(10px);
        opacity: 0;
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
