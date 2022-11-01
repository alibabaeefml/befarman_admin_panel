<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import { ref } from "vue";
const form = ref({});

const openModal = async (data) => {
  if (data.id) {
    form.value = data;
  }
};

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
    @open="openModal"
    title="ویرایش ارزیابی خودرو"
    subtitle="Edit Car Evaluation"
    icon="mdi-magnify-scan"
  >
    <v-form @submit.prevent="submitForm">
      <v-card-text>
        <v-text-field
          variant="underlined"
          type="text"
          label="موتور"
          v-model="form.engine"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="باتری"
          v-model="form.battery"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="بدنه"
          v-model="form.body"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="شاسی"
          v-model="form.chasis"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="روغن موتور"
          v-model="form.engine_oil"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="تسمه تایم"
          v-model="form.timing_belt"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="تسمه دینام"
          v-model="form.alternator_belt"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="شمع و وایر"
          v-model="form.wire_candle"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="صافی بنزین"
          v-model="form.gas_filter"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="روغن گیربکس"
          v-model="form.gearbox_oil"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="روغن واسکازین"
          v-model="form.vaskazin_oil"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="کمک جلو"
          v-model="form.front_pads"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="کمک عقب"
          v-model="form.rear_pad"
          prepend-icon="mdi-text"
        >
        </v-text-field>
        <v-text-field
          variant="underlined"
          type="text"
          label="کمک فنر"
          v-model="form.shock_absorber"
          prepend-icon="mdi-text"
        >
        </v-text-field>
      </v-card-text>
      <v-card-actions style="background-color: #ededed" class="justify-center">
        <v-checkbox
          color="green"
          style="font-weight: bold"
          label="تایید ادمین"
          v-model="verified"
        />

        <v-btn class="mt-10" variant="elevated" color="primary" block>
          ذخیره تغییرات
          <v-icon color="white">mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </base-modal>
</template>
