<template>
  <validation-provider v-slot="{ errors }" :rules="rules" :name="label">
    <b-form-group :label="label" :label-for="inputId">
      <b-textarea
        :id="inputId"
        v-model="model"
        :rows="rows"
        :state="errors[0] ? false : null"
      />
      <b-form-invalid-feedback v-text="errors[0]" />
    </b-form-group>
  </validation-provider>
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
    rules: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: '10'
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
