<template>
  <div>
    <h3>12 Agile Principles</h3>
    <vue-table 
      :headers="headers"
      @delete="showModal"
      @edit="toggleEdit"
      :arr="fetchPrinciples"/>
  <!--DELETE MODAL-->
    <modal
      :modalId="modalId"
      v-model="show"
      title="Delete"
      variant="danger"
      label="Delete"
      msg="Are you sure you want to delete this principle?"
      @submit="deletePrinciple"/>
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
        <vue-input v-model="principle" placeholder="Enter a new value"/>
      </template>
    </modal>
  </div>
</template>

<script>
  import VueTable from "../molecules/Table"
  import VueInput  from "../atoms/VueInput"
  import Modal from "../molecules/Modal"
  export default {
    components: {
      VueTable,
      VueInput,
      Modal
    },
    data() {
      return {
        headers: ['Agile Principles', 'Actions'],
        modalId: 'DELETE',
        show: false,
        principleId: '',
        principle: '',
        editId: '',
        editModal: 'edit-modal'
      }
    },
    computed: {
      fetchPrinciples() {
        return this.$store.getters['Principles/GET_PRINCIPLES']
      }
    }, 
    methods: {
      fetch() {
        this.$store.dispatch("Principles/GET_PRINCIPLES")
      },
      showModal(id) {
        this.principleId = id
        this.$bvModal.show(this.modalId)
      },
      toggleEdit(id, value) {
        this.principle = value
        this.editId = id
        this.$bvModal.show(this.editModal)
      },
      async deletePrinciple() {
         await this.$store.dispatch("Principles/DELETE_PRINCIPLE", this.principleId)
        this.fetch()
        this.$bvModal.hide(this.modalId)
      },
      async editValues() {
        await this.$store.dispatch("Principles/EDIT_PRINCIPLES", {id: this.editId, newValue: this.principle})
        this.fetch()
        this.$bvModal.hide(this.editModal)
      }
    },
    created() {
      this.fetch()
    }
  }
</script>