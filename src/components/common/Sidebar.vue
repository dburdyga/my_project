<template>
    <div class="sidebar">
        <div class="btn">
            <div class='top'></div>
            <div class='middle'></div>
            <div class='bottom'></div>
        </div>
        <router-link to="/">
            <div class="bar">Login</div>
        </router-link>
        <router-link to="/list">
            <div class="bar">List</div>
        </router-link>
        <router-link to="/card">
            <div class="bar">Card</div>
        </router-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "Sidebar"
    });

</script>

<style lang="scss" scoped>

    $black: #343838;
    $dullWhite: #f6f6f6;
    $easing: cubic-bezier(.6, .05, .28, .91);


    .sidebar {
        position: fixed;
        background-color: rgba(255, 102, 0, 0.6);
        top: 0px;
        width: 120px;
        height: 250px;
    }
    .bar {
        margin-top: 50px;
        color: white;
        font-weight: bold;
        font-size: 16px;
    }
    a {
        text-decoration: none;
    }
    .btn {
        position: fixed;
        z-index: 5;
        top: 15px;
        left: 15px;
        cursor: pointer;
        transition: left 500ms $easing;
        div {
            width: 35px;
            height: 2px;
            margin-bottom: 8px;
            background-color: white;
            transition: transform 500ms $easing, opacity 500ms, background-color 250ms;
        }
    }
    .btn.active {
        left: 230px;
        div {
            background-color: $black;
        }
        .top {
            transform: translateY(10px) rotate(-135deg);
        }
        .middle {
            opacity: 0;
            transform: rotate(135deg);
        }
        .bottom {
            transform: translateY(-10px) rotate(-45deg);
        }
    }

</style>
