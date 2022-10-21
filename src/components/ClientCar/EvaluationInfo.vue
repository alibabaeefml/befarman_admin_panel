<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import {ref} from "vue";
import { useEvaluationStore as store } from "@/store/evaluation";

const evaluation = ref({});
const openModal = (data) => {
  if (data.id) {
    evaluation.value = store().showEvaluation(data.id)
  }
};


</script>

<template>
  <base-modal
    name="EvaluationInfo"
    max-width="600px"
    @open="openModal"
    title="ارزیابی خودرو"
    subtitle="Car Evaluation"
    icon="mdi-magnify-scan"
  >
    <v-row>
      <v-col cols="12" md="3" color="white">
      {{evaluation}}  
      </v-col>
    </v-row>
  </base-modal>
</template>
