import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const publicPath =
  process.env.NODE_ENV !== "production" ? "/abz.agency-test-task/" : "/";

const routes = [
  {
    path: `/`,
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: `/about`,
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: publicPath,
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
