import Vue from "nativescript-vue";
import * as Accuracy from "tns-core-modules/ui/enums";
import * as geolocation from "nativescript-geolocation";
// import * as http from "http";

import router from "./router";
import store from "./store";
import "./styles.scss";


geolocation.enableLocationRequest();

/* const user = {
  _id: "5aa04c007173557e27782e77",
  nombre: "Calamardo",
  apellidos: "Guapo",
  borrado: false,
  position: {
    lat: 0,
    lng: 0,
  },
};

setInterval(() => {
  console.log("Empieza geolocalizacion");
  geolocation.getCurrentLocation({
    desiredAccuracy: Accuracy.high,
    maximumAge: 5000,
    timeout: 20000,
  }).then((resul) => { //eslint-disable-line
    user.position.lat = resul.latitude;
    user.position.lng = resul.longitude;
    enviarPost();
  });
}, 15000);

function enviarPost() {
  console.log("Actualizando posicion...");
  http.request({
    url: `http://192.168.0.35:3001/api/empleado/${user._id}`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    content: JSON.stringify(user),
  }).then(() => {
    console.log("Posición Actualizada");
  }, (e) => {
    console.log(`Error occurred ${e}`);
  });
} */

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
