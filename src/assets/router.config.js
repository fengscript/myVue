import Home from './Home.vue'

export default[
        {
            path:'/home',component:Home
        },
        {path: '*',redirect:'/home'}
]