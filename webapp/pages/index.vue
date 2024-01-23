<template>
  <div>
  <div id="main" class="flex justify-center flex-col items-center" >
        <div class="flex">
            <input class="m-4" v-model="searchQuery">
            <button @click="search">search</button>
        </div>

        <div v-if="movieList.length" class="flex flex-col items-center">
          <div v-for="movie in movieList" >
            <div style="padding: 20px;">
              <img class="" :src="movie.poster_image_url" width="100" height="200">
              <h1 class="text-xl">{{movie.title}}</h1>
              <h2 class="text-xl">{{movie.popularity_summary}}</h2>
            </div>
            
            
          </div>
          


        </div>
    </div>
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