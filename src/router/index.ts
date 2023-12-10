import {createRouter, createWebHistory} from 'vue-router';
import Layout from '../components/Layout.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                { path: '/', component: Home }
            ]
        },
        { path: '/login', component: Login }
    ]
})

export default router;
