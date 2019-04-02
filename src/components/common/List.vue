<template>
    <div class="list">
        <h2 class="vue-title">Requirements</h2>
        <button class="table-button">Add card</button>
        <table class="table-data" border="1" width="100%" cellpadding="5">
            <thead>
            <tr>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="CR Number"
                            v-model="crFilter"/>
                </th>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="Title"
                            v-model="titleFilter"/>
                </th>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="Status"
                            v-model="statusFilter"/>
                </th>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="Project"
                            v-model="projectFilter"/>
                </th>
                <th>Owner</th>
                <th>Version</th>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="Created at"
                            v-model="dateFilter"/>
                </th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(requirement, index) in requirements"
                :key="index">
                <td>{{ requirement.number }}</td>
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
        }
        // requirements() {
        //     return this.$store.getters[REQUIREMENTS]
        //         .filter(requirement => requirement.number.toLowerCase().includes(this.titleFilter.toLowerCase()));
        // },
        // requirements() {
        //     return this.$store.getters[REQUIREMENTS]
        //         .filter(requirement => requirement.number.toLowerCase().includes(this.statusFilter.toLowerCase()));
        // },
        // requirements() {
        //     return this.$store.getters[REQUIREMENTS]
        //         .filter(requirement => requirement.number.toLowerCase().includes(this.projectFilter.toLowerCase()));
        // },
        // requirements() {
        //     return this.$store.getters[REQUIREMENTS]
        //         .filter(requirement => requirement.number.toLowerCase().includes(this.dateFilter.toLowerCase()));
        // }
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
        margin: 0rem 5rem 0rem;
    }
    .field {
        height: 26px;
        border: 0px;
        text-align: center;
        padding: 5px;
    }
    .link {
        border: none;
        color: $grey;
    }
    a {
        text-decoration:none;
    }
    th {
        height: 26px;
        background: white;
        width: 100px;
        padding: 0px 0px 0px 0px;
    }

    ::-webkit-input-placeholder {
        font-family: "Source Sans Pro", sans-serif;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        color: #2c3e50;
    }

    td {
        height: 26px;
        padding: 0px 0px 0px 0px;
    }

    @media screen and (max-width: 769px) {
        .list {
            margin: 20px 20px 0px;
        }
    }
</style>
