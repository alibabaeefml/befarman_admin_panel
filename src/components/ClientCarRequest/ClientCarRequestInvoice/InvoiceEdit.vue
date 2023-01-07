<script setup lang="ts">
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import { ref } from "vue";
import { useInvoiceStore } from "@/store/invoice";
import { useModalStore } from "@/store/modal";
import type { dynamicObject } from "@/types/common";
import { notify } from "@kyvg/vue3-notification";

const { closeModal } = useModalStore();

const form: dynamicObject = ref({});
const invoiceId: dynamicObject = ref();
const openModal = (invoice: dynamicObject) => {
  if (invoice) {
    form.value = invoice;
    invoiceId.value = invoice.id;
  }
};

const submitForm = async () => {
  try {
    await useInvoiceStore().updateInvoice(invoiceId.value, form.value);
    notify({
      group: "notification",
      type: "success",
      title: "درخواست ویرایش صورت حساب",
      text: "درخواست شما با موفقیت انجام شد.",
    });
  } catch (e) {
    notify({
      group: "notification",
      type: "error",
      title: "درخواست ویرایش صورت حساب",
      text: "درخواست شما با خطا مواجه گردید.",
    });
  }
  closeModal();
};
</script>

<template>
  <base-modal
    name="invoiceEdit"
    :max-width="$vuetify.display.smAndDown ? null : 600"
    @open="openModal"
    title="ویرایش صورت حساب درخواست"
    subtitle="Request Invoice Edit"
    icon="mdi-receipt-text-edit"
  >
    <v-form @submit.prevent="submitForm">
      <v-card-text>
        <v-text-field
          variant="underlined"
          type="number"
          label="اجاره"
          v-model="form.rent"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="راننده همراه"
          v-model="form.additional_driver"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="تجهیزات اضافی"
          v-model="form.additional_equipment"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="هزینه فرودگاه"
          v-model="form.airport_charge"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="کارواش"
          v-model="form.carwash"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="بیعانه نقدی"
          v-model="form.cash_deposit"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="خسارت خودرو"
          v-model="form.damage"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="تحویل در محل"
          v-model="form.delivery_at_location"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="تحویل در محل استرداد"
          v-model="form.delivery_at_the_place_of_return"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="تخفیف"
          v-model="form.discount"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="روز اضافی"
          v-model="form.extra_day"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="ساعت اضافی"
          v-model="form.extra_hours"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="کیلومتر اضافی"
          v-model="form.extra_kilometers"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="بیعانه جریمه"
          v-model="form.fine_deposit"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="کسری سوخت"
          v-model="form.fuel_deduction"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="بیمه"
          v-model="form.insurance"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="جاده یک طرفه"
          v-model="form.one_way_road"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="تحویل خارج از ساعت"
          v-model="form.out_of_hours"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="بازپرداخت تحویل خارج از ساعت"
          v-model="form.out_of_hours_refund"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="مالیات"
          disabled
          v-model="form.tax"
        />
        <v-text-field
          variant="underlined"
          type="number"
          label="مبلغ کل"
          v-model="form.total_amount"
        /> </v-card-text
      >ّ
      <v-card-actions style="background-color: #ededed" class="justify-center">
        <v-btn
          class="mt-10"
          type="submit"
          variant="elevated"
          color="primary"
          block
        >
          ذخیره تغییرات
          <v-icon color="white">mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </base-modal>
</template>
