<template>
  <div>
    <a-auth>
      <b-form-group
        label="Email"
      >
        <b-form-input
          v-model="form.email"
          type="email"
          required
        />
      </b-form-group>
      <b-form-group
        label="Password"
      >
        <b-form-input
          v-model="form.password"
          type="password"
          required
        />
      </b-form-group>
    </a-auth>
  </div>
</template>

<script>
import aAuth from '@/components/Auth.vue'
export default {
  name: 'LoginPage',
  components: { aAuth },
  data () {
    return {
      form: {}
    }
  }
}
</script>
