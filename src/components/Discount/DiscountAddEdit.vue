<script setup lang="ts">
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
import UserSearch from "@components/User/UserSearch.vue";
import FullNameTrimSelected from "@/components/Trim/FullNameTrimSelected.vue";
import type { dynamicObject } from "@/types/common";
import Datepicker from "vue3-persian-datetime-picker";
import { ref, computed } from "vue";
import { useDiscount } from "@/composables/discount";
import { useModalStore } from "@/store/modal";

const form: dynamicObject = ref({});

const pageType: dynamicObject = ref("add");
const staticNames = computed(() => {
  return {
    name: pageType.value == "add" ? "افزودن تخفیف" : "ویرایش تخفیف",
    name_en: pageType.value == "add" ? "DISCOUNT ADD" : "DISCOUNT EDIT",
  };
});

const openModal = async (data: dynamicObject) => {
  form.value = data.discount ?? {};
  pageType.value = data.pageType;
};
const { storeDiscount, updateDiscount } = useDiscount();

const submitForm = async () => {
  if (form.value.id) {
    await updateDiscount(form.value.id, form.value);
  } else {
    await storeDiscount(form.value);
  }
  useModalStore().closeModal();
};
</script>

<template>
  <div>
    <BaseModal
      :title="staticNames.name"
      :subtitle="staticNames.name_en"
      name="discountAddEdit"
      :max-width="$vuetify.display.smAndDown ? null : 600"
      @open="openModal"
      icon="mdi-brightness-percent"
    >
      <v-form @submit.prevent="submitForm">
        <v-card-text class="pa-3">
          <UserSearch
            label="مشتری"
            v-model="form.customer_id"
            noDataText="تخفیف عمومی"
            :phone="form.customer?.phone"
          />
          <FullNameTrimSelected noNam v-model="form.client_car_id" />
          <p color="red">ماشین اشتباه است</p>
          <div class="my-2">
            <Datepicker
              label="تاریخ شروع"
              v-model="form.started_at"
            ></Datepicker>
          </div>
          <div class="my-2">
            <Datepicker
              label="تاریخ پایان"
              v-model="form.expiry_date"
            ></Datepicker>
          </div>

          <v-text-field
            variant="underlined"
            label="مبلغ"
            type="number"
            v-model="form.credit"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            label="کد"
            v-model="form.code"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            label="حداقل خرید"
            type="number"
            v-model="form.min_purchase"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            label="تعداد استفاده"
            type="number"
            v-model="form.number_uses"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn variant="elevated" type="submit" block color="primary"
            >ثبت</v-btn
          >
        </v-card-actions>
      </v-form>
    </BaseModal>
  </div>
</template>
<!-- خودرویی برای این تخفیف در نظر گرفته نشده است. -->
