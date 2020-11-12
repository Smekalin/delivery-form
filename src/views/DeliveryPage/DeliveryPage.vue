<template>
  <div class="delivery-page">
    <h1>Выберите способ доставки</h1>
    <a-tabs class="delivery-page__tabs" type="card" default-active-key="1">
      <a-tab-pane key="1" tab="Доставка">
        <app-delivery-form> </app-delivery-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Самовывоз"> Content of Tab Pane 2 </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
});
</script>

<style lang="less">
.delivery-page {
  padding: 50px 0px;
  .ant-tabs-bar {
    margin-bottom: 0;
  }

  &__tabs {
    .ant-tabs-tab {
      border: none !important;
    }
  }
}
</style>
