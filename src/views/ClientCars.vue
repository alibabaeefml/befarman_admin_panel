<script setup>
import ClientCarItem from "@components/ClientCar/ClientCarItem.vue";
import AcceptCarArchive from "@components/ClientCar/AcceptCarArchive.vue";
import { ref } from "vue";
import ClientCarFilter from "@components/ClientCar/ClientCarFilter.vue";
import ClientCarComments from "@components/ClientCar/ClientCarComments.vue";
import EvaluationInfo from "@/components/ClientCar/EvaluationInfo.vue";
import ClientCarStatus from "@/components/ClientCar/ClientCarStatus.vue";
import { useClientCar } from "@/composables/clientCar/clientCar";
import InfiniteScroll from "infinite-loading-vue3";
import { useModalStore } from "@/store/modal";

const modalStore = useModalStore();
const { isModal } = modalStore;

const {
  indexClientCar,
  indexArchivedClientCar,
  getClientCars,
  getArchivedClientCars,
  paginate,
} = useClientCar();

const tab = ref("active");

indexClientCar({});
indexArchivedClientCar({});
// infinite loading
const noResult = ref(false);
let loadingData = false;
const infiniteClientCar = async () => {
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
      await indexClientCar(data);
    } else {
      await indexArchivedClientCar(data);
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
    <ClientCarFilter :archived="tab" />
    <v-card
      dir="rtl"
      :title:any="$route.meta.title"
      :subtitle:any="$route.name"
      prepend-icon="mdi-car"
    >
      <v-tabs v-model="tab" color="secondary" fixed-tabs>
        <v-tab value="active">خودرو های فعال</v-tab>
        <v-tab value="archived">خودرو های حذف شده</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="archived">
            <infinite-scroll
              @infinite-scroll="infiniteClientCar"
              :noResult="noResult"
            >
              <ClientCarItem
                v-for="archivedClientCar of getArchivedClientCars"
                :key="archivedClientCar.id"
                :client-car="archivedClientCar"
                :archived="true"
              />
            </infinite-scroll>
          </v-window-item>
          <v-window-item value="active">
            <infinite-scroll
              @infinite-scroll="infiniteClientCar"
              :noResult="noResult"
            >
              <ClientCarItem
                v-for="clientCar of getClientCars"
                :key="clientCar.id"
                :client-car="clientCar"
              />
            </infinite-scroll>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <router-link :to="{ name: 'addClientCar' }" class="link">
      <v-btn size="x-large" class="add-btn" icon color="secondary">
        <v-icon color="white">mdi-plus</v-icon>
      </v-btn>
    </router-link>
    <ClientCarStatus />
    <AcceptCarArchive />
    <ClientCarComments />
    <EvaluationInfo v-if="isModal('evaluationInfo')" />
  </div>
</template>
