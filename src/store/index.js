import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import auth from './module/auth';


Vue.use(Vuex)

function getInitialState()
{
    return {
      isLogged: false,
      user: {},
      sync: false
    }
}


export default new Vuex.Store({
    modules: {
        auth
    },
    // plugins: [createPersistedState()]
})
