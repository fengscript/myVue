import Vue from 'vue'
import App from './assets/App.vue'
import VueRouter from 'vue-router'
import './main.css'


Vue.use(VueRouter)
import routeConfig from './assets/router.config'


const router = new VueRouter({
    routes:routeConfig
})


  // import Vuex from 'vuex';
  // Vue.use(Vuex);
  //   const vuexStore = new Vuex.Store({
  //       state:{
  //           count:0
  //       },
  //       mutations: {
  //           increment(state){
  //               state.count++
  //           },
  //           decrement(state){
  //             state.count--
  //           }
  //       }
  //   })
  //    methods: {
  //   add(){
  //     store.commit('increament')
  //   },
  //   de(){
  //     store.commit('decrement')
  //   }
  // },
  // computed: {
  //   count(){
  //     return store.state.count
  //   }
  // },

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// const app = new Vue({
//   router:router,
//   render:h=>h(App)
// }).$mount('#app')