<template>
    <div class="item" @click="rentCarDetail">
        <v-row>
            <v-col class="d-none d-sm-none d-md-none d-lg-block" cols="2">
                <img
                    class="Car-Img"
                    :src="car.thumbnail ? car.thumbnail : car.car.thumbnail"
                    alt=""
                />
            </v-col>
            <v-col md="4" lg="4" sm="9" cols="9">
                <h1 class="infoPr">{{ car.name_fa }}</h1>
                <h1 class="infoEn">{{ car.name_en }}</h1>
            </v-col>
            <v-col class="d-none d-sm-none d-md-none d-lg-block" cols="3">
                <third-number-title class="Satisfaction" :number="car.avg_vote" des="درصد رضایت"/>
            </v-col>
            <v-col sm="1" cols="3">
                <Price class="d-none d-sm-none d-md-none d-lg-block" :price="car.rent_cost"/>
                <Button @click.native.stop="checkForReserve()" icon="WMi-ok" color="#32cad5" class="ok-button"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Price from "../Global/Price/Price";
import Button from "../Global/Buttons/circle";
import Owner from "../Global/Owner-Info/Owner-Info";
import Status from "@/components/CarRent/rentCarStatus/Status";
import Owner1 from "../Global/Owner-Info/Owner";
import ThirdNumberTitle from "../Global/Number-Title/Third-Number-Title";

export default {
    components: {
        ThirdNumberTitle,
        Status,
        Price,
        Button,
        Owner,
        Owner1,
    },
    props: {
        car: {
            type: Object,
        },
    },
    methods: {
        checkForReserve(){
            if(localStorage.getItem("access_token")){
                this.$_toggleModal('NewPublicRequest',this.car)
            } else{
                this.$_toggleModal('login')
            }
        },
        rentCarDetail() {
            if(localStorage.getItem("access_token")) {
                this.$_toggleModal('rentCarDetails', this.car.id);
            } else{
                this.$_toggleModal('login')
            }
        }
    }



};
</script>
<style scoped>
.ok-button {
    position: absolute;
    top: 33%;
    left: 4%;
}

.item {
    position: relative;
    direction: rtl;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    width: 95%;
    height: 130px;
    border: 1px rgb(214, 214, 214) solid;
    border-radius: 6px;
    transition: 0.2s;
}
.infobar {
    margin: 1.35% 40px;
}
.infoPr {
    font-family: "yekan_light";
}
.infoEn {
    font-family: "monserat_medium";
    font-weight: 100;
    letter-spacing: 10px;
    font-size: 14px;
    color: gray;
}

.item:hover {
    border: 1px solid #6d6d6d;
    border-radius: 5px;
}

.Satisfaction {
    position: absolute;
    top: 10%;
    right: 35%;
}
.Car-Img{
    height:105px
}
</style>
