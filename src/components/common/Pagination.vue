<template>
    <div class="pagination">
        <button class="pagination-button">Prev</button>
        <button class="pagination-button">1</button>
        <button class="pagination-button">2</button>
        <button class="pagination-button">Next</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({

    });
</script>

<style lang="scss" scoped>
    .pagination-button {
        background: #ff6600;
        color: white;
        border: none;
        margin: 10px 10px;
        font-weight: bold;
        height: 30px;
        border-radius: 3px;
    }
</style>
