import { createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/Cart.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
