<template>
  <div class="delivery-page">
    <h1>Выберите способ доставки</h1>
    <a-tabs
      v-if="isDesktop"
      class="delivery-page__tabs"
      type="card"
      default-active-key="1"
    >
      <a-tab-pane key="1" tab="Доставка">
        <app-delivery-form> </app-delivery-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Самовывоз" forceRender>
        <app-delivery-map></app-delivery-map>
      </a-tab-pane>
    </a-tabs>
    <a-collapse accordion v-else>
      <a-collapse-panel key="1" header="Доставка"
        ><app-delivery-form> </app-delivery-form
      ></a-collapse-panel>
      <a-collapse-panel key="2" header="Самовывоз">
        <app-delivery-map></app-delivery-map>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  computed: {
    ...mapGetters({
      isDesktop: 'screen/isDesktop',
    }),
  },
});
</script>

<style lang="less">
.delivery-page {
  padding: 50px 0px;
  .ant-tabs-bar {
    margin-bottom: 0;
    border: none;
  }

  &__tabs {
    .ant-tabs-tab {
      border: none !important;
    }
  }
}
</style>
