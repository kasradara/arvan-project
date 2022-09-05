export const state = () => ({
  tags: []
})

export const getters = {
  sortedTags (state) {
    const sortedTags = [...state.tags].sort()
    const tags = []
    sortedTags.forEach((tag) => {
      tags.push({ text: tag, value: tag })
    })
    return tags
  }

}

export const mutations = {
  updateTags (state, payload) {
    state.tags = payload
  },
  addTag (state, payload) {
    state.tags.push(payload)
  }
}

export const actions = {
  getTags ({ commit }) {
    this.$axios.$get('api/tags').then((res) => {
      const { tags } = res
      commit('updateTags', tags)
    })
  }
}
