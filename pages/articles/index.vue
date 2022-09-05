<template>
  <div>
    <ALoading v-if="$fetchState.pending" />
    <div v-else>
      <h1 class="py-4">
        All Posts
      </h1>
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
                  edit
                </nuxt-link>
                <b-dropdown-item @click="deleteArticle(article.slug)">
                  delete
                </b-dropdown-item>
              </b-dropdown>
            </td>
          </tr>
        </table>
      </div>
      <b-pagination-nav class="mt-4" align="center" :link-gen="changePage" :number-of-pages="pageCount" use-router />
    </div>
  </div>
</template>

<script>
import ALoading from '@/components/partials/Loading.vue'

export default {
  name: 'ArticlesPage',
  components: { ALoading },
  layout: 'panel',
  data () {
    return {
      articles: [],
      pageCount: 1
    }
  },
  async fetch () {
    const offset = (this.$route.query?.page - 1) * 10 || 0
    const { data } = await this.$axios.get('api/articles', {
      params: { limit: 10, offset }
    })
    this.articles = data.articles
    this.pageCount = data.articlesCount === 10
      ? parseInt(this.$route.query?.page) + 1 || 2
      : parseInt(this.$route.query?.page) || 1
  },
  watch: {
    $route () {
      this.$fetch()
    }
  },
  methods: {
    changePage (pageNum) {
      return {
        path: '/articles/',
        query: { page: pageNum }
      }
    },
    deleteArticle (slug) {
      this.$axios.$delete(`api/articles/${slug}`)
        .then(() => {
          this.$fetch()
        })
    }
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
