<template>
    <div>
      <form class="login100-form validate-form flex-sb flex-w" @submit.prevent="login">
					<span class="login100-form-title p-b-51">
						Login
					</span>
					<div class="wrap-input100 validate-input m-b-16">
            <input type="email" v-model="email"  class="input100" placeholder="Enter your email">
						<span class="focus-input100"></span>
					</div>
					<div class="wrap-input100 validate-input m-b-16">
            <input type="password"  v-model="password" class="input100" placeholder="Enter your password">
						<span class="focus-input100"></span>
					</div>
					<div class="container-login100-form-btn m-t-17">
						<button class="login100-form-btn" type="submit">
							Login
						</button>
					</div>
				</form>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
           return {
                 email: '',
                 password: '',
           };
    },
    computed: mapState({
        errors: state => state.auth.errors,
    }),
    methods: {
      ...mapActions([
        'LoginUser'
      ]),
       login: function () {
         const { email, password } = this
         this.LoginUser({email, password})
       }
    }
  }
</script>
