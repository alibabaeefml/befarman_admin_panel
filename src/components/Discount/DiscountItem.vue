<script setup lang="ts">
const props = defineProps({
  discount: { type: Object, default: {} },
});
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
              <div v-if="discount.client_car_id">
                <router-link
                  :to="{
                    name: 'clientCarDetails',
                    params: { id: discount.client_car_id },
                  }"
                >
                  <v-img
                    :src="discount.clientCar.thumbnail"
                    cover
                    height="200"
                    class="rounded-lg"
                  >
                  </v-img>
                  <h2 class="mt-2">{{ discount.clientCar.name }}</h2>
                </router-link>

                <v-tooltip activator="parent" location="bottom">
                  تخفیف تنها به این خودرو اختصاص دارد
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
              <div v-if="discount.user">
                <router-link
                  :to="{
                    name: 'userDetails',
                    params: { id: discount.customer_id },
                  }"
                >
                  <h2>{{ discount.user.name }}</h2>
                  <h3>{{ discount.user.phone }}</h3>
                </router-link>
              </div>
              <div v-else>
                <h3>تخفیف عمومی</h3>
              </div>
            </v-col>
            <!-- date -->
            <v-col cols="12" md="2" sm="12">
              <h3>تاریخ شروع:</h3>
              <h2>{{ discount.started_at }}</h2>
            </v-col>
            <v-col cols="12" md="2" sm="12">
              <h3>تاریخ پایان:</h3>
              <h2>{{ discount.expiry_date }}</h2>
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
          <v-btn icon color="primary" variant="elevated" size="35">
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="right">حذف تخفیف</v-tooltip>
          </v-btn>

          <v-btn
            icon
            color="black"
            variant="elevated"
            size="35"
            @click="$_openModal('discountEdit',discount)"
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
