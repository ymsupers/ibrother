/**
 * Created by mr.yang on 2017/8/13.
 */
import Vue from 'vue';
const store = require('./store/store')(Vue);
const router = require('./router')(Vue);
import App from './views/App.vue';

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
