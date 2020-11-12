<template>
  <div class="app-tab-content" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppTabContent',

  props: {
    id: { type: String, default: null },
  },

  computed: {
    isActive() {
      return this.id === this.$parent.activeId;
    },
  },
};
</script>
