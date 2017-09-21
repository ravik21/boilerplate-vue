<template lang="html">
  <div>
      <div v-if="thought.text" style="width: 100%; margin: 15px auto;">
        <div class="thought-text">{{thought.text}}</div>
        <br>
        <h5 class="thought-author" v-if="thought.author">- {{thought.author}}</h5>
     </div>
  </div>
</template>

<script>
  import * as quotes from './../../../static/json/quotes.js';

  export default {
    components: {
    },
    data() {
      return {
        thought: {}
      }
    },
    mounted() {
      this.thought = quotes.quotes[Math.floor((Math.random()*quotes.quotes.length))];
    }
  }
</script>

<style lang="css" scoped>
</style>
