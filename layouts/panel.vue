<template>
  <div class="panel-layout">
    <div class="nav bg-dark text-light d-flex justify-content-between align-items-center py-2 px-4">
      <div>
        <span class="title"> Arvan Challenge</span>
        <span v-if="user.username"> Welcome {{ user.username }}</span>
      </div>
      <b-button variant="outline-info">
        Logout
      </b-button>
    </div>
    <div>
      <div class="sidebar bg-primary">
        e
      </div>
      <div class="main-section">
        <b-container fluid>
          <Nuxt />
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelLayout',
  computed: {
    user () {
      return this.$store.state.user.user
    }
  }
}
</script>
<style lang="scss">
  .panel-layout{
    .nav{
      position: sticky;
      top: 0;
      .title{
        font-size: 22px;
        margin-right: 20px;
      }
    }
    .sidebar{
      width: 250px;
      height: 100%;
      position: fixed;
    }
    .main-section{
      margin-left: 250px;
    }

  }
</style>
