import { createRouter, createWebHistory } from 'vue-router';

import AppJumbo from './pages/AppJumbo.vue';
// import About from './pages/About.vue';
// import EventList from './pages/EventList.vue'
// import EventDetail from './pages/EventDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppJumbo
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: About
        // },
        // {
        //     path: '/events',
        //     name: 'events',
        //     component: EventList
        // },
        // {
        //     path: "/events/:id",
        //     name: "event-detail",
        //     component: EventDetail,
        //     props: true
        // }
    ]
});

export { router };
