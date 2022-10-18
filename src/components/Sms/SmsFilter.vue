<script setup>
import Filters from "@components/Global/Filters/Filters.vue";
import { ref } from "vue";
</script>

<template>
  <Filters>
    <div class="pa-4 w-25">
      <v-text-field
        prepend-icon="mdi-account"
        label="گیرنده پیام"
        variant="underlined"
      >
      </v-text-field>
    </div>
  </Filters>
</template>
