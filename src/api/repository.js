import api from "./api"
import axios from 'axios'

export default {
  createSession(){
    return api.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
  },
  login(params){
    console.log(params)
    return api.post('http://localhost:8000/api/login', params);
  },
  test(){
    return api.get('http://localhost/vue_laravel-backend/api/test');
  },
  logout(){
    return api.delete('http://localhost/vue_laravel-backend/api/logout');
  },
  AccountChanges(){
    return api.delete('')
  }


}
