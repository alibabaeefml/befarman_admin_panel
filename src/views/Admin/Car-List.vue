
<script setup>
import RentalCars from '@components/Car-Rent/Rental-Car-Item.vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import AcceptCarArchive from '@components/Car-Rent/Accept-Car-Archive.vue';
import { computed, ref } from '@vue/runtime-core';
import RentalCarsFilter from '@components/Car-Rent/Rental-Cars-Filter.vue';

const statuses = [
    { name: 'در دسترس', color: 'green' },
    { name: 'نا مشخص', color: 'orange' },
    { name: 'خارج از دسترس', color: 'red' },
    { name: 'اجاره شده', color: 'rgb(50, 202, 213)' }
]
const tab = ref('one');
const getRentCars = ref([
    {
        id: 31164661,
        thumb: '/src/assets/Images/bmw_x6.jpg',
        pName: 'بی ام و ایکس 6',
        eName: 'BMW X6',
        status: { name: 'در دسترس', color: 'green' },
        user: {
            name: 'کاربر',
            number: '09000000000',
        },
        cost: 1500000,
    },
    {
        id: 31164661,
        thumb: '/src/assets/Images/bmw_x6.jpg',
        pName: 'بی ام و ایکس 6',
        eName: 'BMW X6',
        status: { name: 'خارج از دسترس', color: 'red' },
        user: {
            name: 'کاربر',
            number: '09000000000',
        },
        cost: 1500000,
    },
    {
        id: 31164661,
        thumb: '/src/assets/Images/bmw_x6.jpg',
        pName: 'بی ام و ایکس 6',
        eName: 'BMW X6',
        status: { name: 'اجاره شده', color: 'rgb(50, 202, 213)' },
        user: {
            name: 'کاربر',
            number: '09000000000',
        },
        cost: 1500000,
    },
    {
        id: 31164661,
        thumb: '/src/assets/Images/bmw_x6.jpg',
        pName: 'بی ام و ایکس 6',
        eName: 'BMW X6',
        status: { name: 'نا مشخص', color: 'orange' },
        user: {
            name: 'کاربر',
            number: '09000000000',
        },
        cost: 1500000,
    },
    {
        id: 31164661,
        thumb: '/src/assets/Images/bmw_x6.jpg',
        pName: 'بی ام و ایکس 6',
        eName: 'BMW X6',
        status: { name: 'در دسترس', color: 'green' },
        user: {
            name: 'کاربر',
            number: '09000000000',
        },
        cost: 1500000,
    },
])
const DeleteConfirm = ref(false)
const xs = computed(() => useDisplay().xs.value)
</script>

<template>
    <div>
        <rental-cars-filter :tab="tab" :statuses="statuses"></rental-cars-filter>
        <v-card :class="{ 'ma-4': !!xs }">
            <v-tabs v-model="tab" color="secondary" fixed-tabs>
                <v-tab value="two">خودرو های حذف شده</v-tab>
                <v-tab value="one">خودرو های های فعال</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="two">
                        <RentalCars v-for="car of getRentCars" :key="car.id" :car="car" :statuses="statuses"
                            :archived="true">
                        </RentalCars>
                    </v-window-item>
                    <v-window-item value="one">
                        <RentalCars v-for="car of getRentCars" :key="car.id" :car="car" :statuses="statuses"
                            @showDeleteModal="DeleteConfirm = !DeleteConfirm">
                        </RentalCars>
                    </v-window-item>

                </v-window>
            </v-card-text>
        </v-card>
        <router-link to="/Admin/Add-Rent-Car" class="link">
            <v-btn size="x-large" class="add-btn" icon color="secondary" @click="addModal = true; isAdd = true">
                <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
        </router-link>
        <AcceptCarArchive :dialog="DeleteConfirm" @toggleModal="DeleteConfirm = false"></AcceptCarArchive>
        <!-- <CommentList v-if="$_isOpen('commentList')" />
        <carDetails v-if="$_isOpen('rentCarDetails')" />
        <change-time /> -->
    </div>
</template>