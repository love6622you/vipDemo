import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'vip',
  },
  {
    path: '/missionOne',
    name: 'MissionOne',
    component: () => import(/* webpackChunkName: "missionOne" */ '../views/mission/MissionOne.vue'),
  },
  {
    path: '/missionTwo',
    name: 'MissionTwo',
    component: () => import(/* webpackChunkName: "missionTwo" */ '../views/mission/MissionTwo.vue'),
  },

  {
    path: '/vip',
    name: 'VIP',
    component: () => import(/* webpackChunkName: "vip" */ '../views/vip/Vip.vue'),
  },
  {
    path: '/mcenter',
    name: 'Mcenter',
    component: () => import(/* webpackChunkName: "mcenter" */ '../views/mcenter/Index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
