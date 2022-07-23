// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
export default createVuetify({
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
