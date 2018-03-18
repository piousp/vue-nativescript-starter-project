import Vue from "nativescript-vue";
// import * as geolocation from "nativescript-geolocation";
import auth from "./config/auth.js";
import axios from "./config/axios";

import router from "./config/router.js";
import store from "./store";
import "./styles.scss";

// geolocation.enableLocationRequest();

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

Vue.use(auth, axios);
Vue.prototype.$auth.setHeaders();

new Vue({
  router,
  store,
}).$start();
