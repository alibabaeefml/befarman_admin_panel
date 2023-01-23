<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useDiscount } from "@/composables/discount";

import DiscountItem from "@/components/Discount/DiscountItem.vue";
import CreditItem from "@/components/Discount/CreditItem.vue";
import InfiniteScroll from "infinite-loading-vue3";
import DiscountInfo from "@/components/Discount/DiscountInfo.vue";
import DiscountEdit from "@/components/Discount/DiscountEdit.vue";
import { useDiscountStore } from "@/store/discount";
const { indexCreditCard, indexDiscount, getCredits, getDiscounts, paginate } =
  useDiscount();

// route titles
const title: any = useRoute().meta.title;
const titleEn: any = useRoute().meta.title_en;

// default tab value
const tab = ref("discounts");

// init tab lists
indexCreditCard({});
indexDiscount({});

// infinite loading
const noResult = ref(false);
let loadingData = false;
const infiniteDiscount = async () => {
  if (loadingData || paginate.value.page >= paginate.value.pageCount) {
    if (paginate.value.page >= paginate.value.pageCount) {
      noResult.value = true;
    }
    return true;
  }
  const data = { pagination: {} };
  data["pagination"] = { ...paginate.value };
  data.pagination.page++;
  loadingData = true;
  try {
    if (tab.value == "credits") {
      await indexCreditCard(data);
    } else {
      await indexDiscount(data);
    }
  } catch (e) {
    console.log(e);
  } finally {
    loadingData = false;
  }
};
onUnmounted(() => {
  useDiscountStore().discounts = [];
});
</script>

<template>
  <div>
    <v-card
      dir="rtl"
      :title="title"
      :subtitle="titleEn"
      prepend-icon="mdi-brightness-percent"
    >
      <v-card-text>
        <v-tabs v-model="tab" color="secondary" class="lg-txt" fixed-tabs>
          <v-tab value="discounts">تخفیف ها</v-tab>
          <v-tab value="credits">اعتبار ها</v-tab>
        </v-tabs>
        <v-window class="mt-5" v-model="tab">
          <v-window-item value="credits">
            <infinite-scroll
              @infinite-scroll="infiniteDiscount"
              :noResult="noResult"
            >
              <CreditItem
                class="m-3"
                v-for="credit in getCredits"
                :key="credit.id"
                :credit="credit"
              />
            </infinite-scroll>
          </v-window-item>
          <v-window-item value="discounts">
            <infinite-scroll
              @infinite-scroll="infiniteDiscount"
              :noResult="noResult"
            >
              <DiscountItem
                v-for="discount in getDiscounts"
                :key="discount.id"
                :discount="discount"
              />
            </infinite-scroll>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <DiscountInfo />
    <DiscountEdit />

    <v-btn size="x-large" class="add-btn" icon color="secondary">
      <v-icon color="white">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<style scoped></style>
