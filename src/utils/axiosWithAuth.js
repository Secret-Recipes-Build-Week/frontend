//exported as default, not a named export
//remember to invoke axiosWithAuth() before .get/post/put/delete

import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: '',
  })
}

export default axiosWithAuth;