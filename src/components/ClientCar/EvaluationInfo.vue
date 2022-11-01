<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import EvaluationItem from "@/components/clientCar/EvaluationItem.vue";
import EvaluationEdit from "@//components/clientCar/EvaluationEdit.vue";
import { ref } from "vue";
import { useEvaluationStore as store } from "@/store/evaluation";

const evaluation = ref({});
const verified = ref(null);
const openModal = async (data) => {
  if (data.id) {
    evaluation.value = await store().showEvaluation(1);
    verified.value = evaluation.value.verified == 1;
  }
};
</script>

<template>
  <base-modal
    name="EvaluationInfo"
    :width="$vuetify.display.xs ? $vuetify.display.width - 20 : 500"
    @open="openModal"
    title="ارزیابی خودرو"
    subtitle="Car Evaluation"
    icon="mdi-magnify-scan"
  >
    <v-card-text>
      <EvaluationItem name_fa="موتور" :value="evaluation.engine" />
      <EvaluationItem name_fa="باتری" :value="evaluation.battery" />
      <EvaluationItem name_fa="بدنه" :value="evaluation.body" />
      <EvaluationItem name_fa="شاسی" :value="evaluation.chasis" />
      <EvaluationItem name_fa="روغن موتور" :value="evaluation.engine_oil" />
      <EvaluationItem name_fa="تسمه تایم" :value="evaluation.timing_belt" />
      <EvaluationItem name_fa="تسمه دینام" :value="evaluation.alternator_belt" />
      <EvaluationItem name_fa="لاستیک ها" :value="evaluation.tires" />
      <EvaluationItem name_fa="شمع و وایر" :value="evaluation.wire_candle" />
      <EvaluationItem name_fa="صافی بنزین" :value="evaluation.gas_filter" />
      <EvaluationItem name_fa="روغن گیربکس" :value="evaluation.gearbox_oil" />
      <EvaluationItem
        name_fa="روغن واسکازین"
        :value="evaluation.vaskazin_oil"
      />
      <EvaluationItem name_fa="کمک جلو" :value="evaluation.front_pads" />
      <EvaluationItem name_fa="کمک عقب" :value="evaluation.rear_pad" />
      <EvaluationItem name_fa="کمک فنر" :value="evaluation.shock_absorber" />
    </v-card-text>
    <v-card-actions>
     
      <v-btn
        color="primary"
        variant="elevated"
        class="mt-8"
        block
        prepend-icon="mdi-pencil"
        @click="$_openModal('clientCarEvaluationEdit',evaluation)"
        >ویرایش</v-btn
      >
      <EvaluationEdit />
    </v-card-actions>
  </base-modal>
</template>
