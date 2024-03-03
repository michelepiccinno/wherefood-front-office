import { createRouter, createWebHistory } from 'vue-router';

import AppJumbo from './pages/AppJumbo.vue';
import AdvancedSearch from './pages/AdvancedSearch.vue';
import AppProductCard from './components/AppProductCard.vue';
// import EventDetail from './pages/EventDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppJumbo
        },
        {
            path: '/search',
            name: 'search',
            component: AdvancedSearch
        },
        {
            path: '/restaurants/:restaurantId/products',
            name: 'products',
            component: AppProductCard, props: true
        }
        // {
        //     path: "/events/:id",
        //     name: "event-detail",
        //     component: EventDetail,
        //     props: true
        // }
    ]
});

export { router };
