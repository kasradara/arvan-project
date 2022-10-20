import Vue from 'vue'
const instance = new Vue({})

export default ({ $axios, $cookies, app, redirect, route }) => {
  $axios.onRequest(() => {
    $axios.setToken($cookies.get('authToken'), 'Bearer')
  })
  $axios.onError((error) => {
    const err = error.response.data
    instance.$bvToast.toast(err.message, {
      variant: 'danger'
    })
    if (error.response.status === 401 && route.name !== 'register' && route.name !== 'login') {
      redirect({ name: 'login' })
    }
    if (err.errors) {
      Object.keys(err.errors).forEach((key) => {
        instance.$bvToast.toast(`${key} ${err.errors[key]}`, {
          variant: 'danger'
        })
      })
    }
  })
}
