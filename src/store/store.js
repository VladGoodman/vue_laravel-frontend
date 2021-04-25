import { createStore } from 'vuex'
import repository from '../api/repository'

export default createStore({
  state: {
    user: localStorage.getItem('user') || null
  },
  getters: {
    user: state => state.user,
    authenticated: state => state.user !== null,
  },
  mutations: {
    SET_USER (state, user) {
      console.log(user)
      state.user = user.token
      localStorage.setItem('user', user.token)
    },
    LOGOUT_USER (state) {
      state.user = null
      localStorage.removeItem('user')
      console.log(state.user)
    }
  },
  actions: {
     login ({ commit }, user) {
       repository.createSession()
        .then(res => {
          repository.login(user)
            .then((res) => {
              if (res.status === 201) {
                console.log('Login is true')
                commit('SET_USER', res.data)
              }
              console.log(res)
            })
            .catch((err) => {
              console.log('Login is false')
            })
        })
    },
    logout ({ commit }) {
      return new Promise((resolve) => {
        localStorage.removeItem('user')
        repository.logout()
          .then((res) => {
            commit('LOGOUT_USER')
            resolve(true)
          })
          .catch((err) => {
            console.log(err.response.data.errors)
          })
      })
    },
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        repository.register(user)
          .then((res) => {
            console.log(res)
            commit('SET_USER', res.data)
            resolve(res)
          })
          .catch((err) => {
            console.log('Register is false')
            reject(err)
          })
      })
    },
    getAccountChanges () {
      return new Promise((resolve, reject) => {
        repository.AccountChanges()
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getUserInfo(){
      return new Promise((resolve, reject) => {
        repository.getAccountInfo()
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    createUserChange(params){
       repository.createAccountChange(params)
         .then((res) => {
           console.log(res)
         })
         .catch((err) => {
           console.log(err)
         })
    }
  }
})
