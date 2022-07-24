import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "@/router";
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";
loadFonts();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(Vue3PersianDatetimePicker, {
    props: {
      color: "black",
    },
  })
  .mount("#app");
