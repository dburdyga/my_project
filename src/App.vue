<template>
  <div id="app">
    <Sidebar />
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Sidebar from './components/common/Sidebar.vue';
import Header from './components/common/Header.vue';
import Login from '../src/components/root/login/Login.vue';


export default {
  name: 'app',
  components: {
    Sidebar,
    Header,
    Login,
  },
};
</script>

<style lang="scss" scoped>

  $middle-grey: #2c3e50;

  #app {
    min-height: 100vh;
    font-family: "Source Sans Pro", sans-serif;
    text-align: center;
    color: $middle-grey;
    background: linear-gradient(270deg, #48367d 30%, #241842 100%);
    background-size: cover;
  }
</style>

