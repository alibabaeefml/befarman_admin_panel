<script setup>
// import Dropzone from "@Components/Global/Dropzone.vue";
// import PersianDate from "../Global/PersianDate.vue";
// import CropperImage from "../Global/CropperImage.vue";
import { ref } from '@vue/reactivity';
import BaseModal from '../Global/BaseModal/BaseModal.vue';
defineEmits(['toggleModal']);
defineProps(['dialog'])
const getBrands = ref(['سمند', 'ال نود', 'پراید']);
const crop_data = ref(null);
const url = ref(null);
const image = ref('');
const car = ref({
    gps: null,
    insurance: null,
    user_id: null,
    brand_id: null,
    car_id: null,
    trim_id: null,
    car_number: null,
    color: null,
    made_at: null,
    car_usage: null,
    color_status: null,
    cost: null,
    fuel: null,
    last_oil_change: null,
    insurance_discount: null,
    details: null,
    painted: null,
    changed_parts: null,
    status_id: 1,
    guaranteeTypes: [],
    thumbnail: null,
    images: [],
    certificates: [],
    cert_batch_id: null,
    thumbnail_batch_id: null,
    name: null,
    third_party_insurance: 0,
    body_insurance: 0,
    befarman_gps: 0
});
const NewCarImage = ref('selectedCarImage');
const dropzoneActive = ref(false);
const fuels = ref([
    {
        name: "بنزین",
        value: "بنزین",
    },
    {
        name: "دوگانه سوز",
        value: "دوگانه سوز",
    },
    {
        name: "هیبریدی",
        value: "هیبریدی",
    },
]);
const year = ref([
    '1380',
    '1381',
    '1382',
    '1383',
    '1384',
    '1385',
    '1386',
    '1387',
    '1388',
    '1389',
    '1390',
    '1391',
    '1392',
    '1393',
    '1393',
    '1394',
    '1395',
    '1396',
    '1397',
    '1398',
    '1399',
    '1400',
]);
const colorStatus = ref([
    {
        name: "بی رنگ",
        value: "بی رنگ",
    },
    {
        name: "رنگ شده",
        value: "رنگ شده",
    },
]);
const booleanStatus = ref([
    {
        name: "دارد",
        value: 1,
    },
    {
        name: "ندارد",
        value: 0,
    },
])
const colors = ref([
    { name: "قرمز", color: "قرمز", hex: "#ee3552" },
    { name: "قهوه ای", color: "قهوه ای", hex: "#915117" },
    { name: "خاکستری", color: "خاکستری", hex: "#828282" },
    { name: "مشکی", color: "مشکی", hex: "#000" },
    { name: "سفید", color: "سفید", hex: "#fff" },
    { name: "بژ", color: "بژ", hex: "#fff" },
    { name: "مسی", color: "مسی", hex: "#fff" },
    { name: "زیتونی", color: "زیتونی", hex: "#fff" },
    { name: "نوک مدادی", color: "نوک مدادی", hex: "#fff" },
    { name: "اطلسی", color: "اطلسی", hex: "#fff" },
    { name: "آبی", color: "آبی", hex: "#fff" },
    { name: "بنفش", color: "بنفش", hex: "#fff" },
    { name: "آلبالویی", color: "آلبالویی", hex: "#fff" },
    { name: "نقره آبی", color: "نقره آبی", hex: "#fff" },
    { name: "سبز", color: "سبز", hex: "#fff" },
    { name: "نارنجی", color: "نارنجی", hex: "#fff" },
])
</script>
<template>
    <BaseModal :dialog="dialog" title="افزودن خودرو" subtitle="ADD NEW CAR" icon="mdi-car-side"
        @toggleModal="$emit('toggleModal')">
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <div v-if="image" style="width:100%">
                        <img :src="image" width="100%">
                    </div>
                    <v-file-input @change="changeImage" v-model="car.image" label="آپلود کاور" variant="outlined"
                        prepend-icon="mdi-image"></v-file-input>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" sm="12">
                    <v-select label="برند خودرو" :items="getBrands" item-value="id" prepend-icon="mdi-alpha-b-circle"
                        v-model="car.brand_id" variant="underlined"></v-select>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                    <v-select variant="underlined" :items="getBrands" type="text" label="مدل خودرو" v-model="car.car_id"
                        prepend-icon="mdi-car-info" :disabled="!car.brand_id">
                    </v-select>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                    <v-select variant="underlined" :items="getBrands" type="text" label="تریم" v-model="car.trim_id"
                        prepend-icon="mdi-car-info" :disabled="!car.car_id">
                    </v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" sm="12">
                    <v-autocomplete label="مالک خودرو" :items="getUsers" item-value="id" prepend-icon="mdi-account"
                        v-model="car.user_id" variant="underlined" no-data-text=".مالک خودرو را جستجو کنید">
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                    <v-text-field variant="underlined" type="text" label="پلاک خودرو" v-model="car.car_number"
                        prepend-icon="mdi-barcode">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                    <v-text-field variant="underlined" type="text" label="کارکرد خودرو" v-model="car.car_usage"
                        prepend-icon="mdi-speedometer">
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions style="background-color: #ededed;" class="justify-center">
            <v-btn variant="elevated" color="pink" icon @click="$emit('toggleModal')">
                <v-icon color="white">mdi-close</v-icon>
            </v-btn>
            <v-btn variant="elevated" color="cyan" icon>
                <v-icon color="white">mdi-check</v-icon>
            </v-btn>
        </v-card-actions>
    </BaseModal>
</template>