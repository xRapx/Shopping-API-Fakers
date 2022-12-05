import axios from "axios";


const axiosClient = axios.create({ 
  baseURL:"https://62c6616174e1381c0a5ddc3a.mockapi.io",
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  function (config:AxiosRequestConfig) {
  // Do something with request is send
  return config;
},function (error){
  //Do something with request error
  return Promise.reject(error);
});

  //Add a reponse interceptor
axiosClient.interceptors.request.use(
  function (config:AxiosResponse) {
  // Any status  code that lie within the range of 2xx cause this function to trigger
  //Do something  with reponse  data
  return config;
},function (error){
  //Any status codes  that fails outstite  the range  of 2xx  cause  this function to trigger
  //Do something with response error 
  return Promise.reject(error);
});

export default axiosClient;
