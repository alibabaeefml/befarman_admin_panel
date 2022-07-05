<script setup>
// import Login from "../Auth/Login";
// import PersianDate from "../Global/PersianDate";
// import { mapActions, mapGetters, mapMutations } from "vuex";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
const date = ref(new Date().toISOString().substr(0, 10))
const menu = ref(false)
const modal = ref(false)
const menu2 = ref(false)
const states = ref(["پراید", "پژو"])
const filters = ref({
    begin_date: null,
    end_date: null,
    name: null,
})

onMounted(()=>{
    const date1 = new Date(filters.begin_date);
    const date2 = new Date(filters.end_date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
})

//     computed: {
//         ...mapGetters("RentCarsPublic", ["getRentCarsSearchResultsPublic"]),
//     },
// methods: {
//         ...mapActions("RentCarsPublic", ["setRentCarsPublic"]),
//         ...mapMutations("RentCarsPublic", ["SET_RENT_CARS_FILTERS_PUBLIC"]),
//         async filterCars() {
//         this.SET_RENT_CARS_FILTERS_PUBLIC(this.filters);
//         const response = await this.setRentCarsPublic();
//         if (response && response.status == 200) {
//             this.$emit("scrollToResults");
//         }
//     },
// },
// mounted() {
    
// }

</script>
<template>
    <div class="Header">
        <div class="quick">
            <v-row>
                <v-col xl="2" lg="3" md="3" cols="12">
                    <v-icon class="login_icon" id="home_icon"> WMi-Vehicle</v-icon>
                </v-col>
                <v-col xl="10" lg="9" md="9" cols="12" style="padding-right: 3%">
                    <h1 class="filter_pr">به دنبال چه نوع خودرویی هستید؟</h1>
                    <h1 class="filter_en">?LOOKING FOR SOMETHING</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <persian-date dark color-date="black" color="white" label="تاریخ شروع"
                        v-model="filters.begin_date" />
                </v-col>
                <v-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <persian-date dark color-date="black" color="white" label="تاریخ پایان"
                        v-model="filters.end_date" />
                </v-col>
                <v-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <BaseAutoComplete url="RentCarsPublic/searchCarsPublic" v-slot="{ filter }">
                        <v-autocomplete v-model="filters.name" class="pt-5" :items="getRentCarsSearchResultsPublic"
                            item-text="name" item-value="name" :chips="false" dark dense label="مدل خودرو"
                            prepend-icon=" WMi-car-side" @keydown="filter" no-data-text="خودرو مورد نظر را جستجو کنید.">
                        </v-autocomplete>
                    </BaseAutoComplete>
                </v-col>
                <v-col class="search" xl="3" lg="3" md="3" sm="12" cols="12">
                    <v-btn xl="3" lg="3" md="3" sm="12" cols="12" style="background-color: white" color="black"
                        elevation="2" fab icon x-large @click="filterCars">
                        <v-icon> WMi-search</v-icon>
                    </v-btn>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </div>
    </div>
</template>


<style scoped>
/* 
* {
    color: #ffffff;
    font-family: yekan_light;
}

.Header {
    height: 900px;
    background-image: url("./Header.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.Head {
    width: 100%;
    background-color: rgba(24, 23, 23, 0.603);
    height: 110px;
    padding: 20px 30px;
    font-family: "monserat_medium";
}

.inputs {
    position: relative;
    top: 35%;
    direction: rtl;
}

.search {
    color: black !important;
    padding-right: 10%;
}

.title {
    padding-top: 1%;
    padding-left: 0.5%;
    font-family: "monserat_medium";
    font-weight: 100;
}

.Header li {
    font-family: "yekan_medium";
    display: inline-block;
    margin: 10px;
    color: #fff;
}

.Header ul {
    position: absolute;
    top: 2%;
    right: 1%;
    direction: rtl;
}

.quick {
    width: 100%;
    background-color: rgba(24, 23, 23, 0.603);
    height: 300px;
    padding: 20px 30px;
    font-family: "monserat_medium";
    position: relative;
    top: 25%;
}

.login_icon {
    font-size: 60px;
    position: absolute;
    float: right;
    right: 15%;
    color: #fff;
}

.filter_pr {
    font-size: 28px;
}

.filter_en {
    font-weight: 100;
    font-size: 18px;
    letter-spacing: 15px;
} */
</style>
