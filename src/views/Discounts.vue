<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const title: any = useRoute().meta.title;
const titleEn: any = useRoute().meta.title_en;

</script>

<template>
  <div>
    <v-card
      dir="rtl"
      :title="title"
      :subtitle="titleEn"
      prepend-icon="mdi-brightness-percent"
    >
      <v-card-text>

      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>
