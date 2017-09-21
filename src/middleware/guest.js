import store from '@/store'

const routes = [
  'SignIn',
];

const guestMiddleware = {
  handle(to) {
    let redirect = null;
    if (routes.includes(to.name)) {
      if (store.state.auth.token) {
        redirect = '#';
      }
    }
    if (redirect) {
      return { path: redirect };
    }
  },
};

export default guestMiddleware;
