<script setup>
import Toolbar from "@components/Global/Toolbar/Toolbar.vue";
import { computed, watch } from "@vue/runtime-core";
import { useRoute as route } from "vue-router";
import bg from '@/assets/Images/Header.jpg'
import Login from "./views/Login.vue";
// import { useStore as store } from "vuex";
const currentPath = computed(() => route().path);
// const isLoggedIn = store().dispatch("checkIfIsLoggedIn");
// watch(
//   function () { document.title = route().meta.title }
// )
</script>
<template>
  <v-app :style="currentPath==='/'?{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }:''">
    <Toolbar :currentPath="currentPath" />
    <router-view />
  </v-app>
</template>
<style>
@font-face {
  font-family: yl;
  src: url(./assets/Fonts/iranyekanweblightfanum.woff);
}

@font-face {
  font-family: ym;
  src: url(./assets/Fonts/iranyekanwebmedium.woff);
}

@font-face {
  font-family: yr;
  src: url(./assets/Fonts/iranyekanwebregular.woff);
}

@font-face {
  font-family: mxb;
  src: url(./assets/Fonts/Montserrat-ExtraBold.ttf);
}

@font-face {
  font-family: mm;
  src: url(./assets/Fonts/Montserrat-Medium.ttf);
}
@font-face {
  font-family: mm;
  src: url(./assets/Fonts/Montserrat-Medium.ttf);
}
@font-face {
  font-family: mb;
  src: url(./assets/Fonts/Montserrat-Bold.ttf);
}


button {
  letter-spacing: 0 !important;
}

.link {
  color: inherit;
  text-decoration: none;
}
* {
    text-decoration: none!important;
}

</style>