<script setup>
import { ref, computed } from '@vue/reactivity';
import BaseModal from '../Global/Dialog/BaseModal.vue';
defineProps(['dialog', 'add'])

const getBrands = ref(['سمند', 'ال نود', 'پراید']);
const image = ref();
const form = ref({});
const pageType = ref('add');
const staticNames = computed('staticNames', () => {
    if(pageType.value == 'add') {
        return {
            name: 'افزودن خودرو',
            name_en: 'add car'
        }
    } else {
        return {
            name: 'ویرایش خودرو',
            name_en: 'edit car'
        }
    }
})
const openModal = (data) => {
    if(data.id) {
        form.value = data;
        pageType.value = 'edit';
    }
}

</script>

<template>
    <base-modal name="add-car" @open="openModal" >
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <div v-if="image" style="width:100%">
                        <v-img :src="image" block />
                    </div>
                    <v-file-input v-model="car.image" label="تصویر خودرو را بارگذاری کنید" variant="outlined"
                        prepend-icon="mdi-camera"></v-file-input>
                    <!-- <v-file-input v-model="car.image" label="تصویر خودرو را بارگذاری کنید"
                        variant="outlined" prepend-icon="mdi-camera"></v-file-input> -->

                        <!-- <CropperImage /> -->
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" sm="12">
                    <v-select label="برند خودرو" name="brand" :items="getBrands" item-value="id" item-text="name_fa"
                        prepend-icon="mdi-car-side" v-model="form.brand_id" variant="underlined"></v-select>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                    <v-text-field variant="underlined" type="text" label="نام فارسی" v-model="form.name_fa"
                        prepend-icon="mdi-text">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                    <v-text-field variant="underlined" type="text" label="نام انگلیسی" v-model="form.name_en"
                        prepend-icon="mdi-text">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-select variant="underlined" type="text" label="نوع بدنه" prepend-icon="mdi-car-door">
                    </v-select>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-text-field variant="underlined" type="number" label="ظرفیت سرنشین"
                        prepend-icon="mdi-car-child-seat">
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions style="background-color: #ededed;" class="justify-center">
            <v-btn variant="elevated" color="pink" icon @click="$_closeModal()">
                <v-icon color="white">mdi-close</v-icon>
            </v-btn>
            <v-btn variant="elevated" color="cyan" icon>
                <v-icon color="white">mdi-check</v-icon>
            </v-btn>
        </v-card-actions>
    </base-modal>
</template>