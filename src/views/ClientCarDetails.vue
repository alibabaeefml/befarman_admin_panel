<script setup lang="ts">
import { ref, computed } from "vue";
import Certificates from "@components/ClientCar/Certificates.vue";
import MoreDetails from "@components/ClientCar/MoreDetails.vue";
import { useRoute as route } from "vue-router";

import { useClientCar } from "@/composables/clientCar/clientCar";
import { useProvinceStore } from "@/store/province";
import { storeToRefs } from "pinia/dist/pinia";
import type { dynamicObject } from "@/types/common";
const { getProvinces } = storeToRefs(useProvinceStore());
const { loadProvinces, showCity } = useProvinceStore();

const clientCar: dynamicObject = ref({});
const province: dynamicObject = ref({});
const city = ref({});

loadProvinces();

const indexClientCar = async () => {
  const { id } = route().params;
  clientCar.value = await useClientCar().showClientCar(Number(id));

  // show province and city
  province.value = getProvinces.value.find(
    (p) => p.id == clientCar.value.province_id
  );
  city.value = await showCity(clientCar.value.city_id);
};
indexClientCar();

const openImg = (url: string) => {
  window.open(url);
};

const more = ref(false);
</script>
<template>
  <v-card
    dir="rtl"
    class="ma-4 ym"
    :title="clientCar.name"
    :subtitle="clientCar.car.name_en"
    prepend-icon="mdi-car-side"
  >
    <v-row dir="rtl" class="pa-5" v-if="clientCar.id">
      <v-col cols="12" md="6" sm="12">
        <v-carousel
          dir="ltr"
          interval="5000"
          color="white"
          cycle
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="img in clientCar.images"
            :key="img"
            :src="img.image"
            @click="openImg(img.image)"
            cover
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="text-center">
        <v-row>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>مالک خودرو</h4>
              <h2>{{ clientCar.user.name }}</h2>
              <h2>{{ clientCar.user.phone }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>رنگ خودرو</h4>
              <h2>{{ clientCar.color.name }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>کارکرد خودرو</h4>
              <h2>{{ clientCar.car_usage }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>وضعیت رنگ خودرو</h4>
              <h2>{{ clientCar.color_status }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>سوخت</h4>
              <h2>{{ clientCar.fuel }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>شماره پلاک خودرو</h4>
              <h2>{{ clientCar.car_number }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>ویژگی های خودرو</h4>
              <span v-for="feature in clientCar.features" :key="feature">{{
                feature + "، "
              }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>گیربکس</h4>
              <h2>{{ clientCar.gearbox == "manual" ? "دستی" : "اتوماتیک" }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>سال تولید خودرو</h4>
              <h2>{{ clientCar.made_at }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>آخرین کیلومتر تعویض روغن</h4>
              <h2>{{ clientCar.last_oil_change }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>نصب GPS بفرمان روی ماشین</h4>
              <h2>{{ clientCar.befarman_gps == 1 ? "بله" : "خیر" }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>تخفیف بیمه</h4>
              <h2>{{ clientCar.insurance_discount ?? 0 }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>GPS</h4>
              <h2>{{ clientCar.gps ?? "ندارد" }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>بیمه شخص ثالث</h4>
              <h2>
                {{ clientCar.third_party_insurance == 1 ? "دارد" : "ندارد" }}
              </h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>بیمه بدنه</h4>
              <h2>{{ clientCar.body_insurance == 1 ? "دارد" : "ندارد" }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl" v-if="province">
            <div>
              <h4>استان</h4>
              <h2>{{ province.name }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl" v-if="province">
            <div>
              <h4>شهر</h4>
              <h2>{{ clientCar.city.name }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>آدرس</h4>
              <h2>{{ clientCar.address }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>ارزش خودرو (تومان)</h4>
              <h2>{{ clientCar.car_price }}</h2>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="yl">
            <div>
              <h4>هزینه روزانه (تومان)</h4>
              <h2>{{ clientCar.price }}</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-btn
              @click="more = !more"
              block
              :append-icon="more ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              color="primary"
              variant="outlined"
              >جزئیات بیشتر
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn
              @click="$_openModal('Certificates', clientCar.certificates)"
              block
              append-icon="mdi-file-document"
              color="black"
              variant="outlined"
              >مدارک
              <v-tooltip
                activator="parent"
                v-if="!clientCar.certificates.length"
                location="bottom"
                >مدرکی موجود نیست</v-tooltip
              >
            </v-btn>
          </v-col>
        </v-row>
        <more-details :clientCar="clientCar" v-if="more"></more-details>
      </v-col>
      <Certificates></Certificates>
    </v-row>
  </v-card>

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
</template>
