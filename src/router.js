import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/coupons",
    name: "Coupons",
    component: () => import("./views/Coupons.vue"),
    props: true
  },
  {
    path: '/coupons/:couponName',
    name: "CouponDescription",
    component: () => import("./views/CouponDescription.vue"),
    props: true
  }
]
const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

export default router