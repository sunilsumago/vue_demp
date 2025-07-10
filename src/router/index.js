// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import OurStory from "../pages/OurStory.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/our-story", component: OurStory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
