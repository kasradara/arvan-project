<template>
  <div class="loading">
    <b-spinner variant="primary" class="spinner" />
    <span class="content text-primary">
      Loading
    </span>
  </div>
</template>
<script>
export default {
  name: 'LoadingComponent'
}
</script>
<style lang="scss" scoped>
  .loading{
    text-align: center;
    .spinner{
      width: 150px;
      height: 150px;
      margin-top: 150px;
    }
    .content{
      display: block;
      margin-top: 15px;
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
