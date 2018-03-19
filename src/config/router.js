import Vue from "nativescript-vue";
import VueRouter from "vue-router";
import * as appSettings from "tns-core-modules/application-settings";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "Login",
        publica: true,
      },
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    { path: "*", redirect: "/login" },
  ],
});

router.replace(appSettings.getBoolean("autenticado") ? "/home" : "/login");

router.beforeEach((to, from, next) => {
  if (appSettings.getBoolean("autenticado")) {
    if (to.name === "login") {
      next({ name: "home" });
    } else {
      next();
    }
  } else if (to.meta.publica) {
    next();
  } else {
    next({ name: "login" });
  }
});

module.exports = router;
