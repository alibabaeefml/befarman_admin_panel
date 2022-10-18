// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Vuetify
import { createVuetify } from "vuetify";
export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "BefarmanTheme",
    themes: {
      BefarmanTheme: {
        colors: {
          primary: "#e91e63",
          secondary: "#32cad5",
        },
      },
    },
  },
});
