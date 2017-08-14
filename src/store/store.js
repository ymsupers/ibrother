/**
 * Created by Administrator on 2017/8/14 0014.
 */
import Vuex from 'vuex';
module.exports = function (Vue) {
    Vue.use(Vuex);
    const store = new Vuex.Store({
        state: {
            count: 1
        },
        mutations: {
            increment (state) {
                state.count++;
            }
        },
        getters: {
            getCount: state => {
                return state.get('count');
            }
        }
    });
    return store;
};