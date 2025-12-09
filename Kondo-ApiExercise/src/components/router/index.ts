import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Cocktails from '../views/cocktails-list.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/cocktails',name:'Cocktails', component: Cocktails },
    


]


const router = createRouter({
    history: createWebHistory(), routes
})


export default router