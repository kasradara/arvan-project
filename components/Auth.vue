<template>
  <div class="auth text-muted">
    <b-container>
      <div class="auth-box">
        <h1 class="title">
          {{ type === 'login' ? 'LOGIN' : 'REGISTER' }}
        </h1>
        <slot />
        <div v-if="type === 'login'" class="mt-3">
          <span>Don’t have account?</span>
          <nuxt-link class="change-route text-body" :to="{name: 'register'}">
            Register Now
          </nuxt-link>
        </div>
        <div v-else class="mt-3">
          <span>Already Registered?</span>
          <nuxt-link class="change-route text-body" :to="{name: 'login'}">
            Login
          </nuxt-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'AuthComponent',
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth{
    display: flex;
    align-items: center;
    height: 100vh;
    .auth-box{
      max-width: 450px;
      margin: 0 auto ;
      padding: 37px 20px 19px;
      background-color: #eceeef;
      border-radius: 4px;
      .title{
        text-align: center;
        font-size: 47px;
        margin-bottom: 28px;
      }
      .change-route{
        margin-left: 10px;
        font-weight: bold;
      }
    }
  }
</style>
