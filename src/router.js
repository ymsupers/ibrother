/**
 * Created by Administrator on 2017/8/14 0014.
 */
import VueRouter from 'vue-router';
module.exports = function (Vue) {

    const routes = [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: resolve => require(['./views/Home.vue'], resolve)
        }
    ];

    Vue.use(VueRouter);
    const router = new VueRouter({
        mode: 'history',
        routes
    });
    return router;
};


