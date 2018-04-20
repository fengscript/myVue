import vue from 'vue';
import Vuex from 'vuex';
vue.use(Vuex);
const vuex = new Vuex.Store({
    state: {
        count: 9,
    },
    // 展示内容, 无法改变状态 
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
            state.count--
        }
    },
    actions: {
        increFromAction(context) {
            context.commit('increment')
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



export default {
    vuex
}