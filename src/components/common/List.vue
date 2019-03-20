<template>
    <div class="list">
        <h2 class="vue-title">Requirments</h2>
        <table id="filter-table">
            <tr class='table-filters'>
                <td>
                    <input
                        type="text" placeholder="CR Number"/>
                </td>
                <td>
                    <input
                        type="text" placeholder="Title"/>
                </td>
                <td>
                    <input
                        type="text" placeholder="Status"/>
                </td>
                <td>
                    <input
                        type="text" placeholder="Project"/>
                </td>
                <td>
                    <input
                        type="text" placeholder="Created at"/>
                </td>
                <button class="table-button">Add</button>
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
                v-for="task in tasks"
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
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Pagination from './Pagination.vue';
import generateMockData from '../../data';
import {REQUIREMENTS} from '@/store/getter-types';
import {FETCH_REQUIREMENTS} from '@/store/action-types';


export default Vue.extend({
    data: {
        cats: [],
        currentSort: 'name',
        currentSortDir: 'asc',
        filter: ''
    },
    created() {
        this.$store.dispatch(FETCH_REQUIREMENTS);
    },
    data() {
        return {
            tasks: generateMockData(),
        };
    },
    computed: {
        requirements() {
            return this.$store.getters[REQUIREMENTS];
        }
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

</style>
