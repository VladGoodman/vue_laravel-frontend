import { createStore } from 'vuex'
import repository from '../api/repository'

export default createStore({
  state: {
    user: localStorage.getItem('user') || null,
    username: localStorage.getItem('username'),
    user_names: JSON.parse (localStorage.getItem('user_names'))
  },
  getters: {
    user: state => state.user,
    authenticated: state => state.user !== null,
    names: state => state.user_names,
    username: state => state.username,
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
    },
    SET_USER_INFO(state, info){
      state.username = info.user[0]
      state.user_names = info.user[1]
      localStorage.setItem('username', info.user[0])
      localStorage.setItem('user_names', JSON.stringify(info.user[1]))
      console.log(localStorage.getItem('user_names'))
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
    getAccountInfo({ commit }){
      return new Promise((resolve, reject) => {
        repository.getAccountInfo()
          .then((res) => {
            commit('SET_USER_INFO', res.data)
            resolve(res)
          })
          .catch((err) => {
            console.log(err)
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
    createUserChange({commit}, params){
       console.log(params)
       repository.createAccountChange(params)
         .then((res) => {
           console.log(res)
         })
         .catch((err) => {
           console.log(err)
         })
    },
    deleteChangeAccount({ commit }, id){
      console.log(id)
      repository.deleteChangeAccount({id:id})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  }
})
