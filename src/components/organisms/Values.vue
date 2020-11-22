<template>
  <div class="agile-values">
    <h3>4 Agile Values</h3>
    <vue-table 
      :arr="fecthValues" 
      :headers="headers"
      @delete="showModal"
      @edit="toggleEdit"/>
    <!--DELETE Modal-->
    <modal
      :modalId="modalId"
      v-model="show"
      title="Delete"
      variant="danger"
      label="Delete"
      msg="Are you sure you want to delete this value?"
      @submit="deleteValues"/>
      <!--Edit Modal-->
    <modal
      :modalId="editModal"
      v-model="show"
      title="Edit"
      variant="warning"
      label="Edit"
      size="lg"
      msg="Enter a new value"
      @submit="editValues"
      >
      <template #modalContent>
        <vue-input v-model="val" placeholder="Enter a new value"/>
      </template>
    </modal>
  </div>
</template>

<script>
  import Modal from "../molecules/Modal"
  import VueInput  from "../atoms/VueInput"
  import VueTable from "../molecules/Table"
  export default {
    data() {  
      return {
        show: false,
        modalId: 'my-modal',
        valueID:'',
        editModal: 'edit-modal',
        val: '',
        editId: '',
        headers: ["Values", "Actions"]
      }
    },
    components: {
      Modal,
      VueInput,
      VueTable
    },
    computed: {
      fecthValues() {
        return this.$store.getters["Values/getValues"]
      }
    },
    methods: {
      fetch() {
        this.$store.dispatch("Values/GET_VALUES")
      },
      showModal(id) {
        this.valueID = id
        this.$bvModal.show(this.modalId)
      },
      async deleteValues() {
        await this.$store.dispatch("Values/DELETE_VALUES", this.valueID)
        this.fetch()
        this.$bvModal.hide(this.modalId)
      },
      toggleEdit(id, val) {
        this.val = val
        this.editId = id
        this.$bvModal.show(this.editModal)
      },
      async editValues() {
        await this.$store.dispatch("Values/EDIT_VALUES", {id: this.editId, newValue: this.val})
        this.fetch()
        this.$bvModal.hide(this.editModal)
      }
    },
    created() {
      this.fetch()
    }
  }
</script>