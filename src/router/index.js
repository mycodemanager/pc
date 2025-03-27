import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gaming-pc',
    name: 'GamingPC',
    component: () => import('@/views/GamingPC.vue')
  },
  {
    path: '/graphic-cards',
    name: 'GraphicCards',
    component: () => import('@/views/GraphicCards.vue')
  },
  {
    path: '/processors',
    name: 'Processors',
    component: () => import('@/views/Processors.vue')
  },
  {
    path: '/deals',
    name: 'Deals',
    component: () => import('@/views/Deals.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/paymenting.vue'),
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
