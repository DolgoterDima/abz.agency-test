import Vue from "vue";
import VueRouter from "vue-router";

const githubPagesPrefix =
  process.env.NODE_ENV === "production" ? "/abz.agency-test-task/" : "/";

Vue.use(VueRouter);

const routes = [
  {
    path: `${githubPagesPrefix}`,
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: `${githubPagesPrefix}about`,
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
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
