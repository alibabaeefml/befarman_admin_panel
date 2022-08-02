<script setup>
// import Dropzone from "@Components/Global/Dropzone.vue";
// import CropperImage from "../Global/CropperImage.vue";
import DatePicker from 'vue3-persian-datetime-picker'
import { ref } from '@vue/reactivity';
import BaseModal from '../../components/Global/BaseModal/BaseModal.vue';
const getBrands = ref(['سمند', 'ال نود', 'پراید']);
const crop_data = ref(null);
const url = ref(null);
const image = ref('');
const car = ref({
    gps: null,
    insurance: [],
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
    depositTypes: [],
    thumbnail: null,
    images: [],
    certificates: [],
    cert_batch_id: null,
    thumbnail_batch_id: null,
    name: null,
});
const NewCarImage = ref('selectedCarImage');
const dropzoneActive = ref(false);
const fuels = ref(["بنزین", 'گاز', "دوگانه سوز", "هیبریدی",]);
const years = ref([]);
// update years array each year
const lastYear = new Date().getFullYear() - 622;
for (let i = lastYear - 20; i <= lastYear; i++) {
    years.value.push(i)
}
const colors = ref([
    'قرمز', 'قهوه ای', 'خاکستری', 'مشکی', 'سفید', 'بژ', 'مسی', 'زیتونی', 'نوک مدادی', 'اطلسی', 'آبی', 'بنفش', 'آلبالویی', 'نقره آبی', 'سبز', 'نارنجی'
])
</script>
<template>
    <v-card style="direction:rtl;font-family:ym;">
        <v-card-title>
            <v-icon size="x-large">mdi-car-side</v-icon> {{ add ? 'افزودن خودرو' : 'ویرایش خودرو' }}
        </v-card-title>
        <v-card-subtitle class="sub">ADD NEW CAR</v-card-subtitle>
        <v-card-text style="padding: 20px;">
            <v-row>
                <v-col cols="12" lg="3" md="4">
                    <div v-if="image" style="width:100%">
                        <img :src="image" width="100%">
                    </div>
                    <v-file-input @change="changeImage" v-model="car.image" label="آپلود کاور" variant="outlined"
                        prepend-icon="mdi-image"></v-file-input>
                </v-col>


                <v-col cols="12" lg="3" md="4">
                    <v-select label="برند خودرو" :items="getBrands" item-value="id" prepend-icon="mdi-alpha-b-circle"
                        v-model="car.brand_id" variant="underlined"></v-select>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-select variant="underlined" :items="getBrands" type="text" label="مدل خودرو" v-model="car.car_id"
                        prepend-icon="mdi-car-info" :disabled="!car.brand_id">
                    </v-select>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-select variant="underlined" :items="getBrands" type="text" label="تریم" v-model="car.trim_id"
                        prepend-icon="mdi-car-info" :disabled="!car.car_id">
                    </v-select>
                </v-col>


                <v-col cols="12" lg="3" md="4">
                    <v-autocomplete label="مالک خودرو" :items="getUsers" item-value="id" prepend-icon="mdi-account"
                        v-model="car.user_id" variant="underlined" no-data-text=".مالک خودرو را جستجو کنید">
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-text-field variant="underlined" type="text" label="پلاک خودرو" v-model="car.car_number"
                        prepend-icon="mdi-barcode">
                    </v-text-field>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-text-field variant="underlined" type="number" label="کارکرد خودرو" v-model="car.car_usage"
                        prepend-icon="mdi-speedometer">
                    </v-text-field>
                </v-col>


                <v-col cols="12" lg="3" md="4">
                    <v-text-field variant="underlined" type="number" label="هزینه روزانه" v-model="car.cost"
                        prepend-icon="mdi-cash">
                    </v-text-field>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-select label="رنگ خودرو" :items="colors" prepend-icon="mdi-palette" v-model="car.color"
                        variant="underlined"></v-select>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-select label="سال تولید خودرو" :items="years" prepend-icon="mdi-calendar-week"
                        v-model="car.made_at" variant="underlined"></v-select>
                </v-col>


                <v-col cols="12" lg="3" md="4">
                    <v-select label="وضعیت رنگ خودرو" :items="['بی رنگ', 'رنگ شده']" prepend-icon="mdi-brush"
                        v-model="car.color_status" variant="underlined"></v-select>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-select label="وضعیت جی پی اس" :items="['ندارد', 'دارد', 'توسط بفرمان نصب گردد']"
                        prepend-icon="mdi-crosshairs-gps" v-model="car.gps" variant="underlined"></v-select>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-combobox prepend-icon="mdi-shield-car" v-model="car.insurance" :items="['شخص ثالث', 'بدنه']"
                        label="بیمه" multiple variant="underlined">
                    </v-combobox>
                </v-col>
                <v-col cols="12" lg="3" md="4">
                    <v-text-field variant="underlined" type="text" label="تخفیف بیمه" :disabled="!car.insurance.length"
                        v-model="car.insurance_discount" prepend-icon="mdi-percent">
                    </v-text-field>
                </v-col>

                <v-col cols="12" lg="3" md="4">
                    <v-combobox label="نوع ضمانت" :items="['ضمانت با وجه نقد', 'ضمانت با چک', 'ضمانت با سفته']"
                        prepend-icon="mdi-cash-refund" v-model="car.depositTypes" multiple variant="underlined">
                    </v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-file-input @change="changeImage" v-model="car.images" label="عکس های خودرو" variant="outlined"
                        prepend-icon="mdi-image"></v-file-input>
                </v-col>
                <v-col cols="12">
                    <v-file-input @change="changeImage" v-model="car.certificates" label="عکس های مدارک"
                        variant="outlined" prepend-icon="mdi-image"></v-file-input>
                </v-col>
                <v-col cols="12">
                    <v-textarea name="input-5-1" label="توضیحات" prepend-icon="mdi-format-quote-close"
                        variant="underlined" auto-grow>
                    </v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-textarea :disabled="car.color_status !== 'رنگ شده'" name="input-5-1" v-model="car.painted"
                        label="کدام قسمت ها رنگی شده اند؟" prepend-icon="mdi-brush" variant="underlined" auto-grow>
                    </v-textarea>
                </v-col>
                <v-col cols="12" md="6">
                    <v-textarea :width="10" name="input-5-1" label="کدام قسمت ها تعویض شده اند؟"
                        v-model="car.changed_parts" prepend-icon="mdi-swap-horizontal" variant="underlined" auto-grow>
                    </v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-select label="سوخت" :items="fuels" item-value="id" prepend-icon="mdi-fuel" v-model="car.fuel"
                        variant="underlined"></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <date-picker label="آخرین تاریخ تعویض روغن" v-model="car.last_oil_change"></date-picker>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions style="background-color: #ededed;" class="justify-center">
            <router-link to="/Admin/Car-List" class="link">
                <v-btn variant="elevated" color="pink" icon @click="$emit('toggleModal')" class="ma-1">
                    <v-icon color="white">mdi-close</v-icon>
                </v-btn>
            </router-link>
            <v-btn variant="elevated" color="cyan" icon class="ma-1">
                <v-icon color="white">mdi-check</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
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