import Vue from 'vue';
require('./ant-design-vue');

require('./forms');

Vue.component('app-button', () => import('./AppButton.vue'));
