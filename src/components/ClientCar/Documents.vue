<script setup>
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
import { useDisplay } from "vuetify";
import { computed } from "vue";
defineProps(["docModal"]);
const width = computed(() => useDisplay().width.value);
</script>

<template>
  <base-modal
    name="carDocs"
    title="مدارک خودرو"
    subtitle="CAR DOCUMENTS"
    icon="mdi-file-document"
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
        v-for="(item, i) in 5"
        :key="i"
        src="/src/assets/Images/avatars/certificate-avatar.jpg"
        cover
        :width="width < 600 ? width - 24 : 600"
      />
    </v-carousel>
  </base-modal>
</template>
