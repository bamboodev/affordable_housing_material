import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Directors from './pages/Directors.vue'
import Development from './pages/Development.vue'
import Survey from './pages/Survey.vue'
import Press from './pages/Press.vue'
import Contact from './pages/Contact.vue'
import Donate from './pages/Donate.vue'
import Foo from './pages/Foo.vue'
import Bar from './pages/Bar.vue'
import BlogPost from './pages/BlogPost.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/directors',
            name: 'directors',
            component: Directors
        },
        {
            path: '/development',
            name: 'development',
            component: Development
        },
        {
            path: '/press',
            name: 'press',
            component: Press
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/survey',
            name: 'survey',
            component: Survey
        },
        {
            path: '/donate',
            name: 'donate',
            component: Donate
        },
        {
            path: '/foo',
            name: 'foo',
            component: Foo
        },
        {
            path: '/bar',
            name: 'bar',
            component: Bar
        },
        {
            path: '/blog-post',
            name: 'blog-post',
            component: BlogPost
        },
        {
            path: '/*',
            component: Foo
        },
        // {
        //     path: '/storage-guide/start',
        //     name: 'storage-guide-start',
        //     component: () => import( /* webpackChunkName: "storage-guide" */ './views/Storage-guide.vue')
        // },
        // {
        //     path: '/storage-guide/booking-payment',
        //     name: 'storage-guide-booking-payment',
        //     component: () => import( /* webpackChunkName: "storage-guide" */ './views/storage-guide/Booking-payment.vue')
        // }
    ]
});