import store from '@/store'

const routes = [
  'Index',
  'Dashboard',
];

const authMiddleware = {
  handle(to) {
    let redirect = null;
    if (routes.includes(to.name)) {
      if (!store.state.auth.token) {
        redirect = '/sign-in';
      }
    }
    if (redirect) {
      return { path: redirect };
    }
  },
};

export default authMiddleware;
