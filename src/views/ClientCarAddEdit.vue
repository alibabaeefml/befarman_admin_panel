<script setup>
import { useRoute as route } from "vue-router";
import UserSearch from "@/components/User/UserSearch.vue";
import BrandSelected from "@/components/Brand/BrandSelected.vue";
import TrimSelected from "@/components/Trim/TrimSelected.vue";
import CarSelected from "@/components/Car/CarSelected.vue";
import CropperImage from "@/components/Global/Input/CropperImage.vue";
import DropZone from "@/components/Global/Input/DropZone.vue";
import { useClientCar } from "@/composables/clientCar/clientCar";
import { useTrimStore } from "@/store/trim";
import { useUserStore } from "@/store/user";
import { useColorStore } from "@/store/color";
import { useProvinceStore } from "@/store/province";
import { storeToRefs } from "pinia/dist/pinia";
import { ref, computed } from "vue";
import createFilrterObject from "@/utils/createFilterObject";
const { storeClientCar, updateClientCar, showClientCar } = useClientCar();
const { getColors } = storeToRefs(useColorStore());
const { getProvinces } = storeToRefs(useProvinceStore());

// index colors
useColorStore().loadColors();
const form = ref({});
const color = ref();
const gearboxType = ref();
const user = ref({});
const fileForm = ref({});
const colors = ref([]);
const cities = ref([]);
const thirdParty = ref();
const bodyInsurance = ref();
const technical = ref();

const indexClientCar = async () => {
  if (route().name == "editClientCar") {
    // fetch car object by id
    const data = await showClientCar(route().params);
    form.value = data;
    form.value.befarman_gps = data.befarman_gps == 1;
    gearboxType.value = data.gearbox == "manual" ? "دستی" : "اتوماتیک";
    thirdParty.value = data.third_party_insurance == 1;
    thirdParty.value = data.third_party_insurance == 1;
    bodyInsurance.value = data.body_insurance == 1;
    technical.value = data.technical_status == 1;
  }
};
indexClientCar();
// fetch all trims
useTrimStore().loadTrims();
const { getTrims } = storeToRefs(useTrimStore());

// filter users
const userFilters = ref({ first_name: "مهمان" });

// fetch all provinces
useProvinceStore().loadProvinces();

const showCities = computed(() => {
  if (form.value.province_id) {
    useProvinceStore()
      .showCity(form.value.province_id)
      .then((data) => {
        cities.value = data;
      });
  }
});

const fuels = ref(["بنزین", "الکتریکی", "دوگانه سوز", "هیبریدی"]);
const features = ref([
  "سیستم صوتی",
  "کیسه هوا",
  "ورودی صدا",
  "بلوتوث",
  "معاینه فنی",
  "سنسور دنده عقب",
  "دوربین عقب",
  "مانیتور",
  "سیستم کروز",
  "USB",
  "AUX",
  "نمایشگر لمسی",
  "نمایشگر شیشه جلو",
  "گرمایش و سرمایش صندلی ها",
  "ماساژور صندلی",
  "سقف متحرک",
  "دوربین 360 درجه",
]);

// update years array each year
const years = ref([]);
const year = new Date().getFullYear() - 621;
for (let i = 1380; i <= year; i++) {
  years.value.push(i);
}

const submitForm = async () => {
  if (form.value.id) {
    await updateClientCar(form.value.id, form.value);
  } else {
    await storeClientCar(form.value);
  }
};
</script>
<template>
  <div>
    <v-card
      dir="rtl"
      class="ma-4 ym"
      :title="$route.meta.title"
      :subtitle="$route.meta.title_en"
      prepend-icon="mdi-car-side"
    >
      <v-card-text class="pa-2">
        <v-row>
          <v-col cols="12" lg="3" md="4">
            <BrandSelected v-model="form.brand_id" />
          </v-col>

          <v-col cols="12" lg="3" md="4">
            <CarSelected
              :brand-id="form.brand_id"
              v-model="form.car_id"
              :disabled="!form.brand_id"
            />
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <TrimSelected :car-id="form.car_id" v-model="form.trim_id" />
          </v-col>

          <v-col cols="12" lg="3" md="4">
            <UserSearch
              label="مالک خودرو"
              no-data-text=".مالک خودرو را جستجو کنید"
              v-model="form.user_id"
            />
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-text-field
              variant="underlined"
              type="number"
              label="خودرو از کدام اپلیکیشن است (جز بفرمان)"
              prepend-icon="mdi-speedometer"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-text-field
              variant="underlined"
              type="text"
              label="پلاک خودرو"
              v-model="form.car_number"
              prepend-icon="mdi-barcode"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-text-field
              variant="underlined"
              type="number"
              label="کیلومتر آخرین تعویض روغن"
              v-model="form.last_oil_change"
              prepend-icon="mdi-speedometer"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-text-field
              variant="underlined"
              type="number"
              label="کارکرد خودرو"
              v-model="form.car_usage"
              prepend-icon="mdi-speedometer"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-select
              :items="['دستی', 'اتوماتیک']"
              variant="underlined"
              label="نوع گیربکس"
              v-model="gearboxType"
              prepend-icon="mdi-speedometer"
            >
            </v-select>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-text-field
              variant="underlined"
              type="number"
              label="ارزش خودرو (تومان)"
              v-model="form.car_price"
              prepend-icon="mdi-cash"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-text-field
              variant="underlined"
              type="number"
              label="قیمت اجاره (روزانه)"
              v-model="form.price"
              prepend-icon="mdi-cash"
            >
            </v-text-field>
          </v-col>

          <v-col cols="12" lg="3" md="4">
            <v-select
              label="استان"
              :items="getProvinces"
              item-title="name"
              item-value="id"
              prepend-icon="mdi-city"
              v-model="form.province_id"
              @change="showCities"
              variant="underlined"
            ></v-select>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-select
              label="شهر"
              :items="cities"
              item-title="name"
              item-value="id"
              prepend-icon="mdi-city"
              v-model="form.city_id"
              variant="underlined"
            ></v-select>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-select
              label="رنگ خودرو"
              :items="getColors"
              item-title="name"
              item-value="id"
              prepend-icon="mdi-palette"
              v-model="form.color_id"
              variant="underlined"
            ></v-select>
          </v-col>
          <v-col cols="12" lg="3" md="4">
            <v-select
              label="سال تولید خودرو"
              :items="years"
              prepend-icon="mdi-calendar-week"
              v-model="form.made_at"
              variant="underlined"
            ></v-select>
          </v-col>

          <v-col cols="12" lg="3" md="4">
            <v-select
              label="وضعیت رنگ خودرو"
              :items="['بی رنگ', 'رنگ شده']"
              prepend-icon="mdi-brush"
              v-model="form.color_status"
              variant="underlined"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="form.features"
              :items="features"
              chips
              label="تجهیزات جانبی"
              multiple
              variant="underlined"
              prepend-icon="mdi-star"
            ></v-select>
          </v-col>
          <v-col cols="12" lg="4" md="4">
            <v-select
              label="وضعیت جی پی اس"
              :items="['ندارد', 'دارد']"
              prepend-icon="mdi-crosshairs-gps"
              v-model="form.gps"
              variant="underlined"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-checkbox
              label="آیا مایل هستید بفرمان روی ماشین شما GPS نصب کند ؟"
              v-model="form.befarman_gps"
            >
            </v-checkbox>
          </v-col>
          <v-col cols="12" md="2">
            <v-checkbox label="بیمه شخص ثالث" v-model="thirdParty">
            </v-checkbox>
          </v-col>
          <v-col cols="12" md="2">
            <v-checkbox label="بیمه بدنه" v-model="form.bodyInsurance">
            </v-checkbox>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              variant="underlined"
              type="number"
              label="تخفیف بیمه (سال)"
              v-model="form.insurance_discount"
              prepend-icon="mdi-percent"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-checkbox label="وضعیت فنی ماشین" v-model="technical">
            </v-checkbox>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="سوخت"
              :items="fuels"
              item-value="id"
              prepend-icon="mdi-fuel"
              v-model="form.fuel"
              variant="underlined"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-textarea
              :disabled="form.color_status !== 'رنگ شده'"
              name="input-5-1"
              v-model="form.painted"
              label="کدام قسمت ها رنگی شده اند؟"
              prepend-icon="mdi-brush"
              variant="underlined"
              auto-grow
            >
            </v-textarea>
          </v-col>
          <v-col cols="12" md="6">
            <v-textarea
              :width="10"
              name="input-5-1"
              label="کدام قسمت ها تعویض شده اند؟"
              v-model="form.changed_parts"
              prepend-icon="mdi-swap-horizontal"
              variant="underlined"
              auto-grow
            >
            </v-textarea>
          </v-col>
          <v-col cols="12">
            <DropZone
              name_fa="عکس های خودرو"
              name_en="Client Car Photos"
              :images="form.images"
            />
          </v-col>
          <v-col cols="12">
            <DropZone
              name_fa="عکس های مدارک"
              name_en="Documents Photos"
              :images="form.certificates"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              name="input-5-1"
              label="توضیحات"
              prepend-icon="mdi-format-quote-close"
              variant="underlined"
              auto-grow
              v-model="form.details"
            >
            </v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions style="background-color: #ededed" class="justify-center">
        <router-link :to="{ name: 'clientCars' }" class="link">
          <v-btn
            variant="elevated"
            color="pink"
            icon
            @click="$emit('toggleModal')"
            class="ma-1"
          >
          <v-tooltip activator="parent" location="bottom">بستن فرم</v-tooltip>
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </router-link>
        <v-btn
          variant="elevated"
          color="cyan"
          icon
          class="ma-1"
          @click="submitForm"
        >
          <v-tooltip activator="parent" location="bottom">ثبت تغییرات</v-tooltip>
          <v-icon color="white">mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn
      :to="{ name: 'clientCars' }"
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
<style scoped>
.sub {
  font-family: mm;
  color: white;
  background: black;
  opacity: 1;
  letter-spacing: 5px;
}
</style>
