<template>
    <div class="list">
        <h2 class="vue-title">Requirements</h2>
        <NewCard />
        <table class="table-data" border="1" width="100%" cellpadding="5">
            <thead>
            <tr>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="CR Number"
                            v-model="crFilter"/>
                            <SortedArrow
                                name="number"
                                @change-sort="changeSorted"/>
                </th>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="Title"
                            v-model="titleFilter"/>
                    <SortedArrow
                        name="title"
                        @change-sort="changeSorted"/>
                </th>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="Status"
                            v-model="statusFilter"/>
                    <SortedArrow
                            name="status"
                            @change-sort="changeSorted"/>
                </th>
                <th style="padding-bottom: 17px;">
                    <input
                            class="field" type="text"
                            placeholder="Project"
                            v-model="projectFilter"/>
                </th>
                <th style="padding-bottom: 17px;">Owner</th>
                <th style="padding-bottom: 17px;">Version</th>
                <th>
                    <input
                            class="field" type="text"
                            placeholder="Created at"
                            v-model="dateFilter"/>
                            <SortedArrow
                                name="createdAt"
                                @change-sort="changeSorted"/>
                </th>
                <th style="padding-bottom: 17px;">Actions</th>
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
                <td>{{ requirement.createdAt | date}}</td>
                <td>{{ requirement.action }}</td>
            </tr>
            </tbody>
        </table>
        <Pagination
                :numberOfPages="numberOfPages"
                @page-selected="changeStartPage"/>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify';
import NewCard from '../common/NewCard.vue';
import Pagination from '../common/Pagination.vue';
import SortedArrow from '../common/SortedArrow.vue';
import {REQUIREMENTS} from '../../store/getter-types';
import {FETCH_REQUIREMENTS} from '../../store/action-types';
import ISort from '../../shared/interfaces/ISort';
import IRequirement from '../../shared/interfaces/IRequirement';
import Util from '../../shared/Util';

Vue.use(Vuetify);

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
            dateFilter: '',
            sort: {
                field: 'number',
                reversed:  true,
            } as ISort<IRequirement>,
            requirementsPerPage: 5,
            startPage: 0,
            localRequirements: [] as IRequirement[],
        };
    },
    computed: {
        requirements(): IRequirement[] {
            let requirements = this.$store.getters[REQUIREMENTS];
            this.localRequirements = this.$store.getters[REQUIREMENTS];

            requirements = this.localRequirements;

            return requirements
                .filter((requirement: IRequirement) =>
                    requirement.number.toLowerCase().includes(this.crFilter.toLowerCase()))
                .filter((requirement: IRequirement) =>
                    requirement.title.toLowerCase().includes(this.titleFilter.toLowerCase()))
                .filter((requirement: IRequirement) =>
                    requirement.status.toLowerCase().includes(this.statusFilter.toLowerCase()))
                .filter((requirement: IRequirement) =>
                    requirement.project.toLowerCase().includes(this.projectFilter.toLowerCase()))
                .filter((requirement: IRequirement) =>
                    requirement.createdAt.toLocaleDateString('ru-RU').toLowerCase()
                        .includes(this.dateFilter.toLowerCase()))
                .sort(Util.sortByField<IRequirement>(this.sort.field, this.sort.reversed, true))
                .slice(this.startPage, this.startPage + this.requirementsPerPage);
        },
        numberOfPages(): number {
            return Math.round(this.requirementsTotal / this.requirementsPerPage);
        },
        requirementsTotal(): number {
            return this.$store.getters[REQUIREMENTS].length;
        },
    },
    components: {
        Pagination,
        NewCard,
        SortedArrow,
    },
    methods: {
        changeSorted(event: ISort<IRequirement>) {
            if (this.sort.field === event.field) {
                this.sort = Util.flipSort(this.sort);
            } else {
                this.sort = {field: event.field, reversed: event.reversed};
            }
        },
        changeStartPage(index: number) {
            this.startPage = this.requirementsPerPage * index;
        },
    },
});
</script>


<style lang="scss" scoped>
    $grey: #2c3e50;
    $middle-purple:#48367d;
    $orange: #ff6600;

    .list {
        margin: 0rem 5rem 0rem;
    }
    .field {
        height: 26px;
        border: 0px;
        text-align: center;
        padding: 5px;
        padding-bottom: 0px;
    }
    .link {
        border: none;
        color: $grey;
    }
    a {
        text-decoration:none;
    }
    th {
        position: relative;
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
        color: $middle-purple;
    }
    td {
        height: 26px;
        padding: 0px 0px 0px 0px;
    }

    @media screen and (max-width: 769px) {
        .list {
            margin: 20px 20px 0px;
        }
        th {
            width: 0px;
        }
    }
</style>
