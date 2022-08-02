<script setup>
import Car from "../../components/Car/Car-Item.vue"
import { computed, onMounted, ref } from "@vue/runtime-core";
import AddCar from "../../components/Car/Add-Car.vue";
import Filters from "../../components/Global/Filters/Filters.vue";

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
    <div class="cars">
        <filters style="margin-top:20px">
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-text-field v-model="nameFilter" prepend-icon="mdi-car" label="نام خوردرو"
                            variant="underlined"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="brandFilter" prepend-icon="mdi-alpha-b-circle" label="نام برند"
                            variant="underlined"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
        </filters>
        <add-car :dialog="addModal" @toggleModal="addModal = false" :add="isAdd"></add-car>
        <v-row style="padding:20px">
            <car v-for="car in getCars" :key="car.id" :data="car" @toggleModal="addModal = true; isAdd = false" />
        </v-row>
        <v-btn size="x-large" class="add-btn" icon color="secondary" @click="addModal = true; isAdd = true">
            <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
    </div>


</template>

<style scoped>
.cars {
    direction: rtl;
}
</style>
