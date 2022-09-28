<script setup lang="ts">
import CarItem from "@components/Car/CarItem.vue"
import AddCar from "@components/Car/AddCar.vue";
import CarsFilter from "@components/Car/CarFilter.vue";
import { useCar } from "@/composables/car/car"
import InfiniteScroll from "infinite-loading-vue3";
const { indexCar, getCars, infiniteCar } = useCar()
indexCar()

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
