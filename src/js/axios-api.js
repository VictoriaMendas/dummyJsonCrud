import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com/';

export function getUsers() {
  return axios('users?limit=18').then(({ data }) => {
    return data.users;
  });
}

export function getUserById(id) {
  return axios(`users/${id}`).then(({ data }) => {
    return data;
  });
}
