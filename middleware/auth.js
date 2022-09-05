export default async ({ $axios, redirect, store }) => {
  if (!store.state.user.checkForAuth) {
    await $axios.get('api/user').then((res) => {
      store.commit('user/updateUser', res.data.user)
    }).finally(() => {
      store.commit('user/checkForLogin')
    }).catch(() => {})
  }
}
