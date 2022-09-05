<template>
  <div>
    <a-auth type="register">
      <a-form :request="submit">
        <a-input v-model="form.username" rules="required|min:5" input-id="username" label="Username" />
        <a-input v-model="form.email" rules="required|email" input-id="email" type="email" label="Email" />
        <a-input v-model="form.password" rules="required|min:8" input-id="password" type="password" label="Password" />
        <b-button variant="primary" class="mt-4" type="submit" block>
          Register
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
  name: 'RegisterPage',
  components: { AAuth, AInput, AForm },
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit (event) {
      this.$axios.post('api/users', {
        user: this.form
      }).then(() => {
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>
