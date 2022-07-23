<script setup>
import Car from "../../components/Car/Car.vue"
import { computed, onMounted, ref } from "@vue/runtime-core";
import AddBtn from "@/components/Global/Buttons/addBtn.vue";
import AddCar from "../../components/Car/AddCar.vue";
import EditCar from "../../components/Car/EditCar.vue";
import Filters from "../../components/Global/Filters/Filters.vue";

// onMounted(() => useStore().dispatch("loadAutomobile"))
// const getAutomobile = computed(() => useStore().getters.getAutomobile)
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
const editModal = ref(false);

const nameFilter = ref('');
const brandFilter = ref('');
</script>
<template>
    <div class="cars">
        <filters style="margin-top:20px">
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-text-field v-model="nameFilter" prepend-icon="mdi-car" label="نام خوردرو" variant="underlined"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="brandFilter" prepend-icon="mdi-alpha-b-circle" label="نام برند" variant="underlined"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
        </filters>
        <add-car :dialog="addModal" @toggleModal="addModal = false"></add-car>
        <edit-car :dialog="editModal" @toggleModal="editModal = false"></edit-car>
        <!-- <edit-car /> -->
        <!-- <car-filter /> -->
        <v-row style="padding:20px">
            <car v-for="car in getCars" :key="car.id" :data="car" @toggleModal="editModal = true"/>
        </v-row>
        <add-btn @click="addModal = true"></add-btn>
    </div>


</template>

<style scoped>
.cars {
    direction: rtl;
}
</style>
