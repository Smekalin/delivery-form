<template>
  <div id="app">
    <div class="app__container"></div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'App',
});
</script>

<style lang="less">
body {
  margin: 0;
  * {
    box-sizing: border-box;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: center;

  .app__container {
    width: 100%;
    max-width: 1200px;
    min-width: 320px;
  }
}
</style>
