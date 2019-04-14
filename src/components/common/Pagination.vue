<template>
    <div
            class="pagination"
            v-if="numberOfPages>0">
        <button
                class="pagination-button"
                v-if="numberOfPages>1">Prev
        </button>
        <button
                class="pagination-button"
                v-for="(page, index) in pagesArray"
                @click="selectPage(index)">
            {{ page }}
        </button>
        <button
                class="pagination-button"
                v-if="numberOfPages>1">Next
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            pageNumber: 0,
        };
    },
    props: {
        numberOfPages: {
            type: Number,
            required: true
        }
    },
    methods: {
        selectPage(index:number) {
            this.$emit('page-selected', index);
        }
    },
    computed: {
        pagesArray(): Array<number> {
            return Array.from({length: this.numberOfPages}, (v, k) => k+1);
        }
    },
});
</script>

<style lang="scss" scoped>
    $white: #ffffff;
    $orange: #ff6600;

    .pagination-button {
        font-family: "Source Sans Pro", sans-serif;
        background: $orange;
        color: $white;
        border: none;
        margin: 10px 10px;
        font-weight: normal;
        border-radius: 3px;
        display: inline-block;
        font-size: 14px;
        padding: 4px 10px;
    }
</style>
