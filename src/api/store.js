import axios from 'axios'

export function getStoreData() {
  return axios({
    method: 'get',
    url: `${process.env.VUE_APP_BASE_URL}/storedata`
  })
}

export function getShelfData() {
  return axios({
    method: 'get',
    url: `${process.env.VUE_APP_BASE_URL}/shelfdata`
  })
}
