<script setup>
import Toolbar from "@components/Global/Toolbar/Toolbar.vue";
import { computed, watch } from "@vue/runtime-core";
import { useRoute as route } from "vue-router";
import Login from "./views/Login.vue";
// import { useStore as store } from "vuex";
const currentRouteName = computed(() => route().name);
// const isLoggedIn = store().dispatch("checkIfIsLoggedIn");
// watch(
//   function () { document.title = route().meta.title }
// )
</script>
<template>
  <v-app>
    <Toolbar :currentRoute="currentRouteName" />
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
button{
  letter-spacing: 0!important;
}
</style>