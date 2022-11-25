<script setup>
import CarItem from "@components/Car/CarItem.vue";
import AddCar from "@components/Car/AddCar.vue";
import CarsFilter from "@components/Car/CarFilter.vue";
import { useCar } from "@/composables/car/car";
import { ref } from "vue";
import InfiniteScroll from "infinite-loading-vue3";
const { indexCar, getCars, paginate } = useCar();
const filters = ref({});
indexCar();

const noResult = ref(false);
let loadingData = false;
const infiniteCar = async () => {
  if (loadingData || paginate.value.page >= paginate.value.pageCount) {
    noResult.value = true;
    return true;
  }
  const data = { pagination: {} };
  data["pagination"] = { ...paginate.value };
  data.pagination.page++;
  loadingData = true;
  try {
    await indexCar(data);
  } catch (e) {
    console.log(e);
  } finally {
    loadingData = false;
  }
};
</script>
<template>
  <div dir="rtl">
    <CarsFilter :filters="filters" />
    <infinite-scroll
      @infinite-scroll="infiniteCar"
      :noResult="noResult"
      class="v-row ma-4"
    >
      <CarItem v-for="car in getCars" :key="car.id" :car="car" />
    </infinite-scroll>
    <v-btn
      size="x-large"
      class="add-btn position-fixed"
      @click="$_openModal('add-car')"
      icon
      color="secondary"
    >
      <v-icon color="white">mdi-plus</v-icon>
    </v-btn>
    <AddCar />
  </div>
</template>
