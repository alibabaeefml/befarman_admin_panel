<script setup>
import ClientCarItem from "@components/ClientCar/ClientCarItem.vue";
import AcceptCarArchive from "@components/ClientCar/AcceptCarArchive.vue";
import { ref } from "vue";
import ClientCarFilter from "@components/ClientCar/ClientCarFilter.vue";
import ClientCarComments from "@components/ClientCar/ClientCarComments.vue";
import EvaluationInfo from "@/components/ClientCar/EvaluationInfo.vue";
import ClientCarStatus from "@/components/ClientCar/ClientCarStatus.vue"; 
import { useClientCar } from "@/composables/clientCar/clientCar";
import { storeToRefs } from "pinia/dist/pinia";
import InfiniteScroll from "infinite-loading-vue3";

const clientCar = useClientCar();
const { getClientCars, paginate } = storeToRefs(clientCar);
clientCar.indexCar();

const tab = ref("one");
const deleteConfirm = ref(false);
const commentsModal = ref(false);

// infinite loading
let loadingData = false;
const infiniteCar = async ($state) => {
  if (loadingData || paginate.page >= paginate.pageCount) {
    return false;
  }
  const data = { pagination: {} };
  data["pagination"] = { ...paginate.value };
  data.pagination.page++;
  loadingData = true;
  try {
    await clientCar.indexCar(data);
    if (paginate.page < paginate.pageCount) {
      $state.loaded();
    } else {
      $state.complete();
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
    <ClientCarFilter :tab="tab" />
    <v-card dir="rtl" 
    :title="$route.meta.title"
    :subtitle="$route.name"
    prepend-icon="mdi-car"
    >
      <v-tabs v-model="tab" color="secondary" fixed-tabs>
        <v-tab value="one">خودرو های فعال</v-tab>
        <v-tab value="two">خودرو های حذف شده</v-tab>
        
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="two">
            <infinite-scroll @infinite-scroll="infiniteCar">
              <ClientCarItem
                v-for="clientCar of getClientCars"
                :key="clientCar.id"
                :client-car="clientCar"
                :archived="true"
              />
            </infinite-scroll>
          </v-window-item>
          <v-window-item value="one">
            <infinite-scroll @infinite-scroll="infiniteCar">
              <ClientCarItem
                v-for="clientCar of getClientCars"
                :key="clientCar.id"
                :client-car="clientCar"
                @showDeleteModal="deleteConfirm = true"
                @showCommentsModal="commentsModal = true"
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
    <clientCarStatus />
    <AcceptCarArchive
      :dialog="deleteConfirm"
      @toggleModal="deleteConfirm = false"
    />
    <ClientCarComments
      :dialog="commentsModal"
      @toggle-modal="commentsModal = false"
    />
    <EvaluationInfo />
  </div>
</template>
