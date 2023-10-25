import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
    },
    {
      path: "/create/post",
      name: "createPost",
      component: () => import("../views/CreatePostView.vue"),
    },
    {
      path: "/post/:postid",
      name: "post",
      props: true,
      component: () => import("../views/PostView.vue"),
    },
    {
      path: "/messages",
      name: "messages",
      component: () => import("../views/MessagesView.vue"),
    },
  ],
});

export default router;
