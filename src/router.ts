import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/mobile/HomePage.vue";
import WelcomePage from "./pages/mac/WelcomePage.vue";
import CheckinPage from "./pages/mobile/CheckinPage.vue";

const routes = [
  { path: "/", name: "aaaa", component: HomePage },
  { path: "/stand", name: "welcome", component: WelcomePage },
  { path: "/checkin", component: CheckinPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
