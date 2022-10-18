<script setup>
import { ref, computed } from "vue";
import BaseModal from "../Global/Dialog/BaseModal.vue";
import CropperImage from "../Global/Input/CropperImage.vue";
import { useBrandStore } from "@/store/brand";
import { useBodyTypeStore } from "@/store/bodyType";
import { useCar } from "@/composables/car/car";
import { storeToRefs } from "pinia/dist/pinia";
import { useModalStore } from "@/store/modal";
import { makeid } from "@/utils/common/math";

const { closeModal } = useModalStore();
const brandStore = useBrandStore();
const bodyTypeStore = useBodyTypeStore();
const { getBrands } = storeToRefs(brandStore);
const { getBodyTypes } = storeToRefs(bodyTypeStore);
const { loadBrands } = brandStore;
const { loadBodyTypes } = bodyTypeStore;
const { storeCar, updateCar, defaultThumb } = useCar();

loadBrands();
loadBodyTypes();

const form = ref({});

const pageType = ref("add");
const staticNames = computed(() => {
  return {
    name: pageType.value == "add" ? "افزودن خودرو" : "ویرایش خودرو",
    name_en: pageType.value == "add" ? "ADD CAR" : "EDIT CAR",
  };
});

const fileForm = ref({
  model_name: "car",
  collection_name: "main_image",
  batch_id: makeid(50),
});

const openModal = (data) => {
  if (data.id) {
    form.value = data;
    pageType.value = "edit";
  }
};

const cropper = ref(null);

const submitForm = async () => {
  await cropper.value.upload();
  if (!form.value.thumbnail) {
    form.value.thumbnail = defaultThumb;
  }
  if (form.value.id) {
    await updateCar(form.value.id, form.value);
  } else {
    await storeCar(form.value);
  }
  closeModal();
};
</script>

<template>

    <base-modal name="add-car" max-width="600px" @open="openModal" :title="staticNames.name"
        :subtitle="staticNames.name_en" icon="mdi-car">
        <v-form @submit.prevent="submitForm">
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <CropperImage v-model:url="form.thumbnail" ref="cropper" :file-form="fileForm" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" sm="12">
                        <v-autocomplete variant="underlined" label="برند خودرو" :items="getBrands" item-value="id"
                            item-title="name_fa" prepend-icon="mdi-car-side" v-model="form.brand_id"></v-autocomplete>
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
                        <v-autocomplete variant="underlined" :items="getBodyTypes" item-value="id" item-title="name"
                            type="text" label="نوع بدنه" v-model="form.body_type_id" prepend-icon="mdi-car-door">
                        </v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                        <v-text-field variant="underlined" type="number" label="ظرفیت سرنشین" v-model="form.capacity"
                            prepend-icon="mdi-car-child-seat">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions style="background-color: #ededed;" class="justify-center">
                <v-btn variant="elevated" color="pink" icon @click="$_closeModal()">
                    <v-icon color="white">mdi-close</v-icon>
                </v-btn>
                <v-btn variant="elevated" type="submit" color="cyan" icon @click="submitForm">
                    <v-icon color="white">mdi-check</v-icon>
                </v-btn>
            </v-card-actions>
        </v-form>
    </base-modal>
</template>
