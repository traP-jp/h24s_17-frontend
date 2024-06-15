import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import WelcomePage from "./pages/mac/WelcomePage.vue";

const routes = [{ path: "/", name: "aaaa", component: HomePage },{path: "/stand",name: "welcome",component: WelcomePage}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
