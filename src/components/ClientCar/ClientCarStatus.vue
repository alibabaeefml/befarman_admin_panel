<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import { useClientCarStatusStore as store } from "@/store/clientCarStatus";

import { ref } from "vue";

const currentStatus = ref({});
const clientCar = ref({});
const statuses = ref([]);
const openModal = (data) => {
  currentStatus.value = data.status;
  statuses.value = data.getClientCarStatuses;
  clientCar.value = data.clientCar;
};

const changeStatus = async (id) => {
  clientCar.value.status_id = id;
  await store().changeStatus(clientCar.value.id, id);
};
</script>

<template>
  <base-modal
    name="clientCarStatus"
    title="تغییر وضعیت خودرو"
    subtitle="CLIENT CAR STATUS CHANGE"
    @open="openModal"
  >
    <div
      class="ma-4 pa-2 text-center"
      :style="{
        cursor: 'pointer',
        border: '2px solid' + status.color,
        borderRadius: '10px',
        background: status.id == currentStatus.id ? status.color : '',
        color:
          status.id == currentStatus.id ? 'white' : status.color + '!important',
      }"
      v-for="status in statuses"
      :key="status.id"
      @click="changeStatus(status.id), $_closeModal()"
    >
      <div class="d-flex justify-center align-center">
        <i :class="status.icon" style="font-size: 30px" />
        <h1 class="mr-1">{{ status.name_fa }}</h1>
      </div>
      <h3 style="letter-spacing: 10px">{{ status.name_en }}</h3>
    </div>
  </base-modal>
</template>
