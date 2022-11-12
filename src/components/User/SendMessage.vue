<script setup>
import BaseModal from "@/components/Global/dialog/BaseModal.vue";
import { useUser } from "@/composables/user/user";

import { ref } from "vue";

const form = ref({ id: null, message: null });
const smsSent = ref(false);
const smsFailed = ref(false);
const openModal = async (data) => {
  form.value.id = 2130;
};
const sendMessage = async () => {
  try {
    const response = await useUser().sms(form.value);
    useNotification({
      icon: "check",
      content: "ارسال پیام موفقیت آمیز بود",
      theme: "lightgreen",
    });
  } catch {
    useNotification({
      icon: "information",
      content: "ارسال پیام با خطا مواجه شد",
      theme: "#ff8a80",
    });
  }
};
</script>

<template>
  <BaseModal
    title="ارسال پیام"
    subtitle="SEND MESSAGE"
    icon="mdi-message-text"
    name="sendMessage"
    @open="openModal"
  >
    <v-card-text class="text-center">
      <v-textarea
        prependIcon="mdi-text"
        label="متن پیام"
        variant="underlined"
        v-model="form.message"
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        color="primary"
        variant="elevated"
        @click="$_closeModal()"
        icon="mdi-close"
      ></v-btn>
      <v-btn
        class="rtl-icon"
        color="secondary"
        variant="elevated"
        icon="mdi-send"
        @click="sendMessage(), $_closeModal()"
      ></v-btn>
    </v-card-actions>
  </BaseModal>
</template>
