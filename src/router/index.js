import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";
import ReviewMovie from "../views/ReviewMovie.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: MovieDetail
  },
  {
    path: "/movie/:id/review",
    name: "Review Movie",
    component: ReviewMovie
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
