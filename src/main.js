import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import * as VueGoogleMaps from "vue2-google-maps";
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css';
import VueClipboard from 'vue-clipboard2'
import Modal from "./components/Modal.vue"
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import Loading from "./components/Loading.vue"
import '@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('vue-google-autocomplete', VueGoogleAutocomplete);

Vue.use(VueClipboard)
Vue.use(VueTelInput)
Vue.use(Vue2Editor);
Vue.component("Modal", Modal)
Vue.component("loading", Loading)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCF1gwsyl-b124fCqJGs31EXyIc9ti3cts",
    libraries: "places",

  }
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
