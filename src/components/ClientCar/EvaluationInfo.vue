<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import {ref} from "vue";
import {storeToRefs} from "pinia/dist/pinia";
import { useEvaluationStore } from "@/store/evaluation";
const {loadEvaluations} = useEvaluationStore();
loadEvaluations();
const {getEvaluations} = storeToRefs(useEvaluationStore());
const evaluations = ref({});
const openModal = (data) => {
  if (data.id) {
   evaluations.value = data.evaluation;
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
      {{getEvaluations}}  
      </v-col>
    </v-row>
  </base-modal>
</template>
