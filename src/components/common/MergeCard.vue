<template>
    <div class="card">
        <h2 class="vue-title">Tasks</h2>
        <h3 class="vue-title">Test Task</h3>
        <table class="table-status" width="100%">
            <thead>
            <tr>
                <th>CR: 123456</th>
                <th>Status: Approved</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Version 1.0.1</td>
                <td>Created at: 01.01.1970</td>
                <td>Assignee 1: Username</td>
            </tr>
            <tr>
                <td>Owner: Test Username</td>
                <td>Jira URL: lira link</td>
                <td>Assignee 2: Username</td>
            </tr>
            </tbody>
        </table>
        <br><br/>
        <table class="table-data" border="1" width="100%" cellpadding="5">
            <thead>
            <tr>
                <th>Sub Tasks</th>
                <th>Description</th>
                <th>Aufwand</th>
                <th>Estimator</th>
                <th>DVK</th>
                <th>IMP</th>
                <th>E-Test</th>
                <th>E-Test2</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1234</td>
                <td>1234</td>
                <td>ARS</td>
                <td>Username</td>
                <td>11</td>
                <td>34</td>
                <td>1</td>
                <td>-</td>
                <td></td>
            </tr>
            <tr>
                <td>1234</td>
                <td>1234</td>
                <td>JS</td>
                <td>Username</td>
                <td>11</td>
                <td>34</td>
                <td>1</td>
                <td>-</td>
                <td></td>
            </tr>
            </tbody>
        </table>
        <button class="table-button">Merge</button>
        <button class="table-button">Cancel</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({

    });

</script>



<style lang="scss" scoped>
    .card {
        margin: 5rem 5rem 0rem;
    }
    .table-status {
        border: none;
        text-align: left;
        background-color: rgba(248, 249, 250, 0.6);
    }
    .table-data {
        background-color: rgba(248, 249, 250, 0.6);
    }
</style>
