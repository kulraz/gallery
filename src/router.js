import {createRouter, createWebHistory,} from 'vue-router';
import MainPage from "@/components/MainPage.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";


const routes = [
    {
        path: '/main',
        component: MainPage,
    },
    {
        path: '/photogallery',
        component: PhotoGallery,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
