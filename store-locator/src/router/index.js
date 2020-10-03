import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import StoreDetail from '../components/StoreDetail'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/store',
        name: 'StoreDetail',
        component: StoreDetail
    },
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router