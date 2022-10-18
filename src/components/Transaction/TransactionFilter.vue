<script setup>
import Filters from "@components/Global/Filters/Filters.vue";
import { ref } from "vue";
</script>

<template>
  <Filters>
    <v-row class="pa-4">
      <v-col cols="12" md="4">
        <v-text-field
          type="number"
          prepend-icon="mdi-cash"
          label="مبلغ تراکنش از"
          variant="underlined"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          type="number"
          prepend-icon="mdi-cash"
          label="مبلغ تراکنش تا"
          variant="underlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          prepend-icon="mdi-account"
          label="طرف حساب تراکنش"
          variant="underlined"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </Filters>
</template>
