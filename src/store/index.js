import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: localStorage.getItem('token') || null,
  },
  getters: {
    loggedIn (state) {
      return state.token !== null
    }
  },
  mutations: {
    saveLoginInfo (state, token) {
      state.token = token
      console.log(state.token)
    },
    removeToken (state) {
      state.token = null
      console.log(state.token + ":" + localStorage.getItem('token'))
    }
  },
  actions: {
    removeToken (context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('token')
        context.commit('removeToken')
      }
    },
    checkLoginInfo (context, info) {
//TODO: ПОСМОТРЕТЬ ПРО АСИНХРОННОСТЬ И ПРОМИСЫ!
      return new Promise((resolve, reject) => {
        axios.post('http://localhost/vue_laravel-backend/api/login', {
          email: info.email,
          password: info.password
        })
          .then(response => {
            const token = response.data.token
            localStorage.setItem('token', token)
            context.commit('saveLoginInfo', token)
            resolve(response)
          })
          .catch(error => {
            reject(error.response.data)
          })
      })
    }
  },
  modules: {}
})
