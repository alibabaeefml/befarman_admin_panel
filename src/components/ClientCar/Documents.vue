<script setup>
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
import { useDisplay } from "vuetify";
import { computed, ref } from "vue";
const certificates = ref();
const openModal = async (data) => {
    certificates.value = data;
};
const width = computed(() => useDisplay().width.value);
</script>

<template>
  <base-modal
    name="carDocs"
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
        :key="item.id"
        :src="item.image"
        cover
        :width="width < 600 ? width - 24 : 600"
      />
    </v-carousel>
  </base-modal>
</template>
