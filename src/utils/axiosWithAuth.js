//* exported as default, *not* a named export
//* remember to invoke axiosWithAuth() since it is a function before .get/post/put/delete

import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    // baseURL: "https://familyrecipe-app-backend.herokuapp.com", //*add baseURL for endpoint
  });
};

export default axiosWithAuth;
