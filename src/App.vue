<template>
  <div id="app">
    <Header />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from './components/root/Header.vue';
import Sidebar from './components/common/Sidebar.vue';

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
  #app {
    min-height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url('./assets/background.jpg');
    background-size: cover;
  }
</style>

