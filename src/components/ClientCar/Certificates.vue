<script setup>
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
import { useDisplay } from "vuetify";
import { ref } from "vue";
const certificates = ref([]);
const openModal = (data) => {
  certificates.value = data;
};
</script>

<template>
  <base-modal
    name="Certificates"
    title="مدارک خودرو"
    subtitle="CAR certificates"
    icon="mdi-file-document"
    @open="openModal"
  >
    <v-carousel
      dir="ltr"
      interval="5000"
      color="white"
      cycle
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="item in certificates"
        :key="item"
        :src="item.image"
        cover
      >
      </v-carousel-item>
    </v-carousel>
  </base-modal>
</template>
