<template>
    <div class="list">
        <h2 class="vue-title">Requirments</h2>
        <table id="filter-table">
            <tr class='table-filters'>
                <td>
                    <input
                            v-model="filterCrNumber"
                            type="text" placeholder="CR Number"/>
                </td>
                <td>
                    <input type="text" placeholder="Title"/>
                </td>
                <td>
                    <input type="text" placeholder="Status"/>
                </td>
                <td>
                    <input type="text" placeholder="Project"/>
                </td>
                <td>
                    <input type="text" placeholder="Created at"/>
                </td>
            </tr>
        </table>
        <table class="table-data" border="1" width="100%" cellpadding="5">
            <thead>
            <tr>
                <th>CR Number</th>
                <th>Title</th>
                <th>Status</th>
                <th>Project</th>
                <th>Owner</th>
                <th>Version</th>
                <th>Created at</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="(task, index) in tasks"
                    :key="index">
                <td>{{ task.number }}</td>
                <td>{{ task.title }}</td>
                <td>{{ task.status }}</td>
                <td>{{ task.project }}</td>
                <td>{{task.owner}}</td>
                <td>{{task.version}}</td>
                <td>{{task.createdAt}}</td>
                <td>{{task.actions}}</td>
            </tr>
            </tbody>
        </table>
        <Pagination />
        {{ requirements }}
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import generateMockData from '../../data';
    import Pagination from './Pagination.vue';


    export default Vue.extend({
        created() {
            this.$store.dispatch('getRequirements');
        },
        data() {
            return {
                tasks: generateMockData(),
            };
        },
        computed: {
            requirements() {
                return this.$store.getters.requirements;
            },
            filterCrNumber: {
                get(): string {
                    return this.$store.getters.filter.crNumber;
                },
                set(value: string) {
                    this.$store.commit('updateFilterCrNumber', value);
                },
            },
        },
        components: {
            Pagination,
        },
    });
</script>


<style lang="scss" scoped>
    .list {
        margin: 5rem 5rem 0rem;
    }
    .table-data {
        background-color: rgba(248, 249, 250, 0.7);
    }

</style>
