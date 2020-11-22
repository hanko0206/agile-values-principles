<template>
  <b-modal 
    hide-footer 
    centered
    :size="size"
    :id="modalId"
    :title="title">
    <div class="d-block">
      {{ msg }}
      <slot name="modalContent" />
    </div>
    <hr/>
    <vue-button class="modal-btn" :variant="variant" @click="$emit('submit')" :btn_label="label"/>
  </b-modal>
</template>

<script>
import VueButton from "../atoms/VueButton"
export default {
  components: {
    VueButton
  },
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    modalId: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'danger'
    },
    label: {
      type: String,
      default:''
    }
  }
}
</script>

<style scoped>
  .modal-btn {
    float: right;
  }
</style>