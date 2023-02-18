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
          path: "Classlist",
          component: () => import("../views/front/ClasslistView.vue"),
        },
        {
          path: "Quesiton",
          component: () => import("../views/front/QuestionView.vue"),
        },
      ],
    },
  ],
});

export default router;
