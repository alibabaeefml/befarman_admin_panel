<script setup lang="ts">
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
import UserSearch from "@components/User/UserSearch.vue";
import type { dynamicObject } from "@/types/common";
import DatePicker from "../Global/Input/DatePicker.vue";
import { ref, computed } from "vue";
import { useDiscount } from "@/composables/discount";
import { useModalStore } from "@/store/modal";
import { notify } from "@kyvg/vue3-notification";

const form: dynamicObject = ref({});

const pageType: dynamicObject = ref("add");
const staticNames = computed(() => {
  return {
    name:
      pageType.value == "add" ? "افزودن کارت اعتباری" : "ویرایش کارت اعتباری",
    name_en: pageType.value == "add" ? "CREDIT CARD ADD" : "CREDIT CARD EDIT",
  };
});

const openModal = async (data: dynamicObject) => {
  pageType.value = data.pageType;
};

const submitForm = async () => {
  try {
    await useDiscount().storeCreditCard(form.value);
    notify({
      group: "notification",
      type: "success",
      title: "ثبت کارت اعتباری",
      text: "با موفقیت ثبت گردید.",
    });
  } catch (e: any) {
    const errors: any = Object.values(e.response.data.errors);
    errors.map((e: any) => {
      notify({
        group: "notification",
        type: "error",
        title: "ثبت کارت اعتباری",
        text: e,
      });
    });
  }
  useModalStore().closeModal();
};
</script>

<template>
  <div>
    <BaseModal
      :title="staticNames.name"
      :subtitle="staticNames.name_en"
      name="creditAddEdit"
      :max-width="$vuetify.display.smAndDown ? null : 600"
      @open="openModal"
      icon="mdi-credit-card"
    >
      <v-form @submit.prevent="submitForm">
        <v-card-text class="pa-3">
          <UserSearch
            label="مشتری"
            v-model="form.customer_id"
            noDataText="مشتری مورد نظر را برای شارژ اعتباری انتخاب نمایید"
            :phone="form.customer?.phone"
          />

          <v-text-field
            variant="underlined"
            label="شرکت"
            v-model="form.organization"
          ></v-text-field>

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
          <div class="my-2">
            <DatePicker
              label="تاریخ پایان:"
              v-model="form.expiry_date"
            />
          </div>
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
