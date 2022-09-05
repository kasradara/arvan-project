<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(request)">
      <slot />
    </b-form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'FormValidation',
  props: {
    request: {
      type: Function,
      required: true
    }
  }
}
</script>
