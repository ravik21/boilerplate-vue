import Vue from 'vue';

import app from './app'
import router from './router'
import store from './store/index';

import './styles/index.scss'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(axios);

router.beforeEach(function (to, from, next) {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

    next();
});

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app');
