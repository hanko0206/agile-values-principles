import Vue from 'vue'
import Vuex from 'vuex'
import Values from './Values/index'
import Principles from './Principles/index'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  modules: {
    Values,
    Principles
  }
})