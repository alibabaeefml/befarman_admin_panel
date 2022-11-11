<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import { useClientCar } from "@/composables/clientCar/clientCar";
const { archiveClientCar, getClientCars, getArchivedClientCars } =
  useClientCar();
import { ref } from "vue";
const clientCarId = ref();
const openModal = async (id) => {
  clientCarId.value = id;
};
const archive = async () => {
  try {
    const response = await archiveClientCar(clientCarId.value);
    useNotification({
      icon: "check",
      content: "حذف خودرو موفقیت آمیز بود",
      theme: "lightgreen",
    });
  } catch {
    useNotification({
  icon: "information",
  content: "حذف خودرو با خطا مواجه شد",
  theme: "#ff8a80",
});
  }
};
</script>

<template>
  <base-modal
    name="clientCarArchiveAcceptance"
    title="تأیید حذف خودرو"
    subtitle="ARCHIVE CAR CONFIRMATION"
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
        @click="archive(), $_closeModal()"
        >بله</v-btn
      >
    </v-card-actions>
  </base-modal>
</template>
