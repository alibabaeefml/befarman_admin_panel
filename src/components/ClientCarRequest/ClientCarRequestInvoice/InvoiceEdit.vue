<script setup lang="ts">
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import { ref } from "vue";
import { useInvoiceStore } from "@/store/invoice";
import { useModalStore } from "@/store/modal";
import type { dynamicObject } from "@/types/common";
import { notify } from "@kyvg/vue3-notification";
import InvoiceItem from "./InvoiceItem.vue";
const { closeModal } = useModalStore();

const form: dynamicObject = ref({});
const invoiceId: dynamicObject = ref();
const openModal = (invoice: dynamicObject) => {
  if (invoice) {
    form.value = invoice;
    invoiceId.value = invoice.id;
  }
};
const taxPercent = 9;
const grossPrice = ref(0);
const toSum = [
  "rent",
  "insurance",
  "airport_charge",
  "delivery_at_location",
  "out_of_hours",
  "additional_equipment",
  "additional_driver",
  "one_way_road",
  "fine_deposit",
  "cash_deposit",
  "extra_day",
  "extra_kilometers",
  "extra_hours",
  "fuel_deduction",
  "carwash",
  "damage",
  "out_of_hours_refund",
  "delivery_at_the_place_of_return",
];
const formCalc = () => {
  grossPrice.value = 0;
  for (let item in form.value) {
    !form.value[item] ? (form.value[item] = 0) : null;
    if (toSum.includes(item)) {
      grossPrice.value += form.value[item];
    }
  }
  grossPrice.value -= form.value.discount + form.value.credit_card;
  form.value.tax =
    ((grossPrice.value - (form.value.fine_deposit + form.value.cash_deposit)) *
      taxPercent) /
    100;
  form.value.total_amount = grossPrice.value + form.value.tax;
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
        {{ grossPrice }}
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="اجاره"
          v-model.number="form.rent"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="راننده همراه"
          v-model.number="form.additional_driver"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="تجهیزات اضافی"
          v-model.number="form.additional_equipment"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="هزینه فرودگاه"
          v-model.number="form.airport_charge"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="کارواش"
          v-model.number="form.carwash"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="بیعانه نقدی"
          v-model.number="form.cash_deposit"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="خسارت خودرو"
          v-model.number="form.damage"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="تحویل در محل"
          v-model.number="form.delivery_at_location"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="تحویل در محل استرداد"
          v-model.number="form.delivery_at_the_place_of_return"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="تخفیف"
          v-model.number="form.discount"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="کارت اعتباری"
          v-model.number="form.credit_card"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="روز اضافی"
          v-model.number="form.extra_day"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="ساعت اضافی"
          v-model.number="form.extra_hours"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="کیلومتر اضافی"
          v-model.number="form.extra_kilometers"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="بیعانه جریمه"
          v-model.number="form.fine_deposit"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="کسری سوخت"
          v-model.number="form.fuel_deduction"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="بیمه"
          v-model.number="form.insurance"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="جاده یک طرفه"
          v-model.number="form.one_way_road"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="تحویل خارج از ساعت"
          v-model.number="form.out_of_hours"
        />
        <v-text-field
          @input="formCalc"
          variant="underlined"
          type="number"
          label="بازپرداخت تحویل خارج از ساعت"
          v-model.number="form.out_of_hours_refund"
        />
        <InvoiceItem name_fa="مالیات" :value="form.tax" />
        <InvoiceItem name_fa="مبلغ کل" :value="form.total_amount" />ّ
      </v-card-text>
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
