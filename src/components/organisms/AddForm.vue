<template>
  <form @submit.prevent="submit" :id="formId">
    <div class="form-group">
      <vue-input v-model="val" placeholder="Enter a value"/>
    </div>
  </form>
</template>

<script>
import VueInput  from "../atoms/VueInput"
export default {
  data() {
    return {
      val: ""
    }
  },
  props: {
    formId: {
      type: String,
      default:""
    }
  },
  components: {
    VueInput
  },
  methods: {
    submit() {
      this.$emit('submit', this.val)
      this.val = ""
    }
  }
}
</script>