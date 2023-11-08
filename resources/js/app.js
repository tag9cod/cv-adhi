/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
// import store from './store';

const app = createApp({});
const router = createRouter({
    history: createWebHistory(),
    routes
})


/** ------------------------ MENU ------------------------------- */
import AppCom from './components/AppComp.vue';
app.component('app-comp', AppCom);
import HeadCom from './components/HeaderComp.vue';
app.component('head-comp', HeadCom);
import ConCom from './components/ContactComp.vue';
app.component('cont-comp', ConCom);
/** ------------------------ END MENU --------------------------- */

/** ------------------------ PAGES ------------------------------- */
import workcom from './components/ExperienceComp.vue';
app.component('work-comp', workcom);


// app.use(store)
app.use(router).mount('#app');
