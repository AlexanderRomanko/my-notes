import { createRouter, createWebHistory } from 'vue-router'
import Create from "@/views/Create";

const routes = [
    {
        path: '/',
        name: 'Create',
        component: Create
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: () => import('@/views/Edit')
    },
    {
        path: '/list',
        name: 'List',
        component: () => import('@/views/List')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router