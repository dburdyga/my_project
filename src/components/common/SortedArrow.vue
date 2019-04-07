<template>
    <div
        class="arrow"
        :class="{'active': reversed}"
        @click="toogleSorting"></div>
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

    .arrow:after {
        content: "";
        height: 0;
        width: 0;
        border: 9px solid transparent;
        border-top-color: $orange;
        float: right;
        margin-right: 5px;
    }
    .active:after {
        transform: rotate(-180deg);
    }

</style>
