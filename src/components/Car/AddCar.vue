<script setup>
import { ref } from '@vue/reactivity';
import BaseModal from '../Global/BaseModal/BaseModal.vue';
defineEmits(['toggleModal']);
defineProps(['dialog'])
const getBrands = ref(['سمند', 'ال نود', 'پراید']);
const crop_data = ref(null);
const url = ref(null);
const image = ref('');
const car = ref({
    brand_id: null,
    name_en: null,
    name_fa: null,
    image: [],
})
</script>
<template>
    <BaseModal :dialog="dialog" title="اضافه کردن خودرو" subtitle="ADD NEW CAR" icon="mdi-car-side"
        @toggleModal="$emit('toggleModal')">
        <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <div v-if="image" style="width:100%">
                            <img :src="image" width="100%">
                        </div>
                        <v-file-input @change="changeImage" v-model="car.image" label="تصویر خودرو را بارگذاری کنید"
                            variant="outlined" prepend-icon="mdi-camera"></v-file-input>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" sm="12">
                        <v-select label="برند خودرو" name="brand" :items="getBrands" item-value="id" item-text="name_fa"
                            prepend-icon="mdi-car-side" v-model="car.brand_id" variant="underlined"></v-select>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <v-text-field variant="underlined" type="text" label="نام فارسی" v-model="car.name_fa"
                            prepend-icon="mdi-text">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <v-text-field variant="underlined" type="text" label="نام انگلیسی" v-model="car.name_en"
                            prepend-icon="mdi-text">
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