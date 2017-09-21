<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
import * as config from './config.js';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    name: 'App',
    data() {
      return {
        error: null,
      }
    },
    components: {
    },
    methods: {
      logout() {
        this.loginPopup = false;
        this.LogoutUser();
      },
      ...mapActions([
        'LogoutUser',
      ]),
    },
    created() {},
    mounted() {},
    computed: {
      ...mapState({
        user: state => state.user
      })
    },
    watch: {
       '$route.name': function (id) {
         this.currentRouteName = this.$route.name;
       }
     },
};
</script>
