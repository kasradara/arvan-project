<template>
  <b-form-group :label="label" :label-for="inputId">
    <b-form-input
      :id="inputId"
      v-model="model"
      :type="type"
    />
    <b-form-invalid-feedback v-text="'salam'" />
  </b-form-group>
</template>

<script>
export default {
  name: 'InputComponents',
  props: {
    value: {
      type: String,
      required: true
    },
    inputId: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }

}
</script>
