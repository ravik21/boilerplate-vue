<template>
    <div>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100 p-t-50 p-b-90">
            <sign-in v-if="this.currentRouteName == 'SignIn'"/>
        </div>
        <div v-if="thought.text" style="width:80%; margin: 0 auto;">
          <div class="thought-text">{{thought.text}}</div>
          <br>
          <h5 class="thought-author" v-if="thought.author">- {{thought.author}}</h5>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
  import SignIn from './signin'
  import * as quotes from './../../../static/json/enterpreneur-quotes.js';

  export default {
    data: function () {
      return {
        currentRouteName: 'SignIn',
        thought: {}
      }
    },
    components: {
      'sign-in': SignIn,
    },
    mounted() {
      this.currentRouteName = this.$route.name;
      this.thought = quotes.quotes[Math.floor((Math.random()*quotes.quotes.length))];

    },
    computed: { },
    watch: {
       '$route.name': function (id) {
         this.currentRouteName = this.$route.name;
       }
     },
  }
</script>
