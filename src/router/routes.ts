import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '',
    component: () => import('@/views/DeliveryPage/DeliveryPage.vue'),
  },
];

export default routes;
