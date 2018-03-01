const Vue = require('nativescript-vue/dist/index')
const http = require("http")

import JsComponent from './components/JsComponent';
import VueComponent from './components/VueComponent';

import './app.scss'

Vue.prototype.$http = http

new Vue({
  components: {
    JsComponent,
    VueComponent
  },

  template: `
    <page ref="page">
      <stack-layout>
        <js-component></js-component>
        <vue-component></vue-component>
      </stack-layout>
    </page>
  `,
  methods: {
  }
}).$start()
