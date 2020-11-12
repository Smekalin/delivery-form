import Vue from 'vue';

Vue.component('app-tabs', () => import('./AppTabs'))

Vue.component('app-tab', () => import('./AppTab'))

Vue.component('app-tab-content', () => import('./AppTabContent'))
