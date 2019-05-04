<template>
    <transition-group
            tag="section"
            class="alert-list"
            name="alert">
        <div
                v-for="alert in alerts"
                :key="alert.id"
                :class="alertClass(alert)"
                class="alert notification">
            <button
                    @click="removeAlert(alert)"
                    class="delete"/>
            {{ alert.text }}
        </div>
    </transition-group>
</template>

<script lang="ts">
import Vue from 'vue';
import {AlertType, IAlert} from '../common/interfaces/IAlert';
import {ALERTS} from '../store/alert/getter-types';
import {REMOVE_ALERT} from '../store/alert/mutation-types';

export default Vue.extend({
    computed: {
        alerts(): IAlert[] {
            return this.$store.getters[ALERTS];
        },
        alertClass() {
            return (alert: IAlert) => {
                return {
                    'is-danger': alert.type === AlertType.ERROR,
                    'is-warning': alert.type === AlertType.WARNING,
                    'is-success': alert.type === AlertType.SUCCESS,
                };
            };
        },
    },
    methods: {
        removeAlert(alert: IAlert) {
            this.$store.commit(REMOVE_ALERT, alert);
        },
    },
});
</script>

<style lang="scss" scoped>
    @import '../styles/variables';
    @import '../styles/mixins';

    .alert-list {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 10;
        padding: 12px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .alert {
        transition: all .5s;
        width: 300px;
    }

    .alert-enter, .alert-leave-to  {
        opacity: 0;
        transform: translateX(20px);
    }

    .alert-leave-active {
        position: absolute;
    }
</style>
