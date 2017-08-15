/**
 * Created by mr.yang on 2017/8/13.
 */
import Vue from 'vue';
const store = require('./store/store')(Vue);
const router = require('./router')(Vue);
import App from './views/App.vue';
import 'highlight.js/styles/monokai-sublime.css';
const highlight = require('highlight.js');

// Vue: 定义指令
Vue.directive('highlight', obj => {
    highlight.highlightBlock(obj);
});

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
