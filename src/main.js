import Vue from 'vue'
import App from './assets/App.vue'
import VueRouter from 'vue-router'
import './main.css'


Vue.use(VueRouter)
import routeConfig from './assets/router.config'

const router = new VueRouter({
    routes:routeConfig
})

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
const app = new Vue({
  router:router,
  render:h=>h(App)
}).$mount('#app')