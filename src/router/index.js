import Vue from "nativescript-vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Counter from "../components/Counter.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/hello",
      component: HelloWorld,
      meta: {
        title: "Hello World",
      },
    },
    {
      path: "/counter",
      component: Counter,
      meta: {
        title: "Counter",
      },
    },
    { path: "*", redirect: "/home" },
  ],
});

router.replace("/home");

module.exports = router;
