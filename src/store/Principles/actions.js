import axios from 'axios';
const baseUrl = 'https://agile-value-principle.firebaseio.com/';

async function ADD(_, principles) {
  return await axios.post(`${baseUrl}principles.json`, principles)
}

async function GET_PRINCIPLES({commit}) {
  const { data } = await axios.get(`${baseUrl}principles.json`)
  const arr = []
  for(let key in data) {
    const val = {}
    val.value = data[key].principles
    val.id = key
    arr.push(val)
  }
  commit('SET_PRINCIPLE', arr)
  return data
}

async function DELETE_PRINCIPLE(_, id) {
  const { data } =  await axios.delete(`${baseUrl}principles/${id}.json`)
  return data
}

async function EDIT_PRINCIPLES(_, { id, newValue }) {
  const res = await axios.patch(`${baseUrl}principles/${id}.json`, {principles: newValue})
  return res
}
const actions = {
  ADD,
  GET_PRINCIPLES,
  DELETE_PRINCIPLE,
  EDIT_PRINCIPLES
}

export default actions