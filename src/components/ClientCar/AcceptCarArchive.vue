<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import Banner from "@/components/Global/Notification/Banner.vue";
import { useClientCar } from "@/composables/clientCar/clientCar";
const { archiveClientCar, getClientCars, getArchivedClientCars } =
  useClientCar();
import { ref } from "vue";
const clientCarId = ref();
const openModal = async (id) => {
  clientCarId.value = id;
};
const banner = ref(null);
const archive = async () => {
  try {
    const response = await archiveClientCar(clientCarId.value);
    banner.value = 'success';
  } catch {
    banner.value = 'failed';
    setTimeout(() => {
      banner.value = null;
    }, 3000);
  }
};
</script>

<template>
  <Banner
    v-if="banner == 'success'"
    content="حذف خودرو با موفقیت انجام شد."
    icon="mdi-remove"
    color="lightgreen"
    @hide="banner = null"
  />
  <Banner
    v-if="banner == 'failed'"
    content="حذف خودرو با خطا مواجه شد."
    icon="mdi-alert-circle"
    color="#f79898"
    @hide="banner = null"
  />
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
