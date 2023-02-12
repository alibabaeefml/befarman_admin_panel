<script setup lang="ts">
import Filters from "@components/Global/Filters/Filters.vue";
import { useClientCarStore } from "@/store/clientCar";
import { storeToRefs } from "pinia/dist/pinia";
import { ref } from "vue";
import { useClientCarRequestStore } from "@/store/clientCarRequest";
import { useClientCarRequest } from "@/composables/clientCarRequest";

const years = ref([]);

// update years array each year
const year = new Date().getFullYear() - 621;
for (let i = 1380; i <= year; i++) {
  years.value.push(i);
}

const { indexClientCarRequest } = useClientCarRequest();

const { clientCarRequestFilters } = storeToRefs(useClientCarRequestStore());

const { resetFilter } = useClientCarStore();

</script>

<template>
  <Filters
    @reset="
      resetFilter();
      indexClientCarRequest({ pagination: { page: 1 } });
    "
  >
    <v-row class="pa-4">
      <v-col cols="12" md="3">
        <v-text-field
          prepend-icon="mdi-car"
          label="نام خوردرو"
          variant="underlined"
          v-model="clientCarRequestFilters.name.val"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          prepend-icon="mdi-account"
          label="نام مالک"
          variant="underlined"
          v-model="clientCarRequestFilters.user_name.val"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-select
          :items="years"
          prepend-icon="mdi-calendar"
          label="سال تولید"
          variant="underlined"
          v-model="clientCarRequestFilters.made_at.val"
        >
        </v-select>
      </v-col>
      <v-col
        cols="12"
        md="1"
        @click="indexClientCarRequest({ pagination: { page: 1 } })"
      >
        <v-btn color="secondary" icon size="x-large"
          ><v-icon color="white">mdi-filter</v-icon>
          <v-tooltip activator="parent" location="bottom"
            >اعمال فیلترها</v-tooltip
          >
        </v-btn>
      </v-col>
    </v-row>
  </Filters>
</template>
