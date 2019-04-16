<template>
    <transition name="slide-fade">
        <div class="modal">
            <div class="modal-content">
                <slot/>
                <button @click="close">x</button>
            </div>
            <div
                    @click="close"
                    class="modal-overlay"/>
        </div>
    </transition>

</template>


<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        methods: {
            close() {
                console.log('close');
                this.$emit('close');
            }
        }
    });
</script>


<style lang="scss" scoped>

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
            background-color: rgba(grey, .6);
            -webkit-filter: blur(3px);
            -moz-filter: blur(3px);
            -ms-filter: blur(3px);
            filter: blur(3px);
            filter: brightness(0.4);
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

    .slide-fade-enter-active {
        transition: all .8s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(10px);
        opacity: 0;
    }
</style>
