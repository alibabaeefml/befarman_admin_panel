<script setup>
import { ref } from "@vue/runtime-core";
import CarItem from "@components/Car/CarItem.vue"
import AddCar from "@components/Car/AddCar.vue";
import CarsFilter from "@components/Car/CarFilter.vue";
const getCars = ref([
    {
        id: 'jldv554',
        pName: 'پراید',
        eName: 'Pride',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'dkdvmdv5',
        pName: 'سمند',
        eName: 'Samand',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'jldv554',
        pName: 'پراید',
        eName: 'Pride',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'dkdvmdv5',
        pName: 'سمند',
        eName: 'Samand',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'jldv554',
        pName: 'پراید',
        eName: 'Pride',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'dkdvmdv5',
        pName: 'سمند',
        eName: 'Samand',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'jldv554',
        pName: 'پراید',
        eName: 'Pride',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'dkdvmdv5',
        pName: 'سمند',
        eName: 'Samand',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'jldv554',
        pName: 'پراید',
        eName: 'Pride',
        thumb: '',
        brand: 'bmw'
    },
    {
        id: 'dkdvmdv5',
        pName: 'سمند',
        eName: 'Samand',
        thumb: '',
        brand: 'kia'
    },
    {
        id: 'jldv554',
        pName: 'پراید',
        eName: 'Pride',
        thumb: '',
        brand: 'bmw'
    },
    {
        id: 'dkdvmdv5',
        pName: 'سمند',
        eName: 'Samand',
        thumb: '',
        brand: 'kia'
    },
])
</script>
<template>
    <div dir="rtl">
        <CarsFilter />
        <v-row style="padding:20px">
            <CarItem v-for="car in getCars" :key="car.id" :data="car" />
        </v-row>
        <v-btn size="x-large" class="add-btn" @click="$_openModal('add-car', {name_en: 'saeid'})" icon color="secondary">
            <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
        <AddCar />
    </div>
</template>
