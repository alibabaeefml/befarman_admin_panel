<script setup lang="ts">
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
import UserSearch from "@components/User/UserSearch.vue";
import type { dynamicObject } from "@/types/common";
import DatePicker from "../Global/Input/DatePicker.vue";
import { ref, computed } from "vue";
import { useDiscount } from "@/composables/discount";
import { useModalStore } from "@/store/modal";
import { notify } from "@kyvg/vue3-notification";
import ClientCarSearch from "../ClientCar/ClientCarSearch.vue";

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
    try {
      await updateDiscount(form.value.id, form.value);
      notify({
        group: "notification",
        type: "success",
        title: "ویرایش تخفیف",
        text: "ویرایش با موفقیت انجام شد.",
      });
    } catch (e: any) {
      const errors: any = Object.values(e.response.data.errors);
      errors.map((e: any) => {
        notify({
          group: "notification",
          type: "error",
          title: "ویرایش تخفیف",
          text: e,
        });
      });
    }
  } else {
    try {
      await storeDiscount(form.value);
      notify({
        group: "notification",
        type: "success",
        title: "افزودن تخفیف",
        text: "تخفیف با موفقیت ثبت شد.",
      });
    } catch (e: any) {
      const error: any = Object.values(e.response.data.errors)[0];
      notify({
        group: "notification",
        type: "error",
        title: "افزودن تخفیف",
        text: error,
      });
    }
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
    {{ form.expiry_date||'543' }}
      <v-form @submit.prevent="submitForm">
        <v-card-text class="pa-3">
          <UserSearch
            label="مشتری"
            v-model="form.customer_id"
            noDataText="تخفیف عمومی"
            :phone="form.customer?.phone"
          />

          <div class="my-2">
            <DatePicker
              label="تاریخ شروع:"
              v-model="form.started_at"
            />
          </div>
          <div class="my-2">
            <DatePicker
              label="تاریخ پایان:"
              v-model="form.expiry_date"
            />
          </div>
          <ClientCarSearch
            :number="form.clientCar?.car_number"
            v-model="form.client_car_id"
          />
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
