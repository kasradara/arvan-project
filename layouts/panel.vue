<template>
  <div class="panel-layout">
    <nav class="nav bg-dark text-light d-flex justify-content-between align-items-center py-2 px-4">
      <div>
        <span class="title"> Crud Challenge</span>
        <span v-if="user.username"> Welcome {{ user.username }}</span>
      </div>
      <b-button variant="outline-info" @click="logout()">
        Logout
      </b-button>
    </nav>
    <div>
      <div class="sidebar bg-primary">
        <h3 class="sidebar-title">
          Post
        </h3>
        <ul>
          <nuxt-link :to="{name:'articles'}">
            <li>
              <span>
                All Articles
              </span>
            </li>
          </nuxt-link>
          <nuxt-link :to="{name:'articles-create'}">
            <li>
              <span>
                New Article
              </span>
            </li>
          </nuxt-link>
        </ul>
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
  },
  methods: {
    logout () {
      this.$cookies.remove('authToken')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style lang="scss">
  .panel-layout{
    .nav{
      position: sticky;
      top: 0;
      z-index: 2;
      .title{
        font-size: 22px;
        margin-right: 20px;
      }
    }
    .sidebar{
      width: 250px;
      height: 100%;
      position: fixed;
      color: white;
      .sidebar-title{
        padding: 16px 16px 8px;
        font-size: 22px;
      }
      ul{
        padding: 0;
        list-style: none;
        font-size: 18px;
        a{
          text-decoration: none;
          color: white;
        }
        li{
          padding: 12px 32px;
        }
        li:hover{
          background: rgba(255, 255, 255, 0.15);
          cursor: pointer;
        }
      }
    }
    .main-section{
      margin-left: 250px;
    }

  }
</style>
