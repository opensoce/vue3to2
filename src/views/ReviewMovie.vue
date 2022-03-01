<template>
  <div class="review-movie-detail">
    <div class="movie-image">
    <img :src="(`https://image.tmdb.org/t/p/original/${movie.poster_path}`)" alt="Movie Poster" />
    </div>

    <table id="movie-table-details">
    
    <tr> <h2>{{movie.original_title}}</h2> </tr>
    <tr> <p>{{ movie.release_date }}</p> </tr>
    <p> </p>
    <tr> <p>This is where you will review a movie</p> </tr>
    <tr><input type="range" min="1" max="100" value="50" class="slider" id="myRange"> </tr>
    <tr><input type="range" min="1" max="100" value="50" class="slider" id="myRange"> </tr>
    <tr><input type="range" min="1" max="100" value="50" class="slider" id="myRange"> </tr>
    <tr><input type="range" min="1" max="100" value="50" class="slider" id="myRange"> </tr>
    <tr><input type="range" min="1" max="100" value="50" class="slider" id="myRange"> {{Psychological}}</tr>
    <div>
    <b-form-select v-model="locale" :options="locales" class="mb-2"></b-form-select>
    <b-form-rating v-model="value" :locale="locale" show-value precision="1"></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>



    
    </table>
  </div>
</template>

<script>
import { ref, onBeforeMount } from '@vue/composition-api';
import env from '@/env.js'
import { useRoute } from 'vue-router';

export default {
  setup () {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}`)

        .then(response => response.json())
        .then(data => {
          movie.value = data;
        });
    });
    return {
      movie
    }
  },
  data() {
     return {
        value: 3.5,
        locale: 'en-US',
        locales: [
          { text: 'English US (en-US)', value: 'en-US' },
          { text: 'French (fr)', value: 'fr' },
          { text: 'Persian (fa)', value: 'fa'},
          { text: 'Arabic Egyptian (ar-EG)', value: 'ar-EG' }
        ]
      }
  }
}
</script>

<style lang="scss">
.review-movie-detail {
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
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #880808;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}
</style>