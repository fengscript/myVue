import vue from 'vue'
import app from './assets/app.vue'
import vueRouter from 'vue-router'
import './main.css'
import { vuex } from "vuex";


vue.use(vueRouter)
import routeConfig from './assets/router.config'


const router = new vueRouter({
  routes: routeConfig
})


new vue({
  el: '#app',
  router,
  // vuex,
  render: h => h(app)
})
// const app = new Vue({
//   router:router,
//   render:h=>h(App)
// }).$mount('#app')