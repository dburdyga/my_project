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
                    <input
                            v-model="filterCrTitle"
                            type="text" placeholder="Title"/>
                </td>
                <td>
                    <input
                            v-model="filterCrStatus"
                            type="text" placeholder="Status"/>
                </td>
                <td>
                    <input
                            v-model="filterCrProject"
                            type="text" placeholder="Project"/>
                </td>
                <td>
                    <input
                            v-model="filterCrDate"
                            type="text" placeholder="Created at"/>
                </td>
            </tr>
        </table>
        <table class="table-data" border="1" width="100%" cellpadding="5">
            <thead>
            <tr>
                <th >CR Number
                    <span class="arrow"></span>
                </th>
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
                <td>{{ task.owner }}</td>
                <td>{{ task.version }}</td>
                <td>{{ task.createdAt }}</td>
                <td>{{ task.actions }}</td>
            </tr>
            </tbody>
        </table>
        <Pagination />
        {{ requirements }}
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import Pagination from './Pagination.vue';
    import generateMockData from '../../data';


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

            // sortedItems: function () {
            //     this.tasks.sort( ( a, b) => {
            //         return new Date(a.number) - new Date(b.number);
            //     });
            //     return this.tasks;
            // },

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
            filterCrTitle: {
                get(): string {
                    return this.$store.getters.filter.crTitle;
                },
                set(value: string) {
                    this.$store.commit('updateFilterCrTitle', value);
                },
            },
            filterCrStatus: {
                get(): string {
                    return this.$store.getters.filter.crStatus;
                },
                set(value: string) {
                    this.$store.commit('updateFilterCrStatus', value);
                },
            },
            filterCrProject: {
                get(): string {
                    return this.$store.getters.filter.crProject;
                },
                set(value: string) {
                    this.$store.commit('updateFilterCrProject', value);
                },
            },
            filterCrDate: {
                get(): number {
                    return this.$store.getters.filter.crDate;
                },
                set(value: number) {
                    this.$store.commit('updateFilterCrDate', value);
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
        background-color: rgba(248, 249, 250, 0.6);
        border-collapse: collapse;
    }
    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

</style>
