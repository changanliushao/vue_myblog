import Vue from 'vue'
import Router from "vue-router";
import Home from "@/Home";
import sidebar from "@/components/sidebar";
Vue.use(Router)

const router = new Router({
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/side',
            component: sidebar
        }
    ]

})

export default router
