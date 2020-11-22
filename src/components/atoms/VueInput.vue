<template>
  <input 
    class="form-control"
    :type="type" 
    :value="value"
    :id="id"
    :required="required"
    :disabled="disabled"
    @input="$emit('input', $event.target.value)"
    >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number],
      default: null
    },
    id: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>