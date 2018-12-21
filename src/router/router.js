import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Playground from '../views/playground/Playground'
import Dashboard from '../views/dashboard/Dashboard'
import NotFound from '../views/notFound/NotFound'

Vue.use(Router)

let router = new Router({
    saveScrollPosition: true,
    history: true,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: true
        },
        {
            path: '/playgrounds',
            name: 'playgrounds',
            component: Playground,
            props: true
        },
        {
            path: '/dashboards',
            name: 'dashboards',
            component: Dashboard,
            props: true
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})

export default router