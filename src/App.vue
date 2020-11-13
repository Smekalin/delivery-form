<template>
  <div id="app">
    <div class="app__main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import debounce from 'lodash.debounce';

export default Vue.extend({
  name: 'App',
  created() {
    this.calculateMobile();
    this.debouncedCalculateMobile = debounce(this.calculateMobile, 200);
    window.addEventListener('resize', this.debouncedCalculateMobile);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.debouncedCalculateMobile);
  },

  methods: {
    calculateMobile() {
      this.$store.dispatch('screen/setWidth', window.innerWidth);
    },
  },
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
  }
}
</style>
