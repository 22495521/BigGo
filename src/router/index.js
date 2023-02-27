import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "FrontPage",
          component: () => import("../views/front/FrontPage.vue"),
        },
        {
          path: "CourseOverview",
          component: () => import("../views/front/CourseOverview.vue"),
        },
        {
          path: "Quesiton",
          component: () => import("../views/front/QuestionView.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: () => import("../views/AdimnLayout.vue"),
      children: [
        {
          path: "course",
          component: () => import("../views/admin/CourseAdmin.vue"),
        },
        {
          path: "order",
          component: () => import("../views/admin/OrderAdmin.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../views/front/LoginView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
