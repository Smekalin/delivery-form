<template>
  <div id="app">
    <div class="app__main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'App',
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: center;

  .app__main-container {
    width: 100%;
    max-width: 1200px;
    min-width: 320px;
  }
}
</style>
