<template>
    <v-row style="padding-top: 30px">
        <add-new-request/>
        <order-alert/>
        <v-col cols="0" lg="2" xl="2" md="2">
            <div class="quick">
                <v-icon class="login_icon" id="searchicon" xl="2"> WMi-search</v-icon>
            </div>
        </v-col>
        <v-col cols="12" lg="10" xl="10" md="10">
            <div class="filterInfo">
                <h1 class="filter_pr">نتایج جستجو</h1>
                <h1 class="filter_en">SEARCH RESULTS</h1>
            </div>
        </v-col>
        <div
            style="width: 95%; margin-right: auto; margin-left: auto"
            v-if="getRentCarsPublic.length"
        >
            <div style="margin-top: 100px; margin-bottom: 20px">
                <search-item
                    v-for="car in getRentCarsPublic"
                    :key="car.id"
                    :car="car"
                />
            </div>
            <v-btn
                class="show-all-resault"
                block
                depressed
                elevation="3"
                x-large
            >
                <h2 style="color: black; width: 100%" @click="viewAllResults">
                    نمایش همه خودرو ها
                    <v-icon style="color: black; display: inline">
                        WMi-align-right
                    </v-icon
                    >
                </h2>
            </v-btn>
        </div>
        <div v-if="!getRentCarsPublic.length">هیچ خودرویی یافت نشد.</div>

    </v-row>
</template>

<script>
import SearchItem from "./SearchItem";
import AddNewRequest from "../public/AddNewRequest";
import {mapGetters, mapMutations} from "vuex";
import OrderAlert from "../CarRent/OrderAlert";

export default {
    name: "SearchResult",
    components: {OrderAlert, SearchItem,AddNewRequest},
    computed: {
        ...mapGetters("RentCarsPublic", ["getRentCarsPublic"]),
    },
    methods: {
        ...mapMutations("RentCarsPublic", ["RESET_RENT_CARS_PUBLIC"]),
        viewAllResults() {
            this.RESET_RENT_CARS_PUBLIC();
            this.$router.push({name: "AllCars"});
        },
    },
};
</script>

<style scoped lang="scss">
* {
    font-family: yekan_light;
}

.quick {
    color: black;
    width: 100%;
    height: 100px;
    font-family: "monserat_medium";
}

.login_icon {
    font-size: 60px;
    position: absolute;
    float: right;
    right: 5%;
    color: black;
}

.filterInfo {
    direction: rtl;
}

.filter_pr {
    font-size: 28px;
}

.filter_en {
    font-weight: 100;
    font-size: 18px;
    letter-spacing: 15px;
}

.show-all-resault {
    background-color: #eeeeee;
    margin-bottom: 30px
}
</style>
