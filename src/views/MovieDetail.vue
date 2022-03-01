<template>
  <div class="movie-detail">
    <div class="movie-image">
      <img
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
        alt="Movie Poster"
      />
    </div>

    <table id="movie-table-details">
      <tr>
        <h2>{{ movie.original_title }}</h2>
      </tr>
      <tr>
        <p>{{ movie.release_date }}</p>
      </tr>
      <tr>
        <p>IMDB {{ movie.vote_average }}</p>
      </tr>
      <p></p>
      <tr>
        <p>{{ movie.overview }}</p>
      </tr>

      <tr>
        <router-link :to="'/movie/' + movie.id + '/review/'" class="movie-link">
          <button>Add A Review</button>
        </router-link>
      </tr>
    </table>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "@vue/composition-api";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        });
    });
    return {
      movie,
    };
  },
};
</script>

<style lang="scss">
.movie-detail {
  padding: 16px;
  h2 {
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .movie-image {
    img {
      display: block;
      max-width: 100%;
      margin-bottom: 16px;
    }
  }

  p {
    color: #FFF;
    font-size: 18px;
    line-height: 1.4;
  }
  .movie-table-details {
    border: 1px solid black;
    padding: 10px;
  }
}
</style>