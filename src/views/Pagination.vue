<template>
    <nav aria-label="...">
        <ul class="pagination">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Prev</a>
            </li>
            <li class="page-item" v-model="currentPage">
                <!--<a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>-->
                <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                // pageNumber: 0,
                // activePageIndex: 0
                currentPage: 1,
                totalPages: 10
            };
        },
        // props: {
        // },
        // methods: {
        //     selectPage(index: number) {
        //         this.activePageIndex = index;
        //         this.$emit('page-selected', index);
        //     },
        //     incrementPage(isReversed: boolean) {
        //         this.activePageIndex = isReversed ? (this.activePageIndex - 1) : (this.activePageIndex+1);
        //         this.selectPage(this.activePageIndex);
        //     }
        // },
        // computed: {
        //     pagesArray(): number[] {},
        //     changeStartPage(index : number) {
        //         this.startPage = this.requirementsPerPage * index;
        //         console.log(this.startPage);
        //     },
        //     numberOfPages(): number {
        //         return Math.round(this.requirementsTotal / this.requirementsPerPage);
        //     },
        // }
        });

</script>


<style lang="scss" scoped>
    @import '../styles/mixins';
    @import '../styles/variables';

    li {
        list-style-type: none; /* Убираем маркеры */
    }
    .page-item {
        border-radius: 3px;
    }
    .page-link {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: $orange;
        border: none;
        color: $white;
        font-size: 14px;
        border-radius: 3px;
    }
    .page-item.disabled .page-link {
        background-color: $orange-grey;
        color: $grey;
    }
    .pagination {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        @include mobile {
            justify-content: space-around;
            width: 100%;
        }
        @include tablet {
            justify-content: space-around;
            width: 100%;
        }
    }
    .pagination-button {
        font-family: "Source Sans Pro", sans-serif;
        display: inline-block;
        font-size: 14px;
        padding: 4px 10px;
        outline: none;
        border: none;
        border-radius: 3px;
        color: $white;
        background: $orange;
        &.is-active {
            background: white;
            color: $orange;
            font-weight: bold;
        }
        &.is-disabled {
            background: $orange-grey;
            pointer-events: none;
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
</style>

