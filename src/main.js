import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import globalMixin from "@/mixins/global.js";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import store from "@/store/store.js";
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";
loadFonts();
createApp(App)
  .mixin(globalMixin)
  .use(vuetify)
  .use(router)
  .use(Vue3PersianDatetimePicker, {
    props: {
      color: "black",
    },
  })
  .mount("#app");
