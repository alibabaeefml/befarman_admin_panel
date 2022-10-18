<script setup>
import ClientCarItem from "@components/ClientCar/ClientCarItem.vue";
import AcceptCarArchive from "@components/ClientCar/AcceptCarArchive.vue";
import { ref } from "vue";
import ClientCarFilter from "@components/ClientCar/ClientCarFilter.vue";
import ClientCarComments from "@components/ClientCar/ClientCarComments.vue";

const statuses = [
  { name: "در دسترس", color: "green" },
  { name: "نا مشخص", color: "orange" },
  { name: "خارج از دسترس", color: "red" },
  { name: "اجاره شده", color: "rgb(50, 202, 213)" },
];
const tab = ref("one");
const getRentCars = ref([
  {
    id: 31164661,
    thumb: "/src/assets/Images/bmw_x6.jpg",
    pName: "بی ام و ایکس 6",
    eName: "BMW X6",
    status: { name: "در دسترس", color: "green" },
    user: {
      name: "کاربر",
      number: "09000000000",
    },
    cost: 1500000,
  },
  {
    id: 31164661,
    thumb: "/src/assets/Images/bmw_x6.jpg",
    pName: "بی ام و ایکس 6",
    eName: "BMW X6",
    status: { name: "خارج از دسترس", color: "red" },
    user: {
      name: "کاربر",
      number: "09000000000",
    },
    cost: 1500000,
  },
  {
    id: 31164661,
    thumb: "/src/assets/Images/bmw_x6.jpg",
    pName: "بی ام و ایکس 6",
    eName: "BMW X6",
    status: { name: "اجاره شده", color: "rgb(50, 202, 213)" },
    user: {
      name: "کاربر",
      number: "09000000000",
    },
    cost: 1500000,
  },
  {
    id: 31164661,
    thumb: "/src/assets/Images/bmw_x6.jpg",
    pName: "بی ام و ایکس 6",
    eName: "BMW X6",
    status: { name: "نا مشخص", color: "orange" },
    user: {
      name: "کاربر",
      number: "09000000000",
    },
    cost: 1500000,
  },
  {
    id: 31164661,
    thumb: "/src/assets/Images/bmw_x6.jpg",
    pName: "بی ام و ایکس 6",
    eName: "BMW X6",
    status: { name: "در دسترس", color: "green" },
    user: {
      name: "کاربر",
      number: "09000000000",
    },
    cost: 1500000,
  },
]);
const deleteConfirm = ref(false);
const commentsModal = ref(false);
</script>

<template>
  <div>
    <ClientCarFilter :tab="tab" :statuses="statuses" />
    <v-card>
      <v-tabs v-model="tab" color="secondary" fixed-tabs>
        <v-tab value="two">خودرو های حذف شده</v-tab>
        <v-tab value="one">خودرو های فعال</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="two">
            <client-car-item
              v-for="car of getRentCars"
              :key="car.id"
              :car="car"
              :statuses="statuses"
              :archived="true"
            >
            </client-car-item>
          </v-window-item>
          <v-window-item value="one">
            <client-car-item
              v-for="car of getRentCars"
              :key="car.id"
              :car="car"
              :statuses="statuses"
              @showDeleteModal="deleteConfirm = true"
              @showCommentsModal="commentsModal = true"
            >
            </client-car-item>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <router-link :to="{ name: 'ADD CLIENT CAR' }" class="link">
      <v-btn size="x-large" class="add-btn" icon color="secondary">
        <v-icon color="white">mdi-plus</v-icon>
      </v-btn>
    </router-link>
    <AcceptCarArchive
      :dialog="deleteConfirm"
      @toggleModal="deleteConfirm = false"
    />
    <ClientCarComments
      :dialog="commentsModal"
      @toggle-modal="commentsModal = false"
    />
  </div>
</template>
