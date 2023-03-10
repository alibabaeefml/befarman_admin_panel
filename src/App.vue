<script setup lang="ts">
import TheToolbar from "@/components/Global/Toolbar/TheToolbar.vue";
import { computed } from "vue";
import { useRoute as route } from "vue-router";
import { useModal } from "@/composables/modal/modal";

useModal();

const currentPath = computed(() => route().path);
</script>
<template>
  <v-app>
    <TheToolbar :currentPath="currentPath" v-if="currentPath != '/login'" />
    <RouterView
      :style="{ marginTop: $vuetify.display.width < 1080 ? '60px' : 0 }"
    />
    <notifications group="notification" position="bottom center" />
    <div style="width: 100%; height: 200px"></div>
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

@keyframes loadCardActions {
  from {
    opacity: 0;
    gap: 0;
  }

  to {
    opacity: 1;
    gap: 15px;
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
@keyframes scale {
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
}
.scale-in {
  scale: 0;
  animation: scale 0.3s forwards;
}
/* global elements */
* {
  line-height: normal;
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
textarea {
  font-size: 18px;
  width: max-content;
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
  font-size: 80px !important;
}

.lg-txt {
  font-size: 50px !important;
}

.md-txt {
  font-size: 30px !important;
}

.sm-txt {
  font-size: 20px !important;
}

.xs-txt {
  font-size: 10px !important;
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
  flex-wrap: wrap;
  animation: loadCardActions 0.2s forwards;
}
.v-card {
  z-index: unset!important;
}
.v-card-text {
  transition: 0.2s;
}
@media screen and (max-width: 640px) {
  .v-card-text.blured {
    filter: blur(5px);
  }
}
.actionsGroup > * {
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

/* vue notification */
.vue-notification-template {
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  font-family: ym;
  border-left: unset !important;
  border-right: 5px solid;
  text-align: right !important;
  direction: rtl;
}

.vue-notification-group {
  bottom: 30px !important;
  box-shadow: #bebebe4a 0px 0px 10px !important;
}

.success {
  background: #68cd86;
  border-right-color: #42a85f;
}

.warn {
  background: #ffb648;
  border-right-color: #f48a06;
}

.error {
  background: #e54d42;
  border-right-color: #b82e24;
}
</style>
