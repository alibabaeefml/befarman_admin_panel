<script setup>
import Toolbar from "@components/Global/Toolbar/Toolbar.vue";
import { computed, ref, watch } from "@vue/runtime-core";
import { useRoute as route } from "vue-router";
import bg from '@/assets/Images/Header.jpg'
import Login from "./views/Login.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import BasicModal from "./components/Global/BaseModal/BasicModal.vue";
// import { useStore as store } from "vuex";
const currentPath = computed(() => route().path);
// const isLoggedIn = store().dispatch("checkIfIsLoggedIn");
// watch(
//   function () { document.title = route().meta.title }
// )
const width = computed(() => useDisplay().width.value);
const sm = computed(() => useDisplay().width.value < 800);
const xs = computed(() => useDisplay().xs.value);
const links = ref([
  'Home',
  'About Us',
  'Team',
  'Services',
  'Blog',
  'Contact Us',
]);
const isOpen = ref(true)
</script>
<template>

  <v-app
    :style="currentPath === '/' ? { background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : ''">
    <Toolbar :currentPath="currentPath" />
    <router-view :style="{ marginTop: !sm && currentPath.includes('Admin') ? '200px' : 'unset' }" />
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
          {{ link }}
        </v-btn>
        <v-col class="text-center text-white mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>BEFARMAN</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<style>
/* fonts */
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

/* css classes */
.mxb {
  font-family: mxb;
}

.yl {
  font-family: yl;
}

.ym {
  font-family: ym;
}

.mb {
  font-family: mb;
}

.mm {
  font-family: mm;
}

button {
  letter-spacing: 0 !important;
  font-family: ym !important;
}

.add-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
}

.peTitle {
  font-family: yr;
  font-size: 20px;
  color: black;
}

.enSub {
  font-family: mb;
  letter-spacing: 5px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.3);
}

a {
  color: inherit;
  text-decoration: none !important;
}

.curved {
  border-radius: 8px;
}

/* vuetify classes */
.v-list {
  font-family: yl;
  direction: rtl;
}

.vpd-input-group input {
  flex-grow: unset;
}

.vpd-container {
  top: 60% !important;
}

.v-tabs {
  height: auto !important;
}

.v-select,
.v-field__input {
  font-family: ym;
}

.v-card-title {
  font-size: 20px;
}

.v-card-subtitle {
  font-family: mm;
  letter-spacing: 5px;
}

.v-tooltip {
  font-family: ym;
}
</style>