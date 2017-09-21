export default {
    ValidationErrors(state, error){
        const errors = {};
        if (Object.keys(error).length) {
            Object.keys(error.errors).forEach((key) => {
              errors[key] = error.errors[key][0];
            });
        }
        state.errors = errors;
    },
    AuthToken(state, token){
        localStorage.setItem('_token', token)
        state.token = token;
    },
    Messege(state, messege){
        state.messege = messege;
    },
    Logout(state){
        localStorage.removeItem('_token');
        state.token = null;
    }
}
