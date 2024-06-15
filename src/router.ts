import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import CheckinPage from "./pages/mobile/CheckinPage.vue";

const routes = [
  { path: "/", name: "aaaa", component: HomePage },
  { path: "/checkin", component: CheckinPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
