import axios from 'axios';
import { renderUserCard } from './render';
axios.defaults.baseURL = 'https://dummyjson.com/';

export function getUsers() {
  return axios('users').then(({ data }) => {
    renderUserCard(data.users);
  });
}

export function getOneUser() {
  return axios('users/?id').then(({ data }) => {
    return data;
  });
}
