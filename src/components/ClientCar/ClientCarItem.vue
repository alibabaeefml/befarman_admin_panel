<script setup>
import defaultThumb from "@/assets/Images/avatars/car-avatar.jpg";
import { ref, watchEffect, computed } from "vue";
import { useClientCar } from "@/composables/clientCar/clientCar";
import { useClientCarStatus } from "@/composables/clientCarStatus/clientCarStatus";
import { notify } from "@kyvg/vue3-notification";
import { useDisplay } from "vuetify";
// import type { ClientCarStatus } from "@/types/status";
const props = defineProps(["clientCar", "archived", "banner"]);
const { loadStatuses, getClientCarStatuses } = useClientCarStatus();

loadStatuses();
const status = ref({
  color: "",
  id: "",
  name_fa: "",
  icon: "",
});

watchEffect(() => {
  status.value = getClientCarStatuses.value.find(
    (e) => e.id == props.clientCar.status_id
  );
});

const restoreCar = async () => {
  try {
    await useClientCar().restoreClientCar(props.clientCar.id);
    notify({
      type: "success",
      title: "موفق",
      text: "بازگردانی خودرو موفقیت آمیز بود",
    });
  } catch {
    notify({
      type: "error",
      title: "ناموفق",
      text: "بازگردانی خودرو با خطا مواجه شد",
    });
  }
};
const actions = ref(false);
</script>

<template>
  <div>
    <v-card class="border mt-3 text-center" min-height="200">
      <v-card-text :class="{ ym: true, blured: actions }">
        <v-row class="align-center">
          <v-col cols="12" md="3" xs="12" class="justify-center">
            <v-img
              :lazy-src="defaultThumb"
              :src="clientCar.thumbnail ? clientCar.thumbnail : defaultThumb"
              style="border-radius: 10px"
            />
          </v-col>
          <v-col cols="12" md="3" sm="12">
            <div class="d-flex flex-column">
              <div class="md-txt">
                {{ clientCar.car.name_fa }}
              </div>
              <div class="enSub">
                {{ clientCar.car.name_en }}
              </div>
              <div class="mt-4" v-if="status.id">
                <div
                  class="status pa-2 sm-txt"
                  :style="{ background: status.color }"
                  @click="
                    $_openModal('clientCarStatus', {
                      status,
                      getClientCarStatuses,
                      clientCar,
                    })
                  "
                >
                  {{ status.name_fa }}
                  <i :class="status.icon" />
                  <v-tooltip activator="parent" location="bottom"
                    >تغییر وضعیت</v-tooltip
                  >
                </div>
              </div>
              <div v-else>در حال بارگیری وضعیت</div>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="12">
            <div class="d-flex justify-center flex-column mt-4 pr-2">
              <div>مالک خودرو</div>
              <div class="peTitle">
                {{ clientCar.user.name }}
              </div>
              <div class="enSub">
                {{ clientCar.user.phone }}
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="12">
            <div
              class="d-flex justify-center flex-column mt-4 pr-2"
              style="font-size: 20px"
            >
              <div class="mxb">
                <h2>{{ clientCar.price }}</h2>
              </div>
              <div class="yl">هزینه روزانه - تومان</div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions style="position: absolute; bottom: 0; left: 0" dir="ltr">
        <v-btn
          v-if="!archived"
          color="primary"
          icon
          @click="actions = !actions"
        >
          <v-icon>{{
            !actions ? "mdi-dots-vertical" : "mdi-menu-left"
          }}</v-icon>
        </v-btn>
        <v-btn v-else color="orange" icon @click="restoreCar">
          <v-icon>mdi-restore</v-icon>
          <v-tooltip v-if="archived" activator="parent" location="right"
            >بازگشت خودرو</v-tooltip
          >
        </v-btn>
        <div class="actions" v-if="actions">
          <v-btn
            :to="{ name: 'clientCarDetails', params: { id: clientCar.id } }"
            color="secondary"
            icon
            variant="elevated"
          >
            <v-icon color="white">mdi-information</v-icon>
            <v-tooltip activator="parent" location="right"
              >جزئیات خودرو</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            color="primary"
            variant="elevated"
            @click="$_openModal('clientCarArchiveAcceptance', clientCar.id)"
          >
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="right">حذف خودرو</v-tooltip>
          </v-btn>
          <v-btn
            icon
            color="black"
            variant="elevated"
            :to="{ name: 'editClientCar', params: { id: clientCar.id } }"
          >
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="left"
              >ویرایش خودرو</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            color="secondary"
            variant="elevated"
            @click="$_openModal('clientCarComments', clientCar.comments)"
          >
            <v-icon color="white">mdi-comment</v-icon>
            <v-tooltip activator="parent" location="right">نظرات</v-tooltip>
          </v-btn>
          <v-btn icon color="orange" variant="elevated" v-if="status.id == 3">
            <v-icon color="white">mdi-calendar</v-icon>
            <v-tooltip activator="parent" location="right"
              >تاریخ رزرو</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            color="green"
            variant="elevated"
            @click="$_openModal('evaluationInfo', clientCar.id)"
          >
            <v-icon color="white">mdi-magnify-scan</v-icon>
            <v-tooltip activator="parent" location="right"
              >ارزیابی خودرو</v-tooltip
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
.status {
  border-radius: 20px 0 20px 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}
</style>
