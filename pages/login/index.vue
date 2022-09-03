<template>
  <div>
    <a-auth type="login">
      <b-form @submit="submit">
        <a-input v-model="form.email" rules="required|email" input-id="email" type="email" label="Email" />
        <a-input v-model="form.password" rules="required" input-id="password" type="password" label="Password" />
        <b-button variant="primary" class="mt-4" type="submit" block>
          Login
        </b-button>
      </b-form>
    </a-auth>
  </div>
</template>

<script>
import AAuth from '@/components/Auth.vue'
import AInput from '@/components/form/input.vue'

export default {
  name: 'LoginPage',
  components: { AAuth, AInput },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()
      this.$axios.post('api/users/login', {
        user: this.form
      }).then((res) => {
        this.$cookies.set('authToken', res.data.user.token)
        this.$axios.get('api/user').then(() => {
          this.$router.push('/')
        })
      })
      // this.$auth.login({ data: { user: this.form } }).catch(({ response }) => {
      //   this.$bvToast.toast('User name and/or Password is invalid', {
      //     title: 'Login Failed!',
      //     variant: 'danger',
      //     solid: true
      //   })
      //   this.$refs.observer.setErrors(response.data.errors)
      // })
    }
  }

}
</script>
