<script setup lang="ts">
import defaultThumb from "@/assets/Images/avatars/car-avatar.jpg";
import { ref } from "vue";
defineProps(["clientCarRequest", "archived"]);
const actionsGroup = ref(false);
</script>
<template>
  <div>
    <v-card class="border mt-3 text-center" min-height="300">
      <v-card-text dir="rtl" :class="{ym:true,blured: actionsGroup }">
        <v-row class="align-center">
          <v-col cols="12" md="3" xs="12">
            <v-img
              style="border-radius: 10px"
              :lazy-src="defaultThumb"
              :src="
                clientCarRequest.clientCar.thumbnail
                  ? clientCarRequest.clientCar.thumbnail
                  : defaultThumb
              "
              cover
            />
            <div
              class="mt-2 pa-2 curved"
              :style="{ background: 'green', color: 'white' }"
            >
              <v-icon size="large">mdi-account-check</v-icon>
              تایید توسط ادمین
            </div>
          </v-col>
          <v-col cols="12" md="1" sm="12">
            <div class="d-flex flex-column">
              <div class="peTitle">
                {{ clientCarRequest.clientCar.car.name_fa }}
              </div>
              <div class="enSub">
                {{ clientCarRequest.clientCar.car.name_en }}
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-row>
              <v-col cols="12" md="6">
                <div class="d-flex justify-center flex-column">
                  <div>اجاره دهنده</div>
                  <div class="peTitle">
                    {{ clientCarRequest.clientCar.user.name }}
                  </div>
                  <div class="enSub">
                    {{ clientCarRequest.clientCar.user.phone }}
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex justify-center flex-column">
                  <div>اجاره کننده</div>
                  <div class="peTitle">{{ clientCarRequest.user.name }}</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-row class="align-center">
              <v-col
                cols="12"
                md="6"
                class="d-flex justify-center align-center"
              >
                <div class="d-flex align-center" style="font-size: 20px">
                  <div class="ml-2 mb">
                    <h1
                      :style="{
                        fontSize: !$vuetify.display.sm ? '100px' : '50px',
                      }"
                    >
                      5
                    </h1>
                  </div>
                  <div class="yl" style="width: 90px">روز زمان درخواست</div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex flex-column" style="font-size: 20px">
                  <h2 class="mxb">150000</h2>
                  <h4 class="yl">هزینه روزانه - تومان</h4>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions style="position: absolute; bottom: 0">
        <v-btn color="primary" icon @click="actionsGroup = !actionsGroup">
          <v-icon>{{
            !actionsGroup ? "mdi-dots-vertical" : "mdi-menu-down"
          }}</v-icon>
        </v-btn>
        <div class="actionsGroup" v-if="actionsGroup">
          <v-btn v-if="!archived" icon color="primary" variant="elevated">
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="right"
              >حذف درخواست</v-tooltip
            >
          </v-btn>
          <v-btn icon color="black" variant="elevated">
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="left"
              >ویرایش درخواست</v-tooltip
            >
          </v-btn>
          <v-btn
            :to="{
              name: 'requestDetails',
              params: { id: clientCarRequest.id },
            }"
            icon
            color="orange"
            variant="elevated"
          >
            <v-icon color="white">mdi-information</v-icon>
            <v-tooltip activator="parent" location="right"
              >جزئیات درخواست</v-tooltip
            >
          </v-btn>
          <v-btn
            
            icon
            color="green"
            variant="elevated"
          >
            <v-icon color="white">mdi-receipt-text-check</v-icon>
            <v-tooltip activator="parent" location="right">صورت حساب</v-tooltip>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>
<style scoped>
.v-card:hover {
  box-shadow: 0px 3px 10px -1px rgb(0 0 0 / 20%);
}
</style>
