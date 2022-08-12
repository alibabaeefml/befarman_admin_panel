<script setup>
import CarItem from "@components/Car/CarItem.vue"
import { ref } from "@vue/runtime-core";
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
const addModal = ref(false);
const isAdd = ref('')
const nameFilter = ref('');
const brandFilter = ref('');
</script>
<template>
    <div dir="rtl">
        <cars-filter></cars-filter>
        <AddCar :dialog="addModal" @toggleModal="addModal = false" :add="isAdd" />
        <v-row style="padding:20px">
            <CarItem v-for="car in getCars" :key="car.id" :data="car" @toggleModal="addModal = true; isAdd = false" />
        </v-row>
        <v-btn size="x-large" class="add-btn" icon color="secondary" @click="addModal = true; isAdd = true">
            <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
    </div>
</template>
