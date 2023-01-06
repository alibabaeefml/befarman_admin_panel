<script setup lang="ts">
import { notify } from "@kyvg/vue3-notification";
import { useClientCarRequest } from "@/composables/clientCarRequest";
const closeNotification = (id: number) => {
  notify.close(id);
};
const requestVerification = async (
  requestId: number,
  verification: boolean
) => {
  try {
    await useClientCarRequest().adminVerifyClientCarRequest(requestId, {
      verify: verification,
    });
    notify({
      group: "notification",
      type: "success",
      title: "تغییر وضعیت درخواست",
      text: "تغییر وضعیت با موفقیت انجام شد.",
    });
  } catch (e: any) {
    notify({
      group: "notification",
      type: "error",
      title: "تغییر وضعیت درخواست",
      text: e.response.data.errors.clientCarRequest,
    });
  }
};
</script>
<template>
  <div>
    <notifications group="verification" position="bottom center">
      <template #body="props">
        <v-card
          dir="rtl"
          :style="{
            borderTop: 'solid 4px' + props.item.data.requestStatus.color,
          }"
        >
          <v-card-title>
            <i
              :class="props.item.data.requestStatus.icon"
              :color="props.item.data.requestStatus.color"
            ></i>
            {{ props.item.title }}
          </v-card-title>
          <v-card-text class="ym">
            <p>{{ props.item.text }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              style="position: absolute; top: 5px; left: 5px"
              @click="closeNotification(props.item.id)"
              icon="mdi-close"
            />
            <v-btn
              class="xs-txt"
              color="red"
              @click="
                closeNotification(props.item.id);
                requestVerification(props.item.data.request.id, false);
              "
            >
              رد درخواست
            </v-btn>
            <v-btn
              color="green"
              @click="
                closeNotification(props.item.id);
                requestVerification(props.item.data.request.id, true);
              "
            >
              تایید
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </notifications>
  </div>
</template>
