<template>
    <div class="list">
        <h2 class="vue-title">Requirements</h2>
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
                            class="field" type="text"
                            placeholder="Title"
                            v-model="titleFilter"/>
                </td>
                <td>
                    <input
                            class="field" type="text"
                            placeholder="Status"
                            v-model="statusFilter"/>
                </td>
                <td>
                    <input
                            class="field" type="text"
                            placeholder="Project"
                            v-model="projectFilter"/>
                </td>
                <td>
                    <input
                            class="field" type="text"
                            placeholder="Created at"
                            v-model="dateFilter"/>
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
            crFilter: '',
            titleFilter: '',
            statusFilter: '',
            projectFilter: '',
            dateFilter: ''
        };
    },
    computed: {
        requirements() {
            return this.$store.getters[REQUIREMENTS]
                .filter(requirement => requirement.number.toLowerCase().includes(this.crFilter.toLowerCase()));
        },
        requirements() {
            return this.$store.getters[REQUIREMENTS]
                .filter(requirement => requirement.number.toLowerCase().includes(this.titleFilter.toLowerCase()));
        },
        // requirements() {
        //     return this.$store.getters[REQUIREMENTS]
        //         .filter(requirement => requirement.number.toLowerCase().includes(this.statusFilter.toLowerCase()));
        // },
        // requirements() {
        //     return this.$store.getters[REQUIREMENTS]
        //         .filter(requirement => requirement.number.toLowerCase().includes(this.projectFilter.toLowerCase()));
        // },
        requirements() {
            return this.$store.getters[REQUIREMENTS]
                .filter(requirement => requirement.number.toLowerCase().includes(this.dateFilter.toLowerCase()));
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
