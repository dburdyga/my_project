<template>
  <div id="app">
    <Alerts/>
    <header class="header">
      <div class="container">
        <div class="inner">
          <div class="logo"></div>
          <nav class="main-nav">
            <router-link class="link" :to="{name: $routeNames.Cards}" v-if="!isLoginRoute">Requirements</router-link>
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
import {RouteNames} from '@/router/RouteNames';

export default Vue.extend({
  components: {
    Alerts,
    UserWidget,
  },
  computed: {
    isLoginRoute(): boolean {
      return this.$route.name === RouteNames.Login || this.$route.name === RouteNames.Register;
    },
  },
});
</script>


<style lang="scss" scoped>
  @import "styles/variables";

  #app {
    min-height: 100vh;
    font-family: "Source Sans Pro", sans-serif;
    text-align: center;
    color: $middle-grey;
    background: linear-gradient(270deg, #48367d 30%, #241842 100%);
    background-size: cover;
  }
  .link {
    color: $blue;
    font-weight: bold;
    font-size: 16px;
    &:hover{
      color: $dark-blue;
    }
  }

</style>

