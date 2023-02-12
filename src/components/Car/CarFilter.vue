<script setup lang="ts">
import Filters from "@components/Global/Filters/Filters.vue";
import BrandSelected from "@components/Brand/BrandSelected.vue";
import { useCarStore } from "@/store/car";
import { storeToRefs } from "pinia";
import { useCar } from "@/composables/car/car";
const { carFilters } = storeToRefs(useCarStore());
const { indexCar } = useCar();
const { resetFilter } = useCarStore();
</script>
<template>
  <Filters
    @reset="
      resetFilter();
      indexCar({ pagination: { page: 1 } });
    "
  >
    <v-card-text>
      <v-row>
        <v-col>
          <BrandSelected
            label="برند خودرو"
            variant="underlined"
            v-model="carFilters.brand_id.val"
          />
        </v-col>
        <v-col>
          <v-text-field
            prepend-icon="mdi-car"
            label="نام خودرو"
            variant="underlined"
            v-model="carFilters.name_fa.val"
          />
        </v-col>
        <v-col cols="2">
          <v-btn
            color="secondary"
            icon
            size="x-large"
            @click="indexCar({ pagination: { page: 1 } })"
            ><v-icon color="white">mdi-filter</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >اعمال فیلترها</v-tooltip
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </Filters>
</template>
