<script setup>
import defaultThumb from "@/assets/Images/avatars/car-avatar.jpg";
import { computed, ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
defineProps(["request", "archived"]);
defineEmits(["editModal", "deleteModal"]);
const reqActions = ref(false);
const sm = computed(() => useDisplay().width.value < 900);
const id = ref(":id");
</script>
<template>
  <div>
    <v-card class="border mt-3 text-center" min-height="200">
      <v-card-text dir="rtl" class="ym">
        <v-row class="align-center">
          <v-col cols="12" md="3" xs="12">
            <v-img src="/src/assets/Images/bmw_x6.jpg" />
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
              <div class="peTitle">پراید</div>
              <div class="enSub">PRIDE</div>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-row>
              <v-col cols="12" md="6">
                <div class="d-flex justify-center flex-column">
                  <div>مالک خودرو</div>
                  <div class="peTitle">کاربر</div>
                  <div class="enSub">09000000000</div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex justify-center flex-column">
                  <div>درخواست دهنده</div>
                  <div class="peTitle">کاربر</div>
                  <div class="enSub">09000000000</div>
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
                    <h1 :style="{ fontSize: !sm ? '100px' : '50px' }">5</h1>
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
        <v-btn color="primary" icon @click="reqActions = !reqActions">
          <v-icon>{{
            !reqActions ? "mdi-dots-vertical" : "mdi-menu-down"
          }}</v-icon>
        </v-btn>
        <div class="actionsGroup" v-if="reqActions">
          <v-btn
            v-if="!archived"
            icon
            color="primary"
            variant="elevated"
            @click="$emit('deleteModal')"
          >
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="right"
              >حذف درخواست</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            color="black"
            variant="elevated"
            @click="$emit('editModal')"
          >
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="left"
              >ویرایش درخواست</v-tooltip
            >
          </v-btn>
          <v-btn
            :to="{ name: 'requestDetails', params: { id } }"
            icon
            color="orange"
            variant="elevated"
          >
            <v-icon color="white">mdi-information</v-icon>
            <v-tooltip activator="parent" location="right"
              >جزئیات درخواست</v-tooltip
            >
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
