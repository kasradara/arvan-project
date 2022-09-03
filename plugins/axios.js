export default ({ $axios, $cookies, redirect, route }) => {
  $axios.onRequest(() => {
    $axios.setToken($cookies.get('authToken'), 'Bearer')
  })
  $axios.onError((error) => {
    if (error.response.status === 401 && route.name !== 'register' && route.name !== 'login') {
      redirect({ name: 'register' })
    }
  })
}
