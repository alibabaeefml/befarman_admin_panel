<script setup>
import Filters from "@components/Global/Filters/Filters.vue";
import { useCar } from "@/composables/car/car";
import CarSelected from "@/components/Car/CarSelected.vue";
import BrandSelected from "@/components/Brand/BrandSelected.vue";
import { ref, watchEffect } from "vue";
defineProps(['filters']);
</script>
<template>
  <filters style="margin-top: 20px" @cancleFilters="$emit('cancleFilters')">
    <v-card-text>
      <v-row>
        <v-col>
          <BrandSelected v-model="filters.brand_id" />
        </v-col>
        <v-col>
          <CarSelected v-model="filters.car_id" :brand-id="filters.brand_id" />
        </v-col>
      </v-row>
    </v-card-text>
  </filters>
</template>
