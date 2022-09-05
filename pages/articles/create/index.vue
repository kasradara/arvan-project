<template>
  <AArticle title="New Article" />
</template>
<script>
import AArticle from '@/components/Article.vue'

export default {
  name: 'CreateArticle',
  components: { AArticle },
  layout: 'panel'
}
</script>
