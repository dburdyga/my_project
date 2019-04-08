<template>
    <div>
        <img class="icon" src="../../assets/edit.png" alt="Edit">
        <img class="icon" src="../../assets/delete.png" alt="Delete" v-on:click="show = !show">
        <h3>Confirmation</h3>
        <form>
            <p>Are you sure you want to delete this item?</p>
            <button>Yes</button>
            <button>No</button>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({

    });

</script>

<style lang="scss" scoped>
    form {
        background-color: #6b4fbb;
        color: white;
        border-radius: 3px;
    }

</style>