import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = new Vuex.Store({
    state: {
        count: 0,
        modalState: false,
    },
    // getters: {
    // },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            setTimeout(function () {
                state.count--
            }, 2000);
        },
        modalShow(state){
            state.modalState = true;
        },
        modalHide(state){
            state.modalState = false;
        },
    },
    // actions: {
    // }
});

export default state