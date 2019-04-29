<template>
    <div class="pagination">
        <div
                class="pagination"
                v-if="numberOfPages>0">
            <button
                    class="pagination-button"
                    :class="{'is-disabled': activePageIndex === 0}"
                    v-if="numberOfPages>1"
                    @click="incrementPage(true)">
                    Prev
            </button>
            <button
                    class="pagination-button"
                    :class="{'is-active' : activePageIndex === index}"
                    v-for="(page, index) in pagesArray"
                    @click="selectPage(index)">
                    {{ page }}
            </button>
            <button
                    class="pagination-button"
                    :class="{'is-disabled': activePageIndex === numberOfPages - 1}"
                    v-if="numberOfPages>1"
                    @click="incrementPage(false)">Next
            </button>
        </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                pageNumber: 0,
                activePageIndex: 0
            };
        },
        props: {
        },
        methods: {
            selectPage(index: number) {
                this.activePageIndex = index;
                this.$emit('page-selected', index);
            },
            incrementPage(isReversed: boolean) {
                this.activePageIndex = isReversed ? (this.activePageIndex - 1) : (this.activePageIndex+1);
                this.selectPage(this.activePageIndex);
            }
        },
        computed: {
            pagesArray(): number[] {
            }
        });

</script>


<style lang="scss" scoped>
    @import '../styles/variables';

    .pagination-button {
        font-family: "Source Sans Pro", sans-serif;
        display: inline-block;
        font-size: 14px;
        padding: 4px 10px;
        outline: none;
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

