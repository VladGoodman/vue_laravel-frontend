import { createStore } from 'vuex'
import repository from "../api/repository"


export default createStore({
  state: {
    // token: localStorage.getItem('token') || null,
    user: null
  },
  getters: {
    getUser(){
      return this.state.user
    },
    auth(){
      return this.state.user !== null
    }
  },
  mutations: {
    SET_USER(state, user){
      console.log(user);
      state.user = user;
    }
  },
  actions: {
    async login({commit}, user) {
      await repository.createSession();
      console.log(user);
      await repository.login(user)
        .then(res => {
            console.log(res)
            // commit('SET_USER', data)
          }
        )
        .catch(err => console.log(err.response.data));
    },
    async getAccountChanges(){
      await repository.createSession();
      await repository.AccountChanges()
        .then(res => console.log(res))
        .catch(err => console.log(err.response.data));
    }
  },
  modules: {}
})
