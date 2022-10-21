import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";
import ApiService from "@/services/api.services";
loadFonts();

ApiService.init("https://app.befarman.com");

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .use(Vue3PersianDatetimePicker, {
    props: {
      color: "black",
    },
  })
  .mount("#app");
