<script setup>
import Home from './views/home.vue';
</script>
<template>
  <v-app>
    <v-main>
      <Home />
      <router-view/>
    </v-main>
  </v-app>
</template>
