<template>
  <b-button :type="type" :variant="variant" @click="$emit('click')">
    {{ btn_label }}
  </b-button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    btn_label: {
      type: String,
      default: "Button"
    },
    btnBlock: {
      type: Boolean,
      default: true
    },
    variant: {
      type: String,
      default: ""
    }
  }
}
</script>