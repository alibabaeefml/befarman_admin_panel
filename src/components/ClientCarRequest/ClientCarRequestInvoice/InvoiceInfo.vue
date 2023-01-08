<script setup lang="ts">
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import InvoiceItem from "./InvoiceItem.vue";
import { ref } from "vue";
import { useModalStore } from "@/store/modal";
import type { dynamicObject } from "@/types/common";
import { useInvoiceStore } from "@/store/invoice";
import InvoiceEdit from "./InvoiceEdit.vue";

const modalStore = useModalStore();
const { isModal } = modalStore;

const invoice: dynamicObject = ref({});
const clientCarRequest: dynamicObject = ref({});
// const verified: any = ref(null);
const openModal = async (clientCarRequestId: number) => {
  if (clientCarRequestId) {
    clientCarRequest.value["id"] = clientCarRequestId;
    invoice.value = await useInvoiceStore().showInvoice(clientCarRequestId);
    // verified.value = invoice.value.verified == 1;
  }
};
</script>

<template>
  <base-modal
    name="invoiceInfo"
    :max-width="$vuetify.display.smAndDown ? null : 600"
    @open="openModal"
    title="صورت حساب درخواست"
    subtitle="Request Invoice"
    icon="mdi-receipt-text-check"
  >
    <v-card-text>
      <InvoiceItem name_fa="اجاره" :value="invoice.rent" />
      <InvoiceItem name_fa="راننده همراه" :value="invoice.additional_driver" />
      <InvoiceItem
        name_fa="تجهیزات اضافی"
        :value="invoice.additional_equipment"
      />
      <InvoiceItem name_fa="هزینه فرودگاه" :value="invoice.airport_charge" />
      <InvoiceItem name_fa="کارواش" :value="invoice.carwash" />
      <InvoiceItem name_fa="بیعانه نقدی" :value="invoice.cash_deposit" />
      <InvoiceItem name_fa="خسارت خودرو" :value="invoice.damage" />
      <InvoiceItem
        name_fa="تحویل در محل"
        :value="invoice.delivery_at_location"
      />
      <InvoiceItem
        name_fa="تحویل در محل استرداد"
        :value="invoice.delivery_at_the_place_of_return"
      />
      <InvoiceItem name_fa="تخفیف" :value="invoice.discount" />
      <InvoiceItem name_fa="کارت اعتباری" :value="invoice.credit_card" />
      <InvoiceItem name_fa="روز اضافی" :value="invoice.extra_day" />
      <InvoiceItem name_fa="ساعت اضافی" :value="invoice.extra_hours" />
      <InvoiceItem name_fa="کیلومتر اضافی" :value="invoice.extra_kilometers" />
      <InvoiceItem name_fa="بیعانه جریمه" :value="invoice.fine_deposit" />
      <InvoiceItem name_fa="کسری سوخت" :value="invoice.fuel_deduction" />
      <InvoiceItem name_fa="بیمه" :value="invoice.insurance" />
      <InvoiceItem name_fa="جاده یک طرفه" :value="invoice.one_way_road" />
      <InvoiceItem name_fa="تحویل خارج از ساعت" :value="invoice.out_of_hours" />
      <InvoiceItem
        name_fa="بازپرداخت تحویل خارج از ساعت"
        :value="invoice.out_of_hours_refund"
      />
      <InvoiceItem name_fa="مالیات" :value="invoice.tax" />
      <InvoiceItem name_fa="مبلغ کل" :value="invoice.total_amount" />
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        variant="elevated"
        class="mt-8"
        block
        prepend-icon="mdi-pencil"
        @click="$_openModal('invoiceEdit', invoice)"
        >ویرایش</v-btn
      >
      <InvoiceEdit v-if="isModal('invoiceEdit')" />
    </v-card-actions>
  </base-modal>
</template>
