<script setup>
import BaseModal from "@/components/Global/dialog/BaseModal.vue";
import {useUser} from "@/composables/user/user";

import { ref } from "vue";
const userId = ref();
const openModal = async (id) => {
  userId.value = id;
};


</script>

<template>
  <BaseModal
    title="تأیید حذف درخواست"
    subtitle="USER ARCHIVE CONFIRMATION"
    icon="mdi-delete"
    name="userArchiveAcceptance"
    @open="openModal"
  >
    <v-card-text class="text-center">
      <h2>از حذف کاربر مطمئن هستید !؟</h2>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn color="primary" variant="elevated" @click="$_closeModal()"
        >خیر</v-btn
      >
      <v-btn
        color="secondary"
        variant="elevated"
        @click="useUser().deleteUser(userId), $_closeModal()"
        >بله</v-btn
      >
    </v-card-actions>
  </BaseModal>
</template>
