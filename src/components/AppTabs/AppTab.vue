<template>
  <li>
    <button @click="select" :class="buttonClasses">
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  name: 'AppTab',

  props: {
    id: { type: String, default: null },
  },

  computed: {
    isActive() {
      return this.id === this.$parent.activeId;
    },

    buttonClasses() {
      return [
        'app-tab__item',
        {
          _active: this.isActive,
        },
      ];
    },
  },

  methods: {
    select() {
      if (this.id !== null) this.$parent.$emit('tab:click', this.id);
    },
  },
};
</script>
