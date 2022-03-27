import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home.vue')
        },
        {
            path: `/profile`,
            name: `Profile`,
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/callback',
            name: 'Callback',
            component: () => import('./views/Callback.vue')
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('./views/Admin.vue')

        },
        {
            path: '/codes',
            name: 'Codes',
            component: () => import('./views/Codes.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("./views/NoViews.vue"),
        },
    ]
})










createApp(App).use(router).mount('#app')