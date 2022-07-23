
<script setup>
import Filters from '@components/Global/Filters/Filters.vue';
import AddCar from "@components/CarRent/AddRentCar.vue";
import AddBtn from '@components/Global/Buttons/AddBtn.vue';
import { ref } from '@vue/reactivity';

const addCarModal = ref(false);
    // import Items from "@Components/CarRent/Items";
    // import CarFilter from "@Components/Global/CarFilter/CarFilter";
    // import CommentList from "@Components/Comment/CommentListModal";
    // import carDetails from "@Components/CarRent/Details";
    // import ChangeTime from "@Components/CarRent/ChangeTime";
    // import {mapActions, mapGetters, mapMutations} from "vuex";
    // import OrderAlert from "../../components/CarRent/OrderAlert";
    // import StatusModal from "@/components/CarRent/rentCarStatus/RentableCarStatus";
    // import AcceptCarDelete from "../../components/CarRent/AcceptCarDelete";

    // export default {
    //     name: "Car-list",
    //     components: {
    //         AcceptCarDelete,
    //         OrderAlert,
    //         AddCar,
    //         CommentList,
    //         CarFilter,
    //         Items,
    //         carDetails,
    //         ChangeTime,
    //         StatusModal,
    //     },
    //     data() {
    //         return {
    //             page: 0,
    //             archivePage: 0,
    //             tab: 0
    //         };
    //     },
    //     methods: {
    //         ...mapActions("RentCars", ["loadCars", "loadArchiveCars", "setRentCarsStatuses"]),
    //         ...mapMutations("RentCars", ["RESET_RENTABLE_CAR", "SET_RENT_CARS_EMPTY", "RESET_ARCHIVE_RENTABLE_CAR"]),
    //         async infiniteHandler($state) {

    //             this.SET_RENT_CARS_EMPTY()
    //             const response = await this.loadCars(this.page + 1);
    //             if (response.status === 200) {
    //                 if (response.data.meta.current_page < response.data.meta.last_page) {
    //                     this.page = response.data.meta.current_page;
    //                     $state.loaded();
    //                 } else {
    //                     $state.complete();
    //                 }
    //             }
    //         },
    //         async archiveInfiniteHandler($state) {
    //             const response = await this.loadArchiveCars(this.archivePage + 1);
    //             if (response.status === 200) {
    //                 if (response.data.meta.current_page < response.data.meta.last_page) {
    //                     this.archivePage = response.data.meta.current_page;
    //                     $state.loaded();
    //                 } else {
    //                     $state.complete();
    //                 }
    //             }
    //         },
    //     },
    //     computed: {
    //         ...mapGetters("RentCars", ["getRentCars", "getArchiveRentCars"]),
    //     },
    //     beforeMount() {
    //         this.RESET_RENTABLE_CAR()
    //         this.RESET_ARCHIVE_RENTABLE_CAR()
    //     },
    //     created() {
    //         this.setRentCarsStatuses();
    //     },
    // };
</script>

<template>
    <div>
        <Filters>
            <!-- <v-text-field></v-text-field> -->
        </Filters>
        <v-card class="my-2 mx-12">
            <v-tabs v-model="tab" center-active fixed-tabs>
                <v-tab>خودرو های های فعال</v-tab>
                <v-tab>خودرو های حذف شده</v-tab>
            </v-tabs>
        </v-card>
        <!-- <v-tabs-items v-model="tab">
            <v-tab-item>
                <items v-for="car of getRentCars" :key="car.id" :car="car"/>
                <infinite-loading @infinite="infiniteHandler" />
            </v-tab-item>
            <v-tab-item>
                <items v-for="archiveCar of getArchiveRentCars" :show-actions="false" :key="archiveCar.id" :car="archiveCar"/>
                <infinite-loading @infinite="archiveInfiniteHandler" />
            </v-tab-item>
        </v-tabs-items> -->

        <AddBtn @click="addCarModal = true"></AddBtn>
        <add-car :dialog=addCarModal @toggleModal="addCarModal=false"/>
        <!-- <CommentList v-if="$_isOpen('commentList')" />
        <carDetails v-if="$_isOpen('rentCarDetails')" />
        <change-time />
        <StatusModal />
        <accept-car-delete /> -->
    </div>
</template>