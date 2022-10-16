<script setup lang="ts">
import CarItem from "@components/Car/CarItem.vue"
import AddCar from "@components/Car/AddCar.vue";
import CarsFilter from "@components/Car/CarFilter.vue";
import { useCar } from "@/composables/car/car";
import InfiniteScroll from "infinite-loading-vue3";

const { indexCar, getCars, paginate } = useCar();
indexCar()

let loadingData = false
const infiniteCar = async ($state) => {
  if (loadingData || paginate.page >= paginate.pageCount) {
    return false;
  }
  const data = {pagination: {}}
  data['pagination'] = {...paginate.value}
  data.pagination.page++
  loadingData = true
  try {
    await indexCar(data)
    if (paginate.page < paginate.pageCount) {
      $state.loaded();
    } else {
      $state.complete();
    }
  } catch (e) {

  } finally {
    loadingData = false
  }
}

</script>
<template>
    <div dir="rtl">
        <CarsFilter />
        <infinite-scroll class="v-row" style="padding:20px" @infinite-scroll="infiniteCar" >
          <CarItem v-for="car in getCars" :key="car.id" :car="car" />
        </infinite-scroll>
        <v-btn size="x-large" class="add-btn" @click="$_openModal('add-car')" icon color="secondary">
            <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
        <AddCar />
    </div>
</template>
