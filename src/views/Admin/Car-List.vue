
<script setup>
import RentalCarItem from '@components/Car-Rent/Rental-Car-Item.vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import AcceptCarArchive from '@components/Car-Rent/Accept-Car-Archive.vue';
import { ref } from '@vue/runtime-core';
import RentalCarsFilter from '@components/Car-Rent/Rental-Cars-Filter.vue';
import RentalCarComments from '../../components/Car-Rent/Rental-Car-Comments.vue';

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
]);
const deleteConfirm = ref(false);
const commentsModal = ref(false);
</script>

<template>
    <div>
        <rental-cars-filter :tab="tab" :statuses="statuses"></rental-cars-filter>
        <v-card>
            <v-tabs v-model="tab" color="secondary" fixed-tabs>
                <v-tab value="two">خودرو های حذف شده</v-tab>
                <v-tab value="one">خودرو های فعال</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="two">
                        <RentalCarItem v-for="car of getRentCars" :key="car.id" :car="car" :statuses="statuses"
                            :archived="true">
                        </RentalCarItem>
                    </v-window-item>
                    <v-window-item value="one">
                        <RentalCarItem v-for="car of getRentCars" :key="car.id" :car="car" :statuses="statuses"
                            @showDeleteModal="deleteConfirm = true" @showCommentsModal="commentsModal = true">
                        </RentalCarItem>
                    </v-window-item>

                </v-window>
            </v-card-text>
        </v-card>
        <router-link to="/Admin/Add-Rent-Car" class="link">
            <v-btn size="x-large" class="add-btn" icon color="secondary">
                <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
        </router-link>
        <AcceptCarArchive :dialog="deleteConfirm" @toggleModal="deleteConfirm = false"></AcceptCarArchive>
        <RentalCarComments :dialog="commentsModal" @toggle-modal="commentsModal = false"></RentalCarComments>
    </div>
</template>