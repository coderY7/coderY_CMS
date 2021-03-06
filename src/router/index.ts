import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login' //默认登录页
    },
    {
        path: '/main',
        component: () => import('../views/main/main.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login/login.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router