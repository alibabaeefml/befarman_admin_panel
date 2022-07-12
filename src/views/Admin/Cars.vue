<template>
    <div class="rtlDirection">
        <add-car/>
        <edit-car/>
        <v-btn
            fab
            fixed
            bottom
            left
            x-large
            Icon
            color="#32cad5"
            @click="$_toggleModal('add-car')"
        >
            <v-icon color="white">WMi-plus</v-icon>
        </v-btn>
    <car-filter/>
        <v-row class="rowClass">
        <Automobile v-for="automobile in getAutomobile" :key="automobile.id" :data="automobile"/>
        </v-row>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
import CarFilter from "../../components/Car/CarFilter"
import Automobile from "../../components/Car/Automobile"
import AddCar from "../../components/Car/AddCar"
import editCar from "../../components/Car/editCar";
export default {
    name:"Cars",
    components:{
        editCar,
        CarFilter,
        Automobile,
        AddCar
    },
    methods:{
      ...mapActions("Cars",["loadAutomobile"])
    },
    mounted() {
    this.loadAutomobile()
    },
    computed:{
    ...mapGetters("Cars",["getAutomobile"])
    }
}
</script>
<style scoped>
.rtlDirection{
    direction: rtl
}
.rowClass{
    margin: 0px .7%
}
</style>
