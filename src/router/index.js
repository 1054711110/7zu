import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import study from './study'
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/lx/list",
    name: "/lx/list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/lx/list")
  },
  {
    path: "/lx/list",
    name: "/lx/list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/lx/list")
  },
  {
    path: "/lx/list1",
    name: "/lx/list1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/lx/list1")
  },
  {
    path: "/lx/list3",
    name: "/lx/list3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/lx/list3")
  },
  {
    path: "/lx/list4",
    name: "/lx/list4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/lx/list4")
  },
];

const router = new VueRouter({
  routes
});

export default router;
