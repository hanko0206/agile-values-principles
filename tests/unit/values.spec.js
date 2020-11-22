import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import ValuesStore from '../../src/store/Values'

describe('test ValuesStore', () => {
  let store, setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()

    store = new Vuex.Store({
      state: { values: [] },
      mutations: {
        SET_VALUES: ValuesStore.mutations.SET_VALUES
      },
      actions: {
        ADD: ValuesStore.actions.ADD,
        FECTH: ValuesStore.actions.GET_VALUES,
        DELETE: ValuesStore.actions.DELETE_VALUES,
        EDIT: ValuesStore.actions.EDIT_VALUES
      }
    })
  })

  it('should add new agile values into the database', async (done) => {
    const {statusText} = await store.dispatch('ADD', {values: 'Agile values new'}) // values : this can be change
    done()
    return expect(statusText).toEqual('OK')
  },3000)

  it('should FECTH all the agile values from the DB', async (done) => {
    await store.dispatch('FECTH')
    done()
    return expect(store.state.values).toEqual(expect.any(Array))
  })//,
  // it('should delete specific data from the DB', async() => {
  //   const result = await store.dispatch('DELETE', '-MMeq2h-OPaIZbqNxI03') 
  //   return expect(result).toBe(null)
  // }),
  // it('should edit specific data from the DB', async() => {
  //   const id = '-MMhIlQKulz7uAPvGs1P', newValue = "Test" ;
  //   const { statusText } = await store.dispatch('EDIT', {id, newValue} )
  //   return expect(statusText).toEqual('OK')
  // })
})

//Commented test for the purpose of dynamic ID, please change the ID data based on the DB available value