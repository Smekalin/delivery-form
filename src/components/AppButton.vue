<template>
  <button :class="classList" :disabled="disabled" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList(): Array<string> {
      return ['app-button', this.disabled ? 'app-button--disabled' : ''];
    },
  },
});
</script>

<style lang="less">
.app-button {
  background-color: rgb(4, 150, 218);
  border: none;
  outline: none;
  color: white;
  padding: 10px 20px;
  width: 130px;
  border-radius: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: rgb(1, 129, 188);
  }

  &:active {
    background-color: rgb(9, 94, 135);
  }

  &--disabled,
  &--disabled:hover,
  &--disabled:active {
    user-select: none;
    background-color: rgb(237, 238, 238);
    color: rgb(177, 184, 214);
  }
}
</style>
