/**
 * Created by Administrator on 2017/8/14 0014.
 */
import VueRouter from 'vue-router';
const ArticleDetails = require('./views/ArticleDetails.vue');
import loadingBar from 'iview/src/components/loading-bar';
module.exports = function (Vue) {
    const routes = [
        {
            path: '*',
            component: resolve => require(['./views/404.vue'], resolve)
        },
        {
            path: '/',
            component: resolved => require(['./views/home.vue'], resolved)
        },
        {
            path: '/article',
            component: resolved => require(['./views/article.vue'], resolved)
        },
        {
            path: '/article/:id/details',
            component: resolved => require(['./views/ArticleDetails.vue'], resolved)
        }
    ];

    Vue.use(VueRouter);
    const router = new VueRouter({
        mode: 'history',
        routes
    });

    loadingBar.config({
        color: '#19be6b', // '#2d8cf0',
        failedColor: '#f0ad4e',
        height: 2
    });

    // 定义路由钩子
    router.beforeEach((to, from, next) => {
        loadingBar.start();
        next();
    });
    router.afterEach((to, from, next) => {
        loadingBar.finish();
    });
    return router;
};


