<script setup>
import { computed } from '@vue/runtime-core'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import TileItem from '../../components/Global/Tiles/Tile-Item.vue';
const sm = computed(() => useDisplay().width.value < 800)
</script>

<template>
    <v-container dir="rtl">
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="5" xl="4">
                <router-link class="link" to="/Admin/Cars">
                    <tile-item color="pink lighten" icon="car" txt="خـــــودرو ها" sub="ALL CARS"
                        :badge-txt="'1k خودرو'"></tile-item>
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" to="/Admin/Rental-Cars">
                    <tile-item color="grey lighten" icon="clock" txt="خـــــودرو های اجاره ای" sub="RENTABLES"
                        :badge-txt="'500 خودرو'"></tile-item>
                </router-link>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" to="/Admin/Requests">
                    <tile-item color="orange lighten" icon="account-question" txt="درخواست ها" sub="REQUESTS"
                        :badge-txt="'3k درخواست'"></tile-item>
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="5" xl="4">
                <router-link class="link" to="/Admin/Users">
                    <tile-item color="cyan lighten" icon="account-group" txt="کاربران" sub="USERS"
                        :badge-txt="'3k کاربر'"></tile-item>
                </router-link>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" to="/Admin/Transactions">
                    <tile-item color="blue lighten" icon="cash" txt="پنل تراکنش ها" sub="TRANSACTIONS"
                        :badge-txt="'3k تراکنش'"></tile-item>
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="5" xl="4">
                <router-link class="link" to="/Admin/Sms-Management">
                    <tile-item color="red lighten" icon="message-text" txt="مدیریت پیامک ها" sub="SMS"
                        :badge-txt="'3k پیامک'"></tile-item>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>