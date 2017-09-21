import request from '@/utils/request';
import router from '@/router/index';

export default {
    LoginUser({ commit }, credentials) {
      commit('ValidationErrors', {});
      request.post('/login', credentials)
      .then(resp => {
           const token = resp.data.success.token
           commit('AuthToken', token);
           router.push('/tracker');
         })
         .catch(error => {
               commit('ValidationErrors', error.response.data);
          })
    },
    RegisterUser({ commit }, data) {
      return new Promise((resolve, reject) => {

        commit('ValidationErrors', {});
        request.post('/register', data)
        .then(resp => {
          commit('Messege', 'Successfully registered');
          resolve(resp)
        })
        .catch(error => {
          if(error.response && error.response.status==422){
            commit('ValidationErrors', error.response.data);
            commit('Messege', null);
             reject(error)
          }
        })
      })
    },
    LogoutUser({ commit }) {
      commit('Logout');
        router.push('/sign-in');
    },
}
