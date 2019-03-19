<template>
    <div class="card">
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
        <h3 class="vue-title">Tasks</h3>
        <table class="table-data" border="1" width="100%" cellpadding="5">
            <thead>
            <tr>
                <th>Sub Tasks</th>
                <th>Description</th>
                <th>Effort</th>
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
                <td>Write integration tests</td>
                <td>Write integration tests for Ethereum payment</td>
                <td>ARS</td>
                <td>Username</td>
                <td>11</td>
                <td>34</td>
                <td>1</td>
                <td>-</td>
                <td>Edit/Delete</td>
            </tr>
            <tr>
                <td>Add missing scenarios</td>
                <td>Add missing scenarios for the Ethereum Storage</td>
                <td>JS</td>
                <td>Username</td>
                <td>11</td>
                <td>34</td>
                <td>1</td>
                <td>-</td>
                <td>Edit/Delete</td>
            </tr>
            </tbody>
        </table>
        <router-link to="/mergecard">
            <button class="table-button">Estimate</button>
        </router-link>
        <button class="table-button">Cancel</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({

    });
</script>



<style lang="scss" scoped>

</style>
