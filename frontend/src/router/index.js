import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Camping from "../views/Camping.vue";
import Beach from "../views/Beach.vue";
import Dashboard from "../views/Dashboard.vue";
import Mountain from "../views/Mountain.vue";
import Cities from "../views/Cities.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/camping",
    name: "Caming",
    component: Camping,
  },
  {
    path: "/cities",
    name: "Cities",
    component: Cities,
  },
  {
    path: "/mountain",
    name: "Mountain",
    component: Mountain,
  },
  {
    path: "/beach",
    name: "Beach",
    component: Beach,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
