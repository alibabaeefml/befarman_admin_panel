<script setup>
import ClientCarItem from '@components/ClientCar/ClientCarItem.vue';
import AcceptCarArchive from '@components/ClientCar/AcceptCarArchive.vue';
import { ref } from '@vue/runtime-core';
import ClientCarFilter from '@components/ClientCar/ClientCarFilter.vue';
import ClientCarComments from '@components/ClientCar/ClientCarComments.vue';
import { useClientCar } from '@/composables/clientCar/clientCar';
import { storeToRefs } from "pinia/dist/pinia";
import InfiniteScroll from "infinite-loading-vue3";


useClientCar().indexCar();
const { getClientCars,paginate } = storeToRefs(useClientCar());

const tab = ref('one');
const deleteConfirm = ref(false);
const commentsModal = ref(false);


// infinite loading
let loadingData = false
const infiniteCar = async ($state) => {
    if (loadingData || paginate.page >= paginate.pageCount) {
        return false;
    }
    const data = { pagination: {} }
    data['pagination'] = { ...paginate.value }
    data.pagination.page++
    loadingData = true
    try {
        await useClientCar().indexCar(data)
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
    <div>
        <ClientCarFilter :tab="tab"/>
        <v-card>
            <v-tabs v-model="tab" color="secondary" fixed-tabs>
                <v-tab value="two">خودرو های حذف شده</v-tab>
                <v-tab value="one">خودرو های فعال</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="two">
                        <infinite-scroll @infinite-scroll="infiniteCar">
                            <client-car-item v-for="car of getClientCars" :key="car.id" :car="car" 
                                :archived="true">
                            </client-car-item>
                        </infinite-scroll>
                    </v-window-item>
                    <v-window-item value="one">
                        <infinite-scroll @infinite-scroll="infiniteCar">
                            <client-car-item v-for="car of getClientCars" :key="car.id" :car="car" 
                                @showDeleteModal="deleteConfirm = true" @showCommentsModal="commentsModal = true">
                            </client-car-item>
                        </infinite-scroll>
                    </v-window-item>

                </v-window>
            </v-card-text>
        </v-card>
        <router-link :to="{name:'ADD CLIENT CAR'}" class="link">
            <v-btn size="x-large" class="add-btn" icon color="secondary">
                <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
        </router-link>
        <AcceptCarArchive :dialog="deleteConfirm" @toggleModal="deleteConfirm = false" />
        <ClientCarComments :dialog="commentsModal" @toggle-modal="commentsModal = false" />
    </div>
</template>
