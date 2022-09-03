<template>
  <div>
    <h1>All Posts</h1>
    <div class="table-box">
      <table>
        <tr class="header">
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Tags</th>
          <th>Excerpt</th>
          <th>Created</th>
          <th />
        </tr>
        <tr v-for="(article, index) in articles" :key="index" class="body">
          <td>{{ index+1 }}</td>
          <td>{{ article.title }}</td>
          <td>@{{ article.author.username }}</td>
          <td>
            <span v-for="tag in article.tagList" :key="tag" class="d-block">
              {{ tag }}
            </span>
          </td>
          <td>{{ article.description | strLimit(20) }}</td>
          <td>{{ article.createdAt | fullDate }}</td>
          <td>
            <b-dropdown variant="info" right>
              <nuxt-link tag="b-dropdown-item" :to="`/articles/edit/${article.slug}`">
                tset
              </nuxt-link>
              <b-dropdown-item>Item 2</b-dropdown-item>
            </b-dropdown>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlesPage',
  layout: 'panel',
  data () {
    return {
      articles: []
    }
  },
  async fetch () {
    const { data } = await this.$axios.get('api/articles')
    this.articles = data.articles
  }
}
</script>
<style lang="scss">
.table-box {
  white-space: nowrap;
  overflow-x: auto;
  padding: 0 !important;
  margin-bottom: 0;
  table{
    width: 100%;
    .header{
      background-color: #eceeef;
      th {
        padding: 8px;
      }
    }
    td {
      padding: 16px 8px;
    }
    tr {
      border-bottom: 1px solid #ddd;
    }
  }
}

</style>
