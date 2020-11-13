<template>
  <div class="delivery-page">
    <h1>Выберите способ доставки</h1>
    <a-tabs class="delivery-page__tabs" type="card" default-active-key="1">
      <a-tab-pane key="1" tab="Доставка">
        <app-delivery-form> </app-delivery-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Самовывоз">
        <app-delivery-map></app-delivery-map>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

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
