import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import ProductDetail from "../components/ProductDetail.vue";
import ProductList from "../components/ProductList.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/product/:id", component: ProductDetail },
    { path: "/productlist", component: ProductList },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
