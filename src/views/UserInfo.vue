<script setup lang="ts">
import defaultImg from "@/assets/Images/avatars/certificate-avatar.jpg";
import { useUser } from "@/composables/user/user";
import type { dynamicObject } from "@/types/common";
import { ref } from "vue";
import { useRoute as route } from "vue-router";
const user: dynamicObject = ref({ bank: {}, city: {} });
const showUser = async () => {
  user.value = await useUser().showUser(route().params);
  !user.value.certificates.length
    ? (user.value.certificates = [{ id: 1, image: defaultImg }])
    : null;
};
showUser();
</script>

<template>
  <div>
    <v-row dir="rtl" class="align-center ma-4 ym">
      <v-col cols="12" md="3" sm="12" class="">
        <v-card title="مدارک کاربر" subtitle="USER DOCS">
          <v-carousel
            dir="ltr"
            height="200"
            color="grey"
            interval="5000"
            cycle
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="item in user.certificates"
              :key="item.id"
              :src="item.image"
              cover
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="12" md="9" sm="12">
        <v-card
          class="pa-5"
          title="اطلاعات کاربر"
          subtitle="USER INFO"
          prepend-icon="mdi-account-details"
        >
          <v-row class="text-center">
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>نام و نام خانوادگی</h4>
                <h2>{{ user.name }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شماره تلفن</h4>
                <h2>{{ user.phone }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>کد ملی</h4>
                <h2>{{ user.national_code }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>سال تولد</h4>
                <h2>{{ user.born_year }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>تابعیت</h4>
                <h2>{{ user.citizenship }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شماره گذرنامه</h4>
                <h2>{{ user.passport_number }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شماره گواهی نامه</h4>
                <h2>{{ user.license_number }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>نام پدر</h4>
                <h2>{{ user.father_name }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شهر تولد</h4>
                <h2>{{ user.born_city }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شهر سکونت</h4>
                <h2>{{ user.city.name }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>نوع محل سکونت</h4>
                <h2>{{ user.location_type }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>آدرس</h4>
                <h2>{{ user.address }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>تلفن منزل</h4>
                <h2>{{ user.home_phone }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>میزان تحصیلات</h4>
                <h2>{{ user.education_rate }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شغل</h4>
                <h2>{{ user.job }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>تلفن محل کار</h4>
                <h2>{{ user.work_phone }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>نام بانک</h4>
                <h2>{{ user.bank.name }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شماره حساب</h4>
                <h2>{{ user.bank.account_number }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شماره کارت</h4>
                <h2>{{ user.bank.card_number }}</h2>
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="yl">
              <div>
                <h4>شماره شبا</h4>
                <h2>{{ user.bank.iban }}</h2>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-btn
      @click="$router.back()"
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
