<template>
    <div class="card-form">
        <div>
            <button
                    class="table-button"
                    v-on:click="show = !show">Add</button>
        </div>
        <div>
            <transition name="slide-fade" >
                <form v-if="show" class="form">
                    <h3>Create new tasks</h3>
                    <table class="card-table">
                        <tr>
                            <td>Sub Tasks</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Effort</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Estimator</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>DVK</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>IMP</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>E-Test</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>E-Test2</td>
                            <td><input type="text"/></td>
                        </tr>
                    </table>
                    <div class="button-list">
                        <button class="table-button">Save</button>
                        <button class="table-button" v-on:click="show = !show">Cancel</button>
                    </div>
                </form>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {NEW_TASK_VISIBLE} from '../../store/getter-types';
    import {TOOGLE_NEWTASK} from '../../store/mutation-types';


    export default Vue.extend({
        computed: {
            show: {
                get(): boolean {
                    return this.$store.getters[NEW_TASK_VISIBLE];
                },
                set(value: boolean) {
                    this.$store.commit(TOOGLE_NEWTASK, value);
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
        padding: 16px;
        display: table;
    }
    .card-table {
        text-align: left;
    }
    td {
        color: $white;
        padding-left: 10px;
        font-weight: 400;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 16px;
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
    input {
        padding: 6px;
        border: none;
        border-radius: 3px;
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
