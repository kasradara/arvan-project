export default ({ $axios, redirect, store }) => {
  if (!store.state.user.checkForAuth) {
    $axios.get('api/user').then((res) => {
      store.commit('user/updateUser', res.data.user)
    }).finally(() => {
      store.commit('user/checkForLogin')
    })
  }
}
