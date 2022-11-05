<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import { useClientCar } from "@/composables/clientCar/clientCar";
const { deleteClientCar, getClientCars, getArchivedClientCars } =
  useClientCar();
import { ref } from "vue";
const clientCarId = ref();
const openModal = async (id) => {
  clientCarId.value = id;
};

</script>

<template>
  <base-modal
    name="clientCarAcceptanceAcceptance"
    title="تأیید حذف خودرو"
    subtitle="CAR DELETE CONFIRMATION"
    icon="mdi-delete"
    @open="openModal"
  >
    <v-card-text>
      <h2 class="text-center">از حذف خودرو مطمئن هستید؟</h2>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn color="primary" variant="elevated" @click="$_closeModal()"
        >خیر</v-btn
      >
      <v-btn
        color="secondary"
        variant="elevated"
        @click="deleteClientCar(clientCarId), $_closeModal()"
        >بله</v-btn
      >
    </v-card-actions>
  </base-modal>
</template>
