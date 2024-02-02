import LoginPage from '../components/Login'
import HomePage from '../components/HomePage'
import Signup from '../components/SignUp'
import VueRouter from 'vue-router';
import store from "../store/index";

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path:'/signup',
        name:'signup',
        component: Signup
    }
];
const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    // `requiresAuth` meta bilgisine sahip sayfalar için Authentication kontrolü yapılır
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            // Kullanıcı Authenticated değilse login sayfasına yönlendir
            next({
                name: 'login',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;