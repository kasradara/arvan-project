export const state = () => ({
  user: {},
  checkForAuth: false
})

export const mutations = {
  updateUser (state, payload) {
    state.user = payload
  },
  checkForLogin (state) {
    state.checkForAuth = true
  }
}

export const actions = {
}
