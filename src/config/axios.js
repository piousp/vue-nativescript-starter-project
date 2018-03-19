import Vue from "nativescript-vue";
import VueAxios from "vue-axios";
import VueProgressBar from "vue-progressbar";
import axios from "axios";

const a = axios.create({
  baseUrl: process.env.API_URL || "http://192.168.0.15:3001",
});

Vue.use(VueProgressBar, { thickness: "3px" });

a.interceptors.request.use((config) => {
  Vue.prototype.$Progress.start();
  return config;
}, (error) => {
  Vue.prototype.$Progress.fail();
  return Promise.reject(error);
});

a.interceptors.response.use((response) => {
  Vue.prototype.$Progress.finish();
  return response;
}, (error) => {
  Vue.prototype.$Progress.fail();
  return Promise.reject(error);
});

Vue.use(VueAxios, a);

export default a;
