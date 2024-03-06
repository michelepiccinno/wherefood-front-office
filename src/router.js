import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import AppCheckout from './components/AppCheckout.vue';
import AppProductCard from './components/AppProductCard.vue';
// import EventDetail from './pages/EventDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/restaurants/:restaurantId/products',
            name: 'products',
            component: AppProductCard, props: true
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: AppCheckout
        },
    ]
});

export { router };
