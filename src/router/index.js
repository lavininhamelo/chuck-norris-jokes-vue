import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import DefaultLayout from "@/layouts/DefaultLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "post/:id",
        name: "post",
        props: true,
        component: () => import("@/views/Post.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
