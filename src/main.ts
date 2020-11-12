import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import '@/styles/styles.less';

require('./router');
require('./components');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
