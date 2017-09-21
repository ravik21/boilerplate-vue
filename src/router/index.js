import Vue from 'vue';
import Router from 'vue-router';
import AuthIndex from '../pages/auth/index'
import Index from '../pages/index'
import Dashboard from '../pages/dashboard/index'
import GuestMiddleware from '@/middleware/guest'
import AuthMiddleware from '@/middleware/auth'


Vue.use(Router);

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/sign-in',
        component: AuthIndex,
        name: 'SignIn'
      },
      {
        path: '/',
        component: Index,
        name: 'Index',
        children: [
          {
            path: '/dashboard',
            component: Dashboard,
            name: 'Dashboard'
          }
        ]
      }
  ]
})
router.beforeEach(async (to, from, next) => {
  let redirect = GuestMiddleware.handle(to)
  if (!redirect) {
      redirect = AuthMiddleware.handle(to)
  }
    next(redirect);
});

export default router;
