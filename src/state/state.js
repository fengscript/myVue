
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const vuex = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    }
});
// vuex.commit('increment');
// console.log(vuex.state.count);

// methods: {
//     add() {
//       store.commit('increament')
//     },
//     decrease() {
//       store.commit('decrement')
//     }
//   }
// computed: {
//   count() {
//     return store.state.count
//   }
// }

// export {vuex}



export default {vuex}