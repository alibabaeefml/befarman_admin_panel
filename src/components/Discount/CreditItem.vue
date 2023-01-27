<script setup lang="ts">
import { useDiscount } from "@/composables/discount";
import { notify } from "@kyvg/vue3-notification";
import DatePicker from "../Global/Input/DatePicker.vue";

const props = defineProps({
  credit: { type: Object, default: {} },
});

const deleteCredit = async () => {
  try {
    await useDiscount().deleteCredit(props.credit.id);
    notify({
      type: "success",
      group: "notification",
      title: "حذف کارت اعتباری",
      text: "حذف کارت اعتباری با موفقیت انجام شد.",
    });
  } catch (e: any) {
    const error: any = Object.values(e.response.data.errors)[0];
    notify({
      type: "error",
      group: "notification",
      title: "حذف کارت اعتباری",
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
            <v-col
              cols="12"
              md="2"
              sm="12"
              class="d-flex justify-space-between"
            >
              <v-icon color="secondary" size="50"> mdi-credit-card </v-icon>
              <router-link
                :to="{ name: 'userDetails', params: { id: credit.user_id } }"
              >
                <h3>ثبت شده توسط</h3>
                <h3>{{ credit.user.name }}</h3>
                <h3>{{ credit.user.phone }}</h3>
              </router-link>
            </v-col>
            <!-- user info -->
            <v-col cols="12" md="2" sm="12">
              <router-link
                :to="{
                  name: 'userDetails',
                  params: { id: credit.customer_id },
                }"
              >
                <h2>مشتری</h2>
                <h3>{{ credit.user.name }}</h3>
                <h3>{{ credit.user.phone }}</h3>
              </router-link>
            </v-col>
            <!-- date -->
            <v-col cols="12" md="2" sm="12">
              <h3>شرکت:</h3>
              <h2 class="mm">{{ credit.organization }}</h2>
            </v-col>
            <v-col cols="12" md="2" sm="12">
              <DatePicker
                label="تاریخ پایان:"
                :value="credit.expiry_date"
                disabled
              />
            </v-col>
            <v-col cols="12" md="2" sm="12">
              <h3>مبلغ اعتباری:</h3>
              <h2>{{ credit.credit }} تومان</h2>
            </v-col>
            <v-col cols="12" md="2" sm="12">
              <h3>کد اعتباری:</h3>
              <h2>{{ credit.code }}</h2>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions dir="ltr">
          <v-btn
            @click="deleteCredit"
            icon
            color="primary"
            variant="elevated"
            size="35"
          >
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="right"
              >حذف کارت اعتباری</v-tooltip
            >
          </v-btn>

          <v-btn
            icon
            color="black"
            variant="elevated"
            size="35"
            @click="$_openModal('creditAddEdit', { credit, pageType: 'edit' })"
          >
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="left"
              >ویرایش کارت اعتباری</v-tooltip
            >
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>
