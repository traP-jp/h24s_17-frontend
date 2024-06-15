import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from './pages/plugins/vuetify';

const app = createApp(App);
app.use(router);
app.mount("#app");
