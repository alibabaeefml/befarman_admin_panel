<script setup>
import BaseModal from "@/componentes/Global/Dialog/BaseModal.vue";




const form = ref({});

const submitForm = async () => {
  if (form.value.id) {
    
  } else {
   
  }
  closeModal();
};
</script>

<template>
  <base-modal
    name="clientCarEvaluationEdit"
    max-width="600px"
    @open="openModal"
    title="ویرایش ارزیابی خودرو"
    subtitle="Edit Car Evaluation"
    icon="mdi-magnify-scan"
  >
  <v-form @submit.prevent="submitForm">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <CropperImage
              v-model:url="form.thumbnail"
              ref="cropper"
              :file-form="fileForm"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" sm="12">
            <v-autocomplete
              variant="underlined"
              label="برند خودرو"
              :items="getBrands"
              item-value="id"
              item-title="name_fa"
              prepend-icon="mdi-car-side"
              v-model="form.brand_id"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-text-field
              variant="underlined"
              type="text"
              label="نام فارسی"
              v-model="form.name_fa"
              prepend-icon="mdi-text"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-text-field
              variant="underlined"
              type="text"
              label="نام انگلیسی"
              v-model="form.name_en"
              prepend-icon="mdi-text"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-autocomplete
              variant="underlined"
              :items="getBodyTypes"
              item-value="id"
              item-title="name"
              type="text"
              label="نوع بدنه"
              v-model="form.body_type_id"
              prepend-icon="mdi-car-door"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-text-field
              variant="underlined"
              type="number"
              label="ظرفیت سرنشین"
              v-model="form.capacity"
              prepend-icon="mdi-car-child-seat"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions style="background-color: #ededed" class="justify-center">
        <v-btn variant="elevated" color="black" icon>
          <v-icon color="white">mdi-pencil</v-icon>
        </v-btn>
      <v-checkbox color="primary" label="مورد تأیید ادمین">
      </v-checkbox>
      </v-card-actions>
    </v-form>
  </base-modal>
</template>
