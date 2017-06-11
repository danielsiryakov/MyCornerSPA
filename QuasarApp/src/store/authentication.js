import axios from 'axios'
import { LocalStorage } from 'quasar'

const API_URL = 'http://mycorner.store:8001/api/'
const LOGIN_URL = API_URL + 'transform'
const SIGNUP_URL = API_URL + 'user/create'

const state = {
  user: {
    authenticated: false
  }
}

const actions = {
  login ({ commit }, creds) {
    axios.get(LOGIN_URL, JSON.stringify(creds)).then(function (response) {
      LocalStorage.set('id_token', response.data.user_id)
      console.log(response)

      commit('changeAuthentication')
      // Redirect to a specified route
    }).catch(function (error) {
      console.log(error)
    })
  },

  signup ({ commit }, creds) {
    axios.post(SIGNUP_URL, JSON.stringify(creds)).then(function (response) {
      LocalStorage.set('id_token', response.data.user_id)

      commit('changeAuthentication')
    }).catch(function (error) {
      console.log(error)
    })
  },

  logout ({ commit }) {
    LocalStorage.remove('id_token')
    commit('changeAuthentication')
  }
}

const mutations = {
  changeAuthentication (state) {
    state.user.authenticated = !state.user.authenticated
  }
}

export default {
  state,
  actions,
  mutations
}
