import { createRouter, createWebHistory } from 'vue-router'
import RandomUserApi from '../views/random-user-api.vue'



const routes = [
    { path: '/', name: 'RandomUserApi', component: RandomUserApi },
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router