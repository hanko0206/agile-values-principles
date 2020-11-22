<template>
  <div id="app" :key="appKey">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Agile</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/">Values</router-link>
            <router-link class="nav-link" to="/agile-principles">Principles</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div id="add-form">
      <b-alert v-model="alert.show" :variant="alert.alertVariant" dismissible>
        {{ alert.alertmsg }}
      </b-alert>
      <add-form :formId="formId" @submit="add"/>
      <vue-button
        class="btn-app"
        :btnBlock="false"
        variant="outline-primary"
        btn_label="Add Agile Values" 
        type="submit"
        @click="btnClick = 'values'"
        :form="formId"/>
      <vue-button
        class="btn-app"
        :btnBlock="false"
        variant="outline-secondary"
        btn_label="Add Agile Principles" 
        type="submit"
        @click="btnClick = 'principles'"
        :form="formId"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import AddForm from "./components/organisms/AddForm"
  import VueButton from "./components/atoms/VueButton"
  export default {
    components: {
      AddForm,
      VueButton
    },
    data() {
      return {
        formId: "Add",
        btnClick: '',
        appKey: 1,
        alert: {
          show: false,
          alertVariant: 'success',
          alertmsg: ''
        }
      }
    },
    methods: {
      async add(value) {
        if(this.btnClick === 'principles') {
         this.addNewPrinciple(value)
        }

        if(this.btnClick === 'values'){
          this.addNewValues(value)
        }
      },
      async addNewValues(value) {
        const valLength = await this.valuesLength()
        if(valLength < 4) {
          await this.$store.dispatch("Values/ADD", { values: value })
          if(this.$route.fullPath !== '/') this.$router.push({name: 'Values'})

          this.alert.show = true
          this.alert.alertVariant = 'success'
          this.alert.alertmsg = "New Agile Values added!"
        }else {
          this.alert.show = true
          this.alert.alertVariant = 'danger'
          this.alert.alertmsg = "You have exceed the specified data limit of 4"
        }
        setTimeout(() => {
          this.alert.show = false
        }, 2000)
        this.appKey += 1
      },
      async addNewPrinciple(value) {
        const priLength = await this.principlesLength()
        if(priLength < 12) {
          await this.$store.dispatch('Principles/ADD', { principles: value })
          if(this.$route.fullPath !== '/agile-principles')  this.$router.push({name: 'principles'})
          
          this.alert.show = true
          this.alert.alertVariant = 'success'
          this.alert.alertmsg = "New Agile Principles added!"
        }else {
          this.alert.show = true
          this.alert.alertVariant = 'danger'
          this.alert.alertmsg = "You have exceed the specified data limit of 12"
        }
        setTimeout(() => {
          this.alert.show = false
        }, 2000)

        this.appKey += 1
      },
      async valuesLength() {
       const res = await this.$store.dispatch("Values/GET_VALUES")
       return res ? Object.keys(res).length : 0
      },
      async principlesLength() {
        const res = await this.$store.dispatch('Principles/GET_PRINCIPLES')
        return res ? Object.keys(res).length : 0
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#add-form {
  padding: 3rem 5rem;
}
.btn-app {
  width: 40%;
  margin-right: 10px;
}
</style>
