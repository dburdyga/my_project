<template>
    <div class="card-form" v-if="!isLoginRoute">
        <form>
            <p><strong>{{ title }}</strong></p>
            <p>CR Number
                <input type="text"/>
            </p>
            <p>Title
                <input type="text" >
            </p>
            <p>Version
                <input type="text" >
            </p>
            <p>Jira Link
                <input type="text" >
            </p>
            <h3>Tasks</h3>
            <p>Task title
                <input type="text" >
            </p>
            <p>Task description
                <input type="text" >
            </p>
            <button class="table-button">Save</button>
            <button class="table-button">Cancel</button>
        </form>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Routes} from '../../router';

    export default Vue.extend({
        name: "NewCard.vue",
        data() {
            return {
                title: 'Create new CR'
            };
        },
        computed: {
            isLoginRoute(): boolean {
                return this.$route.name === Routes.LOGIN;
            },
        }
    });

</script>

<style lang="scss" scoped>
    $white: #ffffff;
    $middle-grey: #2c3e50;

    .card-form {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }
    p {
        color: $middle-grey;
    }

</style>
