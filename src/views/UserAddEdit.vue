<script setup>
import RelativeItem from "@/components/User/RelativeItem.vue";
import Dropzone from "@/components/Global/Input/DropZone.vue";

import { ref, reactive } from "vue";
import { useRoute as route } from "vue-router";
import { useUser } from "@/composables/user/user";

const form = ref({
  bank: {},
  relatives: 2,
});

const show = async () => {
  if (route().name == "editUser") {
    // fetch car object by id
    const data = await useUser().showUser(route().params);
    form.value = data;
  }
};
show();

const educationRates = [
  "پایین تر از دیپلم",
  "دیپلم",
  "کاردانی",
  "لیسانس",
  "فوق لیسانس",
  "دکتری",
  "سایر",
];
const locationTypes = ["شخصی", "استیجاری", "سایر"];
const citizenships = ["ایرانی", "اتباع"];
const banks = ref([
  "ملی",
  "سپه",
  "ملت",
  "کشاورزی",
  "مسکن",
  "صادرات",
  "پارسیان",
  "شهر",
  "دی",
  "تجارت",
  "رفاه",
  "گردشگری",
  "رسالت",
  "انصار",
  "مهر اقتصاد",
  "سایر",
]);
</script>

<template>
  <div>
    <v-card
      dir="rtl"
      class="ym"
      :title="$route.meta.title"
      :subtitle="$route.meta.title_en"
      :prepend-icon="$route.meta.icon"
    >
      <v-card-text>
        <v-card
          class="pa-4"
          title="اطلاعات شخصی"
          subtitle="PERSONAL INFO"
          prepend-icon="mdi-information"
        >
          <v-row>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="نام کاربر"
                prepend-icon="mdi-account"
                v-model="form.first_name"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="نام خانوادگی کاربر"
                prepend-icon="mdi-account"
                v-model="form.last_name"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="نام پدر"
                prepend-icon="mdi-account"
                v-model="form.father_name"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شماره همراه"
                prepend-icon="mdi-cellphone"
                v-model="form.phone"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="کد ملی"
                prepend-icon="mdi-card-account-details"
                v-model="form.national_code"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شهر تولد"
                prepend-icon="mdi-city-variant-outline"
                v-model="form.born_city"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="سال تولد"
                prepend-icon="mdi-calendar"
                v-model="form.born_year"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شماره گواهینامه"
                prepend-icon="mdi-card-account-details"
                v-model="form.license_number"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-select
                :items="educationRates"
                editable
                variant="underlined"
                label="میزان تحصیلات"
                prepend-icon="mdi-school"
                v-model="form.education_rate"
              >
              </v-select>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-select
                :items="citizenships"
                editable
                variant="underlined"
                label="تابعیت"
                prepend-icon="mdi-flag"
                v-model="form.citizenship"
              >
              </v-select>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شماره گذرنامه"
                prepend-icon="mdi-passport"
                v-model="form.passport_number"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="استان"
                prepend-icon="mdi-city"
                v-model="form.province_id"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شهر"
                prepend-icon="mdi-city"
                v-model="form.city_id"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-select
                :items="locationTypes"
                editable
                variant="underlined"
                label="نوع محل سکونت"
                prepend-icon="mdi-account"
                v-model="form.location_type"
              >
              </v-select>
            </v-col>
            <v-col cols="12" lg="6" md="6">
              <v-text-field
                variant="underlined"
                label="آدرس"
                prepend-icon="mdi-map-marker"
                v-model="form.address"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="تلفن منزل"
                prepend-icon="mdi-phone"
                v-model="form.home_phone"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شغل"
                prepend-icon="mdi-account-hard-hat"
                v-model="form.job"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="آدرس محل کار"
                prepend-icon="mdi-map-marker"
                v-model="form.workplace"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="تلفن محل کار"
                prepend-icon="mdi-phone"
                v-model="form.work_phone"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-select
                :items="banks"
                editable
                variant="underlined"
                label="نام بانک"
                prepend-icon="mdi-bank"
                v-model="form.bank.name"
              >
              </v-select>
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شماره حساب بانک"
                v-model="form.bank.account_number"
              />
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شماره شبا"
                v-model="form.bank.iban"
              />
            </v-col>
            <v-col cols="12" lg="3" md="4">
              <v-text-field
                variant="underlined"
                label="شماره کارت"
                v-model="form.bank.card_number"
              />
            </v-col>
          </v-row>
        </v-card>
        <v-card
          class="pa-4 mt-4"
          title="آشنایان"
          subtitle="RELATIVES"
          prepend-icon="mdi-account-group"
        >
          <RelativeItem
            v-for="relative in form.relatives"
            :key="relative.name"
            :relative="relative"
          />
        </v-card>
        <Dropzone
          name_fa="مدارک"
          name_en="Client Car Photos"
          :images="form.certificates"
        />
      </v-card-text>
      <v-card-actions style="background-color: #ededed" class="justify-center">
        <v-btn
          :to="{ name: 'users' }"
          variant="elevated"
          color="pink"
          icon
          class="ma-1"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
        <v-btn variant="elevated" color="cyan" icon class="ma-1">
          <v-icon color="white">mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn
      :to="{ name: 'users' }"
      class="add-btn"
      icon
      color="primary"
      size="large"
    >
      <v-icon>mdi-arrow-left</v-icon>
      <v-tooltip activator="parent">بازگشت</v-tooltip>
    </v-btn>
  </div>
</template>
