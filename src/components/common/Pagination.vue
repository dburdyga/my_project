<template>
    <div class="pagination">
        <button  class="pagination-button">Prev</button>
        <button class="pagination-button">1</button>
        <button class="pagination-button">2</button>
        <button  class="pagination-button">Next</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            pageNumber: 0,  // по умолчанию 0
        };
    },
    props: {

    },
    methods: {

    },
    computed: {

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
