<template>
  <div>
    <a-auth type="login">
      <a-form :request="submit">
        <a-input v-model="form.email" rules="required|email" input-id="email" type="email" label="Email" />
        <a-input v-model="form.password" rules="required" input-id="password" type="password" label="Password" />
        <b-button variant="primary" class="mt-4" type="submit" block>
          Login
        </b-button>
      </a-form>
    </a-auth>
  </div>
</template>

<script>
import AAuth from '@/components/Auth.vue'
import AInput from '@/components/form/input.vue'
import AForm from '@/components/form/Form.vue'

export default {
  name: 'LoginPage',
  components: { AAuth, AInput, AForm },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      this.$axios.post('api/users/login', {
        user: this.form
      }).then((res) => {
        this.$cookies.set('authToken', res.data.user.token)
        this.$axios.get('api/user').then(() => {
          this.$router.push({ name: 'articles' })
        })
      })
    }
  }

}
</script>
