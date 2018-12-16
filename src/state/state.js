import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = new Vuex.Store({
    state: {
        count: 0,
        modalState: false,
        modalDelCount:1,
        modalConfirm: false,
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
        delOne(state){
            state.modalState = true;
            state.modalDelCount = 1;
        },
        delAll(state){
            state.modalState = true;
            state.modalDelCount = 0;
        },
        btnConfirm(state){
            state.modalConfirm = true;
            state.modalState = false;
        },
        btnCancel(state){
            state.modalConfirm = false;
            state.modalState = false;
        },
        modalHide(state){
            state.modalState=false;
        }
    },
    // actions: {
    // }
});

export default state