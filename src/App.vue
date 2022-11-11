<script setup>
import TheToolbar from "@/components/Global/Toolbar/TheToolbar.vue";
import { computed, ref } from "vue";
import { useRoute as route } from "vue-router";
import { useModal } from "@/composables/modal/modal.js";
import api from "@/services/api.services.ts";
useModal();

const currentPath = computed(() => route().path);
</script>
<template>
  <v-app>
    <TheToolbar :currentPath="currentPath" v-if="currentPath != '/login'" />
    <RouterView
      :style="{ marginTop: $vuetify.display.width < 1080 ? '60px' : 0 }"
    />
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
@keyframes Notification {
  0% {
    bottom: -100px;
    opacity: 0;
  }
  15% {
    bottom: 100px;
    opacity: 1;
  }
  70% {
    bottom: 100px;
    opacity: 1;
  }
  100% {
    bottom: -100px;
    opacity: 0;
  }
}
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
@keyframes rotate {
  from {
  }

  to {
    transform: rotate(-360deg);
  }
}
@keyframes rotateX {
  from {
  }

  to {
    transform: rotate(360deg);
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
  opacity: 0.8;
}

input,
span,
textarea {
  font-size: 18px !important;
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
  position: fixed !important;
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
  font-size: 25px;
  color: rgba(0, 0, 0, 0.3);
}

.curved {
  border-radius: 8px;
}

.actionsGroup {
  display: flex !important;
}

.actionsGroup > * {
  animation: slide-x 0.2s;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5) !important;
}

.rtl-icon i {
  transform: rotateY(180deg);
}

.mdi-chevron-down {
  animation: rotate 0.2s;
}
.mdi-chevron-up {
  animation: rotateX 0.2s;
}

.notification {
  position: fixed;
  direction:rtl;
  opacity: 0;
  width: fit-content;
  border-radius: 10px;
  box-shadow: lightgrey -1px 7px 11px;
  z-index: 999999;
  animation: Notification 3s ;
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
  font-family: ym !important;
}

.v-card-subtitle {
  font-size: 13px !important;
  font-family: mm !important;
  letter-spacing: 5px !important;
}

.v-tooltip {
  text-align: center;
  font-family: ym;
}
.v-overlay__content {
  min-width: 200px !important;
}
</style>
