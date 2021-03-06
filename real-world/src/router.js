import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("@/components/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/components/Register.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/articles/:slug",
      name: "detail",
      component: () => import("@/components/Detail.vue")
    },
    {
      path: "/tag/:tag",
      name: "tag",
      component: () => import("@/components/TagsArticle.vue")
    },
    {
      path: "/@:username",
      name: "username",
      component: () => import("@/components/User.vue")
    }
  ]
});
