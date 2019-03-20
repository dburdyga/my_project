<template>
    <div class="list">
        <h2 class="vue-title">Requirments</h2>
        <table id="filter-table">
            <tr class='table-filters'>
                <td>
                    <input
                        class="field" type="text"
                        placeholder="CR Number"
                        v-model="crFilter"/>
                </td>
                <td>
                    <input
                            class="field" type="text" placeholder="Title"/>
                </td>
                <td>
                    <input
                            class="field" type="text" placeholder="Status"/>
                </td>
                <td>
                    <input
                            class="field" type="text" placeholder="Project"/>
                </td>
                <td>
                    <input
                            class="field" type="text" placeholder="Created at"/>
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
                v-for="(requirement, index) in requirements"
                :key="index">
                <router-link to="/card">
                    <td class="link">{{ requirement.number }}</td>
                </router-link>
                <td>{{ requirement.title }}</td>
                <td>{{ requirement.status }}</td>
                <td>{{ requirement.project }}</td>
                <td>{{ requirement.owner }}</td>
                <td>{{ requirement.version }}</td>
                <td>{{ requirement.createdAt }}</td>
                <td>{{ requirement.actions }}</td>
            </tr>
            </tbody>
        </table>
        <Pagination />
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Pagination from './Pagination.vue';
import {REQUIREMENTS} from '@/store/getter-types';
import {FETCH_REQUIREMENTS} from '@/store/action-types';
import {IFilter} from "@/shared/interfaces/IFilter";


export default Vue.extend({
    created() {
        this.$store.dispatch(FETCH_REQUIREMENTS);
    },
    data() {
        return {
            crFilter: ''
        };
    },
    computed: {
        requirements() {
            return this.$store.getters[REQUIREMENTS]
                .filter(requirement => requirement.number.toLowerCase().includes(this.crFilter.toLowerCase()));
        }
    },
    components: {
        Pagination,
    },
    methods: {

    }
});
</script>



<style lang="scss" scoped>
    $grey: #2c3e50;

    .list {
        margin: 5rem 5rem 0rem;
    }
    .field {
        height: 20px;
    }
    .link {
        border: none;
        color: $grey;
    }
    a {
        text-decoration:none;
    }
</style>
