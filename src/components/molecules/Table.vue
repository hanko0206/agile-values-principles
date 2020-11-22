<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in arr" :key="item.id">
        <td>{{ item.value}}</td>
        <td>
          <vue-button variant="warning" btn_label="Edit" @click="$emit('edit', item.id, item.value)"/>
          <vue-button variant="danger" btn_label="Delete" @click="$emit('delete', item.id)"/>
        </td>
      </tr>
      <tr v-if="arr.length === 0">
        <td colspan="2">NO AVAILABLE DATA</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import VueButton from "../atoms/VueButton"
  export default {
    components: {
      VueButton
    },
    props: {
      arr: {
        type: Array,
        default: null
      },
      headers: {
        type: Array,
        default: null
      }
    }
  }
</script>