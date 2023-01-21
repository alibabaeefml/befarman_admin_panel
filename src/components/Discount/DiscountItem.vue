<script setup lang="ts">
const props = defineProps({
  discount: { type: Object, default: {} },
});
</script>

<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row class="yl d-flex align-center">
        <!-- user info -->
        <v-col class="text-center">
          <div v-if="discount.user">
            <h2>نام کاربر</h2>
            <h3>090000000</h3>
          </div>
          <div v-else>
            <h3>تخفیف عمومی</h3>
          </div>
        </v-col>
        <!-- date -->
        <v-col>
          <h3>تاریخ شروع:</h3>
          <h2>{{ discount.started_at }}</h2>
        </v-col>
        <v-col>
          <h3>تاریخ پایان:</h3>
          <h2>{{ discount.expiry_date }}</h2>
        </v-col>
        <v-col>
          <h3>مقدار تخفیف:</h3>
          <h2>{{ discount.credit }} تومان</h2>
        </v-col>
        <v-col>
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
            @click="$_openModal('discountInfo')"
          >
            <v-icon color="white">mdi-information</v-icon>
            <v-tooltip activator="parent" location="right"
              >جزئیات تخفیف</v-tooltip
            >
          </v-btn>
          <v-btn
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
            @click="$_openModal('discountEdit')"
          >
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="left"
              >ویرایش تخفیف</v-tooltip
            >
          </v-btn>  
      </v-card-actions>
    </v-card>
  </div>
</template>
