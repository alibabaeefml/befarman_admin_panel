<script setup lang="ts">
import { ref, watchEffect } from "vue";
import ClientCarRequestItem from "@components/ClientCarRequest/ClientCarRequestItem.vue";
import ClientCarRequestFilter from "@components/ClientCarRequest/ClientCarRequestFilter.vue";
import { useClientCarRequest } from "@/composables/clientCarRequest";
import InfiniteScroll from "infinite-loading-vue3";
import AdminVerification from "@/components/ClientCarRequest/ClientCarRequestAlert/AdminVerification.vue";
import InvoiceInfo from "@/components/ClientCarRequest/ClientCarRequestInvoice/InvoiceInfo.vue";
import { useClientCarRequestStore as requestStore } from "@/store/clientCarRequest";

const { clientCarRequestFilters } = requestStore();
const {
  indexClientCarRequest,
  // indexArchivedClientCarRequest,
  getClientCarRequests,
  // getArchivedClientCars,
  paginate,
} = useClientCarRequest();
indexClientCarRequest({});

const tab = ref("adminCheck");

// infinite loading
const noResult = ref(false);
let loadingData = false;
const infiniteClientCarRequest = async () => {
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
    await indexClientCarRequest(data);
  } catch (e) {
    console.log(e);
  } finally {
    loadingData = false;
  }
};

watchEffect(() => {
  switch (tab.value) {
    case "adminCheck":
      clientCarRequestFilters.clientCar_request_status_id.val = 1;
      indexClientCarRequest({});
      break;

    case "active":
      break;

    case "canceled":
      break;

    case "archived":
      break;
  }
});
</script>
<template>
  <div>
    <ClientCarRequestFilter />
    <v-card dir="rtl">
      <v-tabs v-model="tab" color="secondary" fixed-tabs>
        <v-tab value="adminCheck">منتظر تایید ادمین</v-tab>
        <v-tab value="active">فعال</v-tab>
        <v-tab value="canceled">منقضی/لغو شده</v-tab>
        <v-tab value="archived">حذف شده</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="adminCheck">
            <InfiniteScroll
              :noResult="noResult"
              @infinite-scroll="infiniteClientCarRequest"
            >
              <ClientCarRequestItem
                v-for="clientCarRequest in getClientCarRequests"
                :key="clientCarRequest.id"
                :clientCarRequest="clientCarRequest"
                :tab="tab"
              />
            </InfiniteScroll>
          </v-window-item>
          <v-window-item value="active"> </v-window-item>
          <v-window-item value="canceled"> </v-window-item>
          <v-window-item value="archived"> </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <v-btn
      size="x-large"
      class="add-btn position-fixed"
      icon
      color="secondary"
      @click=""
    >
      <v-icon color="white">mdi-plus</v-icon>
    </v-btn>
    <admin-verification />
    <InvoiceInfo />
  </div>
</template>
