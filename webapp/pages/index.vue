<template>
  <div>
  <div id="main" class="flex justify-center flex-col items-center">
        <div class="flex">
            <input class="m-4">
            <img src="~assets/magnifying-glass-solid.svg"
            height="28">
        </div>

        <div class="flex flex-col items-center">
        make this into a movie card component. modify default project card?
            <div class="">
            <img src="">
            insert movie poster</div>
            <h1 class="text-xl">Movie Title</h1>
            <h3 class="w-64">Popularity summary Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>

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
  }
}
</script>
