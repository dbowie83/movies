<template>
  <div>
  <div id="main" class="flex justify-center flex-col items-center">
        <div class="flex">
            <input class="m-4" v-model="searchQuery">
            <button @click="search">search</button>
        </div>

        <div v-if="movieList.length" class="flex flex-col items-center">
          <div v-for="movie in movieList">
            <img class="" :src="movie.poster_image_url">
            <h1 class="text-xl">{{movie.title}}</h1>
            <h2 class="text-xl">{{movie.popularity_summary}}</h2>
          </div>
          


        </div>
    </div>

    <div>
      insert movies here
    </div>

<section class="section">
    <div class="columns is-mobile">
      <card
        title="Free"
        icon="github"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>

      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

    </div>
  </section>
  </div>


  
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'IndexPage',
  components: {
    Card
  }, 
  methods: {
    async search () {



      
      try {

        const response = await this.$axios.get('/api', {
          params: {
            query: this.searchQuery
          }
        });


        
        console.log(response.data)
        this.movieList = response.data
      } catch (err) {
        console.log(err)
      }
    }
  }, 
  data() {
    return {
      movieList: [], 
      searchQuery: ''
    }
  }
}
</script>

<!-- todo 
1) make the search query work
2) make the page display the json data as cards


-->