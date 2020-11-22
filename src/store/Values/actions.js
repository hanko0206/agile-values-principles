import axios from 'axios';
const baseUrl = 'https://agile-value-principle.firebaseio.com/';

async function ADD(_, values) {
  return await axios.post(`${baseUrl}values.json`, values)
}

async function GET_VALUES({commit}) {
  const { data } = await axios.get(`${baseUrl}values.json`)
  const arr = []
  for(let key in data) {
    const val = {}
    val.value = data[key].values
    val.id = key
    arr.push(val)
  }
  commit('SET_VALUES', arr)
  return data
}

async function DELETE_VALUES(_, id) {
  const { data } =  await axios.delete(`${baseUrl}values/${id}.json`)
  return data
}

async function EDIT_VALUES(_, { id, newValue }) {
  const res = await axios.patch(`${baseUrl}values/${id}.json`, {values: newValue})
  return res
}
const actions = {
  ADD,
  GET_VALUES,
  DELETE_VALUES,
  EDIT_VALUES
}

export default actions