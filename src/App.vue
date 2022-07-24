<script setup>
import Toolbar from "@components/Global/Toolbar/Toolbar.vue";
import { computed, watch } from "@vue/runtime-core";
import { useRoute as route } from "vue-router";
import bg from '@/assets/Images/Header.jpg'
import Login from "./views/Login.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
// import { useStore as store } from "vuex";
const currentPath = computed(() => route().path);
// const isLoggedIn = store().dispatch("checkIfIsLoggedIn");
// watch(
//   function () { document.title = route().meta.title }
// )
const width = computed(() => useDisplay().width.value);
const sm = computed(() => useDisplay().width.value < 800);
</script>
<template>
  <v-app
    :style="currentPath === '/' ? { background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : ''">
    <Toolbar :currentPath="currentPath" />
    <router-view
      :style="{ marginTop: !sm && currentPath.includes('admin') ? '200px' : 'unset', width: width < 800 ? width - 75 + 'px' : null }" />
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

.v-list{
font-family: yl;
direction: rtl;
}
.vpd-input-group input{
  flex-grow: unset;
}
.vpd-container{
  top:60%!important;
}
</style>