import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Cocktails from '../views/cock-tails.vue'
import categoryList from '../composable/category-list.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/category/cocktails',name:'Cocktails', component: Cocktails },
    { path: '/category',name:'Category', component: categoryList },


]


const router = createRouter({
    history: createWebHistory(), routes
})


export default router