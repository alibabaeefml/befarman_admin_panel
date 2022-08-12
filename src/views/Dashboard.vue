<script setup>
import BaseTileItem from '@components/Global/Tiles/BaseTileItem.vue';
</script>

<template>
    <v-container dir="rtl">
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="5" xl="4">
                <router-link class="link" :to="{name: 'cars'}">
                    <BaseTileItem color="pink lighten" icon="car" txt="خـــــودرو ها" sub="ALL CARS"
                        :badge-txt="'1k خودرو'" />
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" :to="{name: 'clientCars'}">
                    <BaseTileItem color="grey lighten" icon="clock" txt="خـــــودرو های اجاره ای" sub="RENTABLES"
                        :badge-txt="'500 خودرو'" />
                </router-link>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" :to="{name: 'requests'}">
                    <BaseTileItem color="orange lighten" icon="account-question" txt="درخواست ها" sub="REQUESTS"
                        :badge-txt="'3k درخواست'" />
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="5" xl="4">
                <router-link class="link" :to="{name: 'users'}">
                    <BaseTileItem color="cyan lighten" icon="account-group" txt="کاربران" sub="USERS"
                        :badge-txt="'3k کاربر'" />
                </router-link>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" :to="{name: 'transactions'}">
                    <BaseTileItem color="blue lighten" icon="cash" txt="پنل تراکنش ها" sub="TRANSACTIONS"
                        :badge-txt="'3k تراکنش'" />
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="5" xl="4">
                <router-link class="link" :to="{name: 'smsManagement'}">
                    <BaseTileItem color="red lighten" icon="message-text" txt="مدیریت پیامک ها" sub="SMS"
                        :badge-txt="'3k پیامک'" />
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>