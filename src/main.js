import vue from 'vue'
import app from './assets/App.vue'
import store from "./state/state";
import vueRouter from 'vue-router'
import routeConfig from './assets/router.config'


vue.use(vueRouter)

const router = new vueRouter({
  routes: routeConfig
})


new vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
})
// const app = new Vue({
//   router:router,
//   render:h=>h(App)
// }).$mount('#app')