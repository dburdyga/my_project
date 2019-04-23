<template>
  <div id="app">
    <Alerts/>
    <header class="header">
      <div class="container">
        <div class="inner">
          <router-link
                  :to="{name: $routeNames.Home}"
                  class="logo"/>
          <nav class="main-nav">
            <router-link :to="{name: $routeNames.About}">Requirements</router-link>
            <router-link disabled :to="{name: $routeNames.Tasks}">Tasks</router-link>
          </nav>
          <div class="auth-controls">
            <UserWidget/>
          </div>
        </div>
      </div>
    </header>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Alerts from './views/Alerts.vue';
import UserWidget from '@/components/UserWidget.vue';

export default Vue.extend({
  components: {
    Alerts,
    UserWidget,
  },
});
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

