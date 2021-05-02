import api from "./api"
import axios from 'axios'


export default {
  createSession(){
    return api.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
  },
  login(params){
    return api.post('http://127.0.0.1:8000/api/login', params);
  },
  register(params){
    return api.post('http://127.0.0.1:8000/api/register', params);
  },
  test(){
    return api.get('http://127.0.0.1:8000/api/test');
  },
  logout(){
    return api.delete('http://127.0.0.1:8000/api/logout');
  },
  AccountChanges(){
    return api.get('http://127.0.0.1:8000/api/user/changes');
  },
  getAccountInfo(){
    return api.get('http://127.0.0.1:8000/api/user');
  },
  createAccountChange(params){
    return api.post('http://127.0.0.1:8000/api/user/changes/create', params);
  },
  deleteChangeAccount(params){
    return api.post('http://127.0.0.1:8000/api/user/changes/delete', params);
  }
}
