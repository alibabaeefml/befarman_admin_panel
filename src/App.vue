<script setup>
import Toolbar from "@components/Global/Toolbar/Toolbar.vue";
import { computed, ref, watch } from "@vue/runtime-core";
import { useRoute as route } from "vue-router";
import bg from '@/assets/Images/Header.jpg'
import { useDisplay } from "vuetify/lib/framework.mjs";
const title = computed(() => route().meta.title)
const currentPath = computed(() => route().path);
const sm = computed(() => useDisplay().width.value < 1070);
const links = ref([
  'Home',
  'About Us',
  'Team',
  'Services',
  'Blog',
  'Contact Us',
]);
const isAdmin = computed(() => currentPath.value.includes('Admin'))
</script>
<template>

  <v-app
    :style="currentPath === '/' ? { background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : 'https://www.nicepng.com/png/full/24-247272_background-pattern-s-white-background-pattern-png.png'">
    <Toolbar :currentPath="currentPath" />
    <router-view :style="{ marginTop: !sm && isAdmin ? '200px' : sm ? '60px' : '' }" />
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

/* animations */
@keyframes slide-x {
  from {
    opacity: 0;
    margin-left: -20px;
  }

  to {
    opacity: 1;
    margin-left: 8px;
  }
}

/* global elements */
* {
  line-height: normal;
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */
}

a {
  color: inherit;
  text-decoration: none !important;
}

button {
  letter-spacing: 0 !important;
  font-family: ym !important;
}

hr {
  margin-left: 5%;
  width: 90%;
  opacity: .8;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 50px;
}



/* css classes */
.mxb {
  font-family: mxb !important;
}

.yl {
  font-family: yl !important;
}

.ym {
  font-family: ym !important;
}

.mb {
  font-family: mb !important;
}

.mm {
  font-family: mm !important;
}

.xlg-txt {
  font-size: 80px;
}

.lg-txt {
  font-size: 50px;
}

.md-txt {
  font-size: 30px;
}

.sm-txt {
  font-size: 20px;
}

.xs-txt {
  font-size: 10px;
}

.add-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 3;
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

.curved {
  border-radius: 8px;
}

.actionsGroup {
  display: flex !important;
}

.actionsGroup>* {
  animation: slide-x .2s;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .5) !important;
}

.rtl-icon i {
  transform: rotateY(180deg);
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