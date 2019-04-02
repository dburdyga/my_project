<template>
  <div id="app">
    <Sidebar />
    <Header />
    <NewCard />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from './components/root/Header.vue';
import Sidebar from './components/common/Sidebar.vue';
import NewCard from './components/common/NewCard.vue';



export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    NewCard,
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

