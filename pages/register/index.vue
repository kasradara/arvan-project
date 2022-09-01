<template>
  <div>
    <a-auth type="register">
      <b-form @submit="submit">
        <a-input v-model="form.username" input-id="username" label="Username" />
        <a-input v-model="form.email" input-id="email" type="email" label="Email" />
        <a-input v-model="form.password" input-id="password" type="password" label="Password" />
        <b-button variant="primary" class="mt-4" type="submit" block>
          Register
        </b-button>
      </b-form>
    </a-auth>
  </div>
</template>

<script>
import AAuth from '@/components/Auth.vue'
import AInput from '@/components/form/input.vue'

export default {
  name: 'RegisterPage',
  components: { AAuth, AInput },
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
      event.preventDefault()
      this.$axios.post('api/users', {
        user: this.form
      })
    }
  }
}
</script>
