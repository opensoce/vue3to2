<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591">
        <img
          src="https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg"
          alt="Featured Poster"
          class="featured-img"
        />
        <div class="detail">
          <h3>Hereditary</h3>
          <p>
            When the matriarch of the Graham family passes away, her daughter
            and grandchildren begin to unravel cryptic and increasingly
            terrifying secrets about their ancestry, trying to outrun the
            sinister fate they have inherited.
          </p>
        </div>
      </router-link>
    </div>

    <form @submit.prevent="SearchMovies()" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          <div class="product-image">
            <img
              :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
              alt="Movie Poster"
            />

            <div class="rating">{{ movie.vote_average }} ☆</div>
          </div>
          <div class="detail">
            <h3>{{ movie.original_title }}</h3>
            <p class="year">{{ movie.release_date }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import env from "@/env.js";

export default {
  setup() {
    const search = ref("");
    const movies = ref([]);

    //Get popular horror movies and populate the home page with them
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${env.apikey}&with_genres=27`
    )
      .then((response) => response.json())
      .then((data) => {
        movies.value = data.results;
        search.value = "";
      });

    const SearchMovies = () => {
      if (search.value !== "") {
        //fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&language=en-US&query=${search.value}&page=1&include_adult=false`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.results;
            search.value = "";
          });
      }
    };

    return {
      search,
      movies,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;
    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }
    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;
      h3 {
        color: #FFF;
        margin-bottom: 16px;
      }
      p {
        color: #FFF;
      }
    }
  }
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      &[type="text"] {
        width: 100%;
        color: #FFF;
        background-color: #909090;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #505050;
        padding: 16px;
        border-radius: 8px;
        color: #FFF;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        &:active {
          background-color: #910000;
        }
      }
    }
  }
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        .product-image {
          position: relative;
          display: block;
          img {
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }
          .rating {
            position: absolute;
            padding: 8px 16px;
            background-color: #000000;
            color: #FFF;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }
        .detail {
          background-color: #202020;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;
          .year {
            color: #AAA;
            font-size: 14px;
          }
          .rating {
            color: #AAA;
            font-size: 14px;
          }
          h3 {
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>