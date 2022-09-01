<template>
  <div class="auth">
    <b-container>
      <div class="auth-box">
        <h1 class="title">
          LOGIN
        </h1>
        <b-form>
          <slot />
          <b-button variant="primary" class="mt-2" type="submit" block>
            Login
          </b-button>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'AuthComponent'
}
</script>

<style lang="scss" scoped>
  .auth{
    .auth-box{
      max-width: 450px;
      margin: 0 auto ;
      padding: 37px 20px 19px;
      background-color: #eceeef;
      border-radius: 4px;
      text-align: center;
      .title{
        font-size: 47px;
        color: #707070;
      }
    }
  }
</style>
