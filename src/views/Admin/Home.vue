<template>
    <v-container>
        <v-row>
            <v-col class="pa-0 ma-0" cols="12" lg="4" xl="4">
                <router-link to="/admin/Cars">
                    <icon-tiles TitleFa="خـــــودرو ها" TitleEn="AUTOMOBILES" GradientDirection="to right"
                        GradientBegin="fef5f6" GradientEnd="fef5f6" QuantityColor="ee3552" Iconcolor="#ee3552"
                        icon=" WMi-Vehicle" height="330px" border="1px solid #fbd7dc" Fa_title_color="#ee3552" />
                </router-link>
            </v-col>

            <v-col class="pa-0 ma-0" cols="12" lg="8" xl="8">
                <router-link to="/admin/Car-List">
                    <icon-tiles TitleFa="خـــــودرو های اجاره ای" TitleEn="RENTABLES" GradientDirection="to right"
                        GradientBegin="eeeeee" GradientEnd="dadada" icon=" WMi-clock-1" height="330px"
                        border="1px solid #d7d7d7" :numberic="this.carsCount" DES="خودرو ثبت شده"
                        Fa_title_color="#686868" />
                </router-link>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="12" lg="8" class="pa-0 ma-0" xl="8">
                <router-link to="/admin/Requests">
                    <icon-tiles TitleFa="درخواست ها" TitleEn="REQUESTS" GradientDirection="to right"
                        GradientBegin="fff0e8" GradientEnd="fff0e8" icon=" WMi-clock-1" height="330px"
                        border="1px solid #ffceb5" :numberic="this.requestCount" DES="درخواست برای امروز"
                        QuantityColor="ee3552" Iconcolor="#fe6a1e" Fa_title_color="#fe6a1e" />
                </router-link>
            </v-col>
            <v-col class="pa-0 ma-0" cols="12" lg="4" xl="4">
                <router-link to="/admin/Users">
                    <icon-tiles TitleFa="کاربران" TitleEn="USERS" GradientDirection="to right" GradientBegin="eafafb"
                        GradientEnd="eafafb" QuantityColor="ee3552" Iconcolor="#32cad5" icon=" WMi-user" height="330px"
                        border="1px solid #b6ecf0" Fa_title_color="#32cad5" />
                </router-link>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-0 ma-0" cols="12" lg="8" xl="8">
                <router-link to="/admin/Transaction">
                    <icon-tiles TitleFa="پنل تراکنش ها" TitleEn="TRANSACTION" GradientDirection="to right"
                        GradientBegin="b0dfff" GradientEnd="b0dfff" icon=" WMi-cash" height="330px"
                        border="1px solid #5ab2ed" QuantityColor="white" Iconcolor="#5ab2ed" Fa_title_color="#5ab2ed" />
                </router-link>
            </v-col>
            <v-col class="pa-0 ma-0" cols="12" lg="4" xl="4">
                <router-link to="/admin/sms-management">
                    <icon-tiles TitleFa="مدیریت پیامک ها" TitleEn="SMS " GradientDirection="to right"
                        GradientBegin="fff9f8" GradientEnd="fff9f8" icon=" WMi-chat-alt" height="330px"
                        border="1px solid #FF6B57" QuantityColor="white" Iconcolor="#FF6B57" Fa_title_color="#FF6B57" />
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import IconTiles from '@components/Global/Tiles/IconTiles.vue'
export default {
    name: 'Home',
    components: {
        IconTiles
    },
    methods: {
        ...mapActions("Dashboard", ["loadCarsCount"]),
        ...mapActions("Dashboard", ["loadRequestsCount"]),
    },
    mounted() {
        this.loadCarsCount();
        this.loadRequestsCount();
    },
    computed: {
        ...mapGetters("Dashboard", ["carsCount"]),
        ...mapGetters("Dashboard", ["requestCount"]),
    },
}
import { mapActions, mapGetters } from "vuex"
</script>
