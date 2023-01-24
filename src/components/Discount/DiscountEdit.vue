<script setup lang="ts">
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
import UserSearch from "@components/User/UserSearch.vue";
import FullNameTrimSelected from "@/components/Trim/FullNameTrimSelected.vue";
import type { dynamicObject } from "@/types/common";
import { ref } from "vue";
const form: dynamicObject = ref({});
const openModal = async (data: dynamicObject) => {
  form.value = data;
};
</script>

<template>
  <div>
    <BaseModal
      title="ویرایش تخفیف"
      subtitle="DISCOUNT EDIT"
      name="discountEdit"
      :max-width="$vuetify.display.smAndDown ? null : 600"
      @open="openModal"
      icon="mdi-brightness-percent"
    >
      <UserSearch
        label="مشتری"
        v-model="form.customer"
        noDataText="تخفیف عمومی"
        :phone="form.customer.phone"
      />
      <CarSelected
        label="خودرو"
        v-model="form.client_car_id"
        noDataText="خودرویی برای این تخفیف در نظر گرفته نشده است."
      />
      <FullNameTrimSelected v-model="form.client_car.trim_id" />
    </BaseModal>
  </div>
</template>
