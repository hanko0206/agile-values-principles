import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import PrinciplesStore from '../../src/store/Principles'

describe('test PrinciplesStore', () => {
  let store, setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()

    store = new Vuex.Store({
      state: { principles: [] },
      mutations: {
        SET_PRINCIPLE: PrinciplesStore.mutations.SET_PRINCIPLE
      },
      actions: {
        ADD: PrinciplesStore.actions.ADD,
        FETCH: PrinciplesStore.actions.GET_PRINCIPLES,
        DELETE: PrinciplesStore.actions.DELETE_PRINCIPLE,
        EDIT: PrinciplesStore.actions.EDIT_PRINCIPLES
      }
    })
  })

  it('should add new principle data to the DB', async(done) => {
    const {statusText} = await store.dispatch('ADD', {principles: 'New Principles...'}) // principles : this can be change
    done()
    return expect(statusText).toEqual('OK')
  },3000),
  it('should fetch all the agile values from the DB and mutate the state', async (done) => {
    await store.dispatch('FETCH')
    done()
    return expect(store.state.principles).toEqual(expect.any(Array))
  }, 3000)//,
  // it("should delete specific data from the DB using ID", async() => {
  //   const result = await store.dispatch('DELETE', '-MMhenfdkgoyToo35P44') 
  //   return expect(result).toBe(null)
  // })
  // it("should edit specific principle from DB using ID", async() => {
  //   const id = '-MMhf31g4wGV7tuht9j9', newValue = "Edited Principle";
  //   const { statusText } = await store.dispatch('EDIT', {id, newValue} )
  //   return expect(statusText).toEqual('OK')
  // }) 
})