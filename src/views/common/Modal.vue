<template>
        <div class="modal">
            <div class="modal-content">
                <slot/>
                <button class="close" @click="close">x</button>
            </div>
            <div
                    @click="close"
                    class="modal-overlay"/>
            </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    methods: {
        close() {
            this.$emit('close');
        },
    },
});
</script>


<style lang="scss" scoped>
    @import '../../styles/mixins';
    @import '../../styles/variables';

    .modal  {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .modal-overlay {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
            background-color: rgba(225, 225, 225, 0.7);
        }
        .modal-content {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .close {
        margin-bottom: 355px;
        padding-bottom: 5px;
        padding-top: 5px;
        padding-right: 10px;
        padding-left: 10px;
        margin-left: 0px;
        margin-right: 0px;
    }

</style>
