import Home from './components/HomeComp.vue';
import AboutMe from './components/AboutComp.vue';
import Porto from './components/PortoComp.vue';
import Sertif from './components/SertifComp.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Home'
        },
    },
    {
        path: '/about',
        name: 'about',
        component: AboutMe,
        meta: {
            title: 'About Me'
        },
    },
    {
        path: '/sertifikasi',
        name: 'sertifikasi',
        component: Sertif
    },
    {
        path: '/portofolio',
        name: 'portofolio',
        component: Porto
    },
]