<script setup lang="ts">
import { onMounted } from "vue";
import CarItem from "@components/Car/CarItem.vue"
import AddCar from "@components/Car/AddCar.vue";
import CarsFilter from "@components/Car/CarFilter.vue";
import { useCar } from "@/composables/car/car"

const { getCars, indexCar } = useCar();

indexCar()

</script>
<template>
    <div dir="rtl">
        <CarsFilter />
        <v-row style="padding:20px">
            <CarItem v-for="car in getCars" :key="car.id" :car="car" />
        </v-row>
        <v-btn size="x-large" class="add-btn" @click="$_openModal('add-car')" icon color="secondary">
            <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
        <AddCar />
    </div>
</template>
