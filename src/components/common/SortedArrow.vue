<template>
    <div
        :class="{'active': reversed}"
        @click="toogleSorting">
        <img class="arrow active" src="../../assets/triangle.png" alt="arrow">
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ISort from '@/shared/interfaces/ISort';
import IRequirement from '@/shared/interfaces/IRequirement';

export default Vue.extend({
    data() {
        return {
            reversed: true,
        };
    },
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    methods: {
        toogleSorting() {
            this.reversed = !this.reversed;
            this.$emit('change-sort', {field: this.name, reversed: this.reversed} as ISort<IRequirement>);
        },
    },
});
</script>

<style lang="scss" scoped>
    $orange: #ff6600;

    .arrow {
        height: 10px;
        width: 20px;
    }
    .active {
        -webkit-transform: rotate(-180deg); /* Для Safari, Chrome, iOS */
    }
</style>
