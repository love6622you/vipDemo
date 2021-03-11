import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/missionOne',
    name: 'missionOne',
    component: () => import(/* webpackChunkName: "missionOne" */ '../views/mission/MissionOne.vue'),
  },
  {
    path: '/missionTwo',
    name: 'missionTwo',
    component: () => import(/* webpackChunkName: "missionTwo" */ '../views/mission/MissionTwo.vue'),
  },
  {
    path: '/vip',
    name: 'vip',
    component: () => import(/* webpackChunkName: "vip" */ '../views/vip/Vip.vue'),
  },
  {
    path: '/mcenter',
    name: 'mcenter',
    component: () => import(/* webpackChunkName: "mcenter" */ '../views/mcenter/Index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
