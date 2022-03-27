import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path:'/',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/regist',
        component:Regist
    }],
    // ...
  })
export default router