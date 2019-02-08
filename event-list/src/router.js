import Vue from "vue";
import Router from "vue-router";
import EventShow from "./views/EventShow.vue";
import EventList from "./views/EventList.vue";
import EventCreate from "./views/EventCreate.vue";

// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event",
      name: "event-show",
      component: EventShow
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
        // import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate
    }
  ]
});
