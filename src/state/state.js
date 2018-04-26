import vue from 'vue';
import Vuex from 'vuex';
vue.use(Vuex);
const vuex = new Vuex.Store({
    state: {
        count: 9,
    },

    getters: {
        // tripleCounter: state => {
        //     return state.counter * 3;
        // }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            setTimeout(function() {
                state.count--
            }, 2000);
        }
    },
    actions: {
        // increFromAction(context) {
        //     setTimeout(function() {
        //         context.commit('increment')
        //     }, 2000);
        // }
    }
});

export default {
    vuex
}