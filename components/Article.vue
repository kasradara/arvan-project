<template>
  <div>
    <ALoading v-if="$fetchState.pending" />
    <div v-else>
      <h1 class="py-4">
        {{ title }}
      </h1>
      <div class="row">
        <div class="col-md-8">
          <a-form :request="submit">
            <a-input v-model="form.title" rules="required" input-id="title" label="Title" />
            <a-input v-model="form.description" rules="required" input-id="description" label="Description" />
            <ATextarea v-model="form.body" rules="required" input-id="body" label="Body" />
            <b-button v-if="!loading" type="submit" variant="primary">
              Submit
            </b-button>
            <b-spinner v-else variant="primary" />
          </a-form>
        </div>
        <div class="col-md-4">
          <b-form @submit.prevent="addTag">
            <b-form-group label="Tags" label-for="newTag">
              <b-form-input
                id="newTag"
                v-model="newTag"
                type="text"
                placeholder="New Tag"
                required
              />
            </b-form-group>
            <div class="border rounded-sm p-3">
              <b-form-group class="mb-0">
                <b-form-checkbox-group
                  v-model="form.tagList"
                  :options="$store.getters['tags/sortedTags']"
                  name="tags"
                  stacked
                />
              </b-form-group>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AInput from '@/components/form/Input.vue'
import ATextarea from '@/components/form/Textarea.vue'
import AForm from '@/components/form/Form.vue'
import ALoading from '@/components/partials/loading.vue'

export default {
  name: 'ArticleComponent',
  components: { AInput, ATextarea, AForm, ALoading },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isCreating: this.$route.name === 'articles-create',
      slug: this.$route.params.slug,
      loading: false,
      newTag: '',
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ],
      form: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  async fetch () {
    if (!this.isCreating) {
      const { article } = await this.$axios.$get(`api/articles/${this.slug}`)
      this.form.title = article.title
      this.form.description = article.description
      this.form.body = article.body
      this.form.tagList = article.tagList
    }
  },
  created () {
    if (!this.$store.state.tags.tags.length) {
      this.$store.dispatch('tags/getTags')
    }
  },
  methods: {
    addTag () {
      this.$store.commit('tags/addTag', this.newTag)
      this.form.tagList.push(this.newTag)
      this.newTag = ''
    },
    submit () {
      this.loading = true
      const params = this.isCreating ? '' : `/${this.slug}`
      this.$axios[this.isCreating ? 'post' : 'put'](`api/articles${params}`, {
        article: this.form
      }).then(() => {
        this.$router.push({ name: 'articles' })
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
