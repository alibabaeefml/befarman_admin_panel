<script setup lang="ts">
import { ref } from "vue";
import RequestItem from "@components/Request/RequestItem.vue";
import RequestFilter from "@components/Request/RequestFilter.vue";
import RequestAdd from "@components/Request/RequestAdd.vue";
import AcceptReqDelete from "@components/Request/AcceptReqDelete.vue";

import repository from "@/abstraction/repositories/clientCarRequestRepository";
const register = async () => {
  await new repository().register({
  client_car_id: 302,
  start_delivery_place: "خیابان اقاقیا 2",
  end_delivery_place: "خیابان اقاقیا",
  start_at: "2023-01-25 10:10:00",
  end_at: "2023-02-02 10:10:00",
  insurance_type_id: 1,
  additional_driver: 1,
  airport_charge: 1,
  delivery_at_location: 1,
  delivery_at_the_place_of_return: 1,
  one_way_road: 1,
});
}
const tab = ref("one");
const addModal = ref(false);
const deleteConfirm = ref(false);
</script>
<template>
  <v-btn @click="register">register request</v-btn>
  <RequestFilter />
  <v-card>
    <v-tabs v-model="tab" color="secondary" fixed-tabs>
      <v-tab value="two">درخواست های حذف شده</v-tab>
      <v-tab value="one">درخواست های فعال</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="two">
          <RequestItem
            v-for="request of 5"
            :key="request.id"
            :request="request"
            :archived="true"
          />
        </v-window-item>
        <v-window-item value="one">
          <RequestItem
            v-for="request of 5"
            :key="request.id"
            :request="request"
            @editModal="addModal = true"
            @deleteModal="deleteConfirm = true"
          />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  <v-btn
    size="x-large"
    class="add-btn"
    icon
    color="secondary"
    @click="addModal = true"
  >
    <v-icon color="white">mdi-plus</v-icon>
  </v-btn>
  <RequestAdd :dialog="addModal" @toggle-modal="addModal = false" />
  <AcceptReqDelete
    :dialog="deleteConfirm"
    @toggle-modal="deleteConfirm = false"
  />
</template>
