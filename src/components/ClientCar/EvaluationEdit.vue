<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import { ref } from "vue";
import { useEvaluationStore } from "@/store/evaluation";
import { useModalStore } from "@/store/modal";

const { closeModal } = useModalStore();

const clientCar = ref({});
const form = ref({});

const openModal = ({ data, clientCarId }) => {
  if (data && clientCarId) {
    clientCar.value["id"] = clientCarId;
    form.value = data;
  }
};

const submitForm = async () => {
  await useEvaluationStore().storeEvaluation(clientCar.value.id, form.value);

  closeModal();
};
</script>

<template>
  <base-modal
    name="clientCarEvaluationEdit"
    @open="openModal"
    :max-width="$vuetify.display.smAndDown ? null : 600"
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
          v-model="form.chassis"
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
      <v-card-actions
        style="background-color: #ededed"
        class="flex-column justify-start"
      >
        <v-checkbox
          color="green"
          style="font-weight: bold"
          label="تایید ادمین"
          v-model="form.verified"
          block
        ></v-checkbox>
        <v-btn type="submit" variant="elevated" color="primary" block>
          ذخیره تغییرات
          <v-icon color="white">mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </base-modal>
</template>
