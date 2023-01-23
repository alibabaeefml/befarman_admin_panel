<script setup>
import { useUser } from "@/composables/user/user";
import { ref } from "vue";
const props = defineProps(["user", "archived"]);
const actions = ref(false);

const userVerification = async () => {
  if (props.user.verified == 0) {
    props.user.verified = 1;
    await useUser().verifyUser(props.user.id);
  } else {
    props.user.verified = 0;
    await useUser().unverifyUser(props.user.id);
  }
};
</script>

<template>
  <div>
    <v-card
      class="border mt-3 text-center d-flex align-center"
      min-height="200"
    >
      <v-card-text dir="rtl" :class="{ yl: true, blured: actions }">
        <v-row class="align-center">
          <v-col cols="12" md="3" sm="12">
            <h1 class="md-txt">{{ user.name }}</h1>
            <h2>{{ user.phone }}</h2>
          </v-col>
          <v-col
            class="d-flex align-center justify-center text-right"
            style="color: rgb(238, 53, 82)"
            cols="12"
            md="3"
            sm="12"
          >
            <h1 class="lg-txt mb">{{ user.cars_count }}</h1>
            <h3 class="sm-txt mr-2" style="width: 90px">خودرو قابل اجاره</h3>
          </v-col>
          <v-col
            class="d-flex align-center justify-center text-right"
            style="color: #32cad5"
            cols="12"
            md="3"
            sm="12"
          >
            <h1 class="lg-txt mb">{{ user.requests_count }}</h1>
            <h3 class="sm-txt mr-2" style="width: 90px">درخواست خودرو</h3>
          </v-col>
          <v-col cols="12" md="3" sm="12">
            <div class="d-flex flex-column" style="font-size: 20px">
              <h2 class="mxb">{{ user.transactions_sum }}</h2>
              <h4>کل تراکنش ها - تومان</h4>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions style="position: absolute; bottom: 0">
        <v-btn
          v-if="!archived"
          color="primary"
          icon
          @click="actions = !actions"
        >
          <v-icon>{{
            !actions ? "mdi-dots-vertical" : "mdi-menu-down"
          }}</v-icon>
        </v-btn>
        <v-btn v-else color="orange" icon @click="restoreCar">
          <v-icon>mdi-restore</v-icon>
          <v-tooltip v-if="archived" activator="parent" location="bottom"
            >بازگشت کاربر</v-tooltip
          >
        </v-btn>
        <div class="actionsGroup" v-if="actions">
          <v-btn
            icon
            color="secondary"
            variant="elevated"
            :to="{ name: 'userDetails', params: { id: user.id } }"
          >
            <v-icon color="white">mdi-information</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >اطلاعات کاربر</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            color="primary"
            variant="elevated"
            @click="$_openModal('userArchiveAcceptance', user.id)"
          >
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >حذف کاربر</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            :color="user.verified == 0 ? 'green' : 'red'"
            variant="elevated"
            @click="userVerification"
          >
            <v-icon color="white">{{
              user.verified == 0 ? "mdi-check" : "mdi-close"
            }}</v-icon>
            <v-tooltip activator="parent" location="bottom">{{
              user.verified == 0 ? "تایید کاربر" : "لغو تایید"
            }}</v-tooltip>
          </v-btn>
          <v-btn
            icon
            color="black"
            variant="elevated"
            :to="{ name: 'editUser', params: { id: user.id } }"
          >
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >ویرایش کاربر</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            color="orange"
            variant="elevated"
            @click="$_openModal('sendMessage', user.id)"
          >
            <v-icon color="white">mdi-message-text</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >ارسال پیام</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            color="secondary"
            variant="elevated"
            @click="$_openModal('userComments', user.comments)"
          >
            <v-icon color="white">mdi-comment</v-icon>
            <v-tooltip activator="parent" location="bottom">نظرات</v-tooltip>
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
