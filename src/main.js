import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Home from "./views/Home.vue";
import MovieDetail from "./views/MovieDetail.vue";
import ReviewMovie from "./views/ReviewMovie.vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/movie/:id", component: MovieDetail },
  { path: "/movie/:id/review", component: ReviewMovie }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
