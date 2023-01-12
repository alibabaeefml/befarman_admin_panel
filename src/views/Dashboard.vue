<script setup lang="ts">
import BaseTileItem from "@/components/Global/Tiles/BaseTileItem.vue";
import { useClientCar } from "@/composables/clientCar/clientCar";
import { ref } from "vue";
const clientCarTotal = ref();
async function getClientCarTotal() {
  clientCarTotal.value = await useClientCar().total();
}
getClientCarTotal();
</script>

<template>
  <v-container dir="rtl">
    <v-row no-gutters>
      <v-col class="" cols="12" lg="5" xl="4">
        <router-link class="link" :to="{ name: 'cars' }">
          <BaseTileItem
            background="#fef5f6"
            color="#ee3552"
            icon="car"
            txt="خـــــودرو ها"
            sub="ALL CARS"
            :badgeNo="'120'"
            :badge-txt="'خودرو'"
          />
        </router-link>
      </v-col>
      <v-col class="" cols="12" lg="7" xl="8">
        <router-link class="link" :to="{ name: 'clientCars' }">
          <BaseTileItem
            background="#dadada"
            color="#686868"
            icon="clock"
            txt="خـــــودرو های اجاره ای"
            sub="RENTABLES"
            :badgeNo="clientCarTotal"
            :badge-txt="'خودرو'"
          />
        </router-link>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="" cols="12" lg="7" xl="8">
        <router-link class="link" :to="{ name: 'requests' }">
          <BaseTileItem
            background="#fff0e8"
            color="#fe6a1e"
            icon="account-question"
            txt="درخواست ها"
            sub="REQUESTS"
            :badgeNo="'120'"
            :badge-txt="'درخواست'"
          />
        </router-link>
      </v-col>
      <v-col class="" cols="12" lg="5" xl="4">
        <router-link class="link" :to="{ name: 'users' }">
          <BaseTileItem
            background="#eafafb"
            color="#32cad5"
            icon="account-group"
            txt="کاربران"
            sub="USERS"
            :badgeNo="'120'"
            :badge-txt="'کاربر'"
          />
        </router-link>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="" cols="12" lg="5" xl="4">
        <router-link class="link" :to="{ name: 'smsManagement' }">
          <BaseTileItem
            background="#fff9f8"
            color="#ff6b57"
            icon="message-text"
            txt="مدیریت پیامک ها"
            sub="SMS"
            :badgeNo="'120'"
            :badge-txt="'پیامک'"
          />
        </router-link>
      </v-col>
      <v-col class="" cols="12" lg="7" xl="8">
        <router-link class="link" :to="{ name: 'transactions' }">
          <BaseTileItem
            background="#b0dfff"
            color="#5ab2ed"
            icon="cash"
            txt="پنل تراکنش ها"
            sub="TRANSACTIONS"
            :badgeNo="'120'"
            :badge-txt="'تراکنش'"
          />
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
