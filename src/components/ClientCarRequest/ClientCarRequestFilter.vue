<script setup lang="ts">
import Filters from "@components/Global/Filters/Filters.vue";
import { useClientCarStore } from "@/store/clientCar";
import { storeToRefs } from "pinia/dist/pinia";
import { ref } from "vue";
import { useClientCarRequestStore } from "@/store/clientCarRequest";
import { useClientCarRequest } from "@/composables/clientCarRequest";
import DatePicker from "../Global/Input/DatePicker.vue";

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
    <v-row class="pa-4 align-center">
      <v-col >
        <v-text-field
          prepend-icon="mdi-car"
          label="نام خوردرو"
          variant="underlined"
          v-model="clientCarRequestFilters.clientCar_car_name.val"
        >
        </v-text-field>
      </v-col>
      <v-col >
        <v-text-field
          prepend-icon="mdi-phone"
          label="شماره همراه مالک"
          variant="underlined"
          v-model="clientCarRequestFilters.user_phone.val"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <DatePicker
          label="شروع درخواست"
          :value="clientCarRequestFilters.created_at.val1"
        />
      </v-col>
      <v-col>
        <DatePicker
          label="پایان درخواست"
          :value="clientCarRequestFilters.created_at.val2"
        />
      </v-col>
      <v-col>
        <v-select variant="underlined" prepend-icon="mdi-list-status" :items="[]"
        label="وضعیت درخواست"
        v-model="clientCarRequestFilters.clientCar_request_status_id.val"
        />
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
