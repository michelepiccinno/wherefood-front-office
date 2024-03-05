import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import AdvancedSearch from './pages/AdvancedSearch.vue';
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
        }
    ]
});

export { router };
