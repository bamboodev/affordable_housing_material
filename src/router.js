/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import Privacy from './pages/Privacy.vue'
import Tenants from './pages/Tenants.vue'
import Corporations from './pages/Corporations.vue'
import DonateHousing from './pages/DonateHousing.vue'
import Directors from './pages/Directors.vue'
import Directors2 from './pages/Directors2.vue'
// import Development from './pages/Development.vue'
// import Survey from './pages/Survey.vue'
// import Press from './pages/Press.vue'
import Contact from './pages/Contact.vue'
import Donate from './pages/Donate.vue'
// import Foo from './pages/Foo.vue'
// import Bar from './pages/Bar.vue'
// import BlogPost from './pages/BlogPost.vue'

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
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy
        },
        {
            path: '/tenants',
            name: 'tenants',
            component: Tenants
        },
        {
            path: '/corporations',
            name: 'corporations',
            component: Corporations
        },
        {
            path: '/donateHousing',
            name: 'donateHousing',
            component: DonateHousing
        },
        {
            path: '/directors',
            name: 'directors',
            component: Directors
        },
        {
            path: '/directors2',
            name: 'directors2',
            component: Directors2
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/donate',
            name: 'donate',
            component: Donate
        },
        {
            path: '/*',
            component: Home
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }

});