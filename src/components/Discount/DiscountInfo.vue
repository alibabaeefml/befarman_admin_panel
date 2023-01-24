<script setup lang="ts">
import type { dynamicObject } from "@/types/common";
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
import DiscountInfoItem from "@components/Discount/DiscountInfoItem.vue";
import { ref } from "vue";
const discount: dynamicObject = ref({});
const openModal = async (data: dynamicObject) => {
  discount.value = data;
};
</script>

<template>
  <div>
    <BaseModal
      title="جزئیات تخفیف"
      subtitle="DISCOUNT INFO"
      name="discountInfo"
      :max-width="$vuetify.display.smAndDown ? null : 600"
      @open="openModal"
      icon="mdi-brightness-percent"
    >
      <v-card-text>
        <DiscountInfoItem name_fa="مشتری" :value="discount.customer.name" />
        <DiscountInfoItem name_fa="خودرو" :value="discount.clientCar.name" />
        <DiscountInfoItem name_fa="تاریخ شروع" :value="discount.started_at" />
        <DiscountInfoItem name_fa="تاریخ پایان" :value="discount.expiry_date" />
        <DiscountInfoItem name_fa="مبلغ" :value="discount.credit + ' تومان'" />
        <DiscountInfoItem name_fa="کد" :value="discount.code" />
        <DiscountInfoItem name_fa="ارگان" :value="discount.organization" />
        <DiscountInfoItem name_fa="قابل استفاده" :value="discount.number_uses + ' بار'" />
        <DiscountInfoItem name_fa="حداقل مبلغ خرید" :value="discount.min_purchase + ' تومان'" />
        <router-link :to="{ name: 'userDetails', params: { id: discount.user_id } }">
          <DiscountInfoItem
          name_fa="ثبت شده توسط"
          :value="discount.user.name"
        />
      <v-tooltip activator="parent" location="bottom">
        مشاهده اطلاعات ادمین
      </v-tooltip>
      </router-link>
        
      </v-card-text>
    </BaseModal>
  </div>
</template>
