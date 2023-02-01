<script setup lang="ts">
import { ref } from "vue";
import ClientCarRequestItem from "@components/ClientCarRequest/ClientCarRequestItem.vue";
import ClientCarRequestFilter from "@components/ClientCarRequest/ClientCarRequestFilter.vue";
import { useClientCarRequest } from "@/composables/clientCarRequest";
import InfiniteScroll from "infinite-loading-vue3";
import AdminVerification from "@/components/ClientCarRequest/ClientCarRequestAlert/AdminVerification.vue";
import InvoiceInfo from "@/components/ClientCarRequest/ClientCarRequestInvoice/InvoiceInfo.vue";

const {
  indexClientCarRequest,
  // indexArchivedClientCarRequest,
  getClientCarRequests,
  // getArchivedClientCars,
  paginate,
} = useClientCarRequest();
indexClientCarRequest({});
const tab = ref("one");

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
    if (tab.value == "active") {
      await indexClientCarRequest(data);
    } else {
      // await indexArchivedClientCar(data);
    }
  } catch (e) {
    console.log(e);
  } finally {
    loadingData = false;
  }
};
</script>
<template>
  <div>
    <ClientCarRequestFilter />
    <v-card>
      <v-tabs v-model="tab" color="secondary" fixed-tabs>
        <v-tab value="two">درخواست های حذف شده</v-tab>
        <v-tab value="one">درخواست های فعال</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="two">
            <ClientCarRequestItem
              v-for="clientCarRequest in getClientCarRequests"
              :key="clientCarRequest.id"
              :clientCarRequest="clientCarRequest"
              :archived="true"
            />
          </v-window-item>
          <v-window-item value="one">
            <infinite-scroll
              @infinite-scroll="infiniteClientCarRequest"
              :noResult="noResult"
            >
              <ClientCarRequestItem
                v-for="clientCarRequest of getClientCarRequests"
                :key="clientCarRequest.id"
                :clientCarRequest="clientCarRequest"
              />
            </infinite-scroll>
          </v-window-item>
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
