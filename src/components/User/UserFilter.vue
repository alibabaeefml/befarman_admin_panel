<script setup lang="ts">
import Filters from "@components/Global/Filters/Filters.vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { useUser } from "@/composables/user/user";
import DatePicker from "../Global/Input/DatePicker.vue";
const { indexUser } = useUser();

const { userFilters } = storeToRefs(useUserStore());

const { resetFilter } = useUserStore();
</script>

<template>
  <Filters
  @reset="
      resetFilter();
      indexUser({ pagination: { page: 1 } });
    "
  >
    <v-row class="pa-4">
      <v-col >
        <v-text-field prepend-icon="mdi-account" label="نام کاربر" variant="underlined"
        v-model="userFilters.name.val"
        >
        </v-text-field>
      </v-col>
      <v-col >
        <v-text-field
          prepend-icon="mdi-phone"
          label="شماره همراه"
          variant="underlined"
          v-model="userFilters.phone.val"
        >
        </v-text-field>
      </v-col>
      <v-col >
        <v-text-field
          prepend-icon="mdi-identifier"
          label="کد ملی"
          variant="underlined"
          v-model="userFilters.national_code.val"
        >
        </v-text-field>
      </v-col>
      <v-col >
        <v-select 
        prepend-icon="mdi-city"
        
          label="(coming soon) شهر"
          variant="underlined"
          disabled
        />
      </v-col>
      <v-col cols="12" md="2">
        <DatePicker
          label="عضویت از تاریخ"
          :value="userFilters.created_at.val1"
        />
      </v-col>
      <v-col>
        <DatePicker
          label="عضویت تا تاریخ"
          :value="userFilters.created_at.val2"
        />
      </v-col>
      <v-col
        @click="indexUser({ pagination: { page: 1 } })"
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
