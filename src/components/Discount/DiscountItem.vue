<script setup lang="ts">
import { ref, onUpdated } from "vue";
import { useDiscount } from "@/composables/discount";
import { notify } from "@kyvg/vue3-notification";
import DatePicker from "../Global/Input/DatePicker.vue";
import { useClientCar } from "@/composables/clientCar/clientCar";
import { useUser } from "@/composables/user/user";
const props = defineProps({
  discount: { type: Object, default: {} },
});
const clientCar: any = ref({});
const loadClientCar = async () => {
  clientCar.value = await useClientCar().showClientCar(
    props.discount.client_car_id
  );
};
loadClientCar();

const customer: any = ref({});
const loadCustomer = async () => {
  customer.value = await useUser().showUser({id:props.discount.customer_id});
};
loadCustomer();
onUpdated(() => {
  loadClientCar();
  loadCustomer();
});

const deleteDiscount = async () => {
  try {
    await useDiscount().deleteDiscount(props.discount.id);
    notify({
      type: "success",
      group: "notification",
      title: "حذف تخفیف",
      text: "حذف تخفیف با موفقیت انجام شد.",
    });
  } catch (e: any) {
    const error: any = Object.values(e.response.data.errors)[0];
    notify({
      type: "error",
      group: "notification",
      title: "حذف تخفیف",
      text: error,
    });
  }
};
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
      <v-card
        :elevation="isHovering ? 8 : 2"
        :class="{ 'on-hover': isHovering, 'ma-2': true, 'pa-3': true }"
        v-bind="props"
      >
        <v-card-text>
          <v-row class="yl d-flex text-center align-center">
            <v-col cols="12" md="2" sm="12">
              <div v-if="clientCar.id">
                <router-link
                  :to="{
                    name: 'clientCarDetails',
                    params: { id: clientCar.id },
                  }"
                >
                  <v-img
                    :src="clientCar.thumbnail"
                    cover
                    height="200"
                    class="rounded-lg"
                  >
                  </v-img>
                  <h2 class="mt-2">{{ clientCar.name }}</h2>
                </router-link>

                <v-tooltip activator="parent" location="bottom">
                  تخفیف تنها به خرید این خودرو اختصاص دارد
                </v-tooltip>
              </div>
              <div v-else>
                <v-icon color="#ee3552" size="50">
                  mdi-brightness-percent
                </v-icon>
              </div>
            </v-col>
            <!-- user info -->
            <v-col cols="12" md="2" sm="12">
              <div v-if="customer.id">
                <router-link
                  :to="{
                    name: 'userDetails',
                    params: { id: customer.id },
                  }"
                >
                  <h2>مشتری</h2>
                  <h3>{{ customer.name }}</h3>
                  <h3>{{ customer.phone }}</h3>
                </router-link>
              </div>
              <div v-else>
                <h3>تخفیف عمومی</h3>
              </div>
            </v-col>
            <!-- date -->
            <v-col cols="12" md="2" sm="12">
              <DatePicker
                label="تاریخ شروع:"
                :value="discount.started_at"
                disabled
              />
            </v-col>
            <v-col cols="12" md="2" sm="12">
              <DatePicker
                label="تاریخ پایان:"
                :value="discount.expiry_date"
                disabled
              />
            </v-col>
            <v-col cols="12" md="2" sm="12">
              <h3>مبلغ تخفیف:</h3>
              <h2>{{ discount.credit }} تومان</h2>
            </v-col>
            <v-col cols="12" md="2" sm="12">
              <h3>کد تخفیف:</h3>
              <h2>{{ discount.code }}</h2>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions dir="ltr">
          <v-btn
            color="secondary"
            icon
            variant="elevated"
            size="35"
            @click="$_openModal('discountInfo', discount)"
          >
            <v-icon color="white">mdi-information</v-icon>
            <v-tooltip activator="parent" location="right"
              >جزئیات تخفیف</v-tooltip
            >
          </v-btn>
          <v-btn
            @click="deleteDiscount"
            icon
            color="primary"
            variant="elevated"
            size="35"
          >
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="right">حذف تخفیف</v-tooltip>
          </v-btn>

          <v-btn
            icon
            color="black"
            variant="elevated"
            size="35"
            @click="
              $_openModal('discountAddEdit', { discount, pageType: 'edit' })
            "
          >
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="left"
              >ویرایش تخفیف</v-tooltip
            >
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>
