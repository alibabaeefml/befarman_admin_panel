<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { useAuthStore } from "@/store/auth";
import bg from "@/assets/Images/loginBG.jpg";
import { notify } from "@kyvg/vue3-notification";
defineProps(["dialog"]);

const width = computed(() => useDisplay().width.value);
const md = computed(() => useDisplay().width.value < 1070);

//-----------------

// form values
const user = ref({ phone: "", code: "" });
const codeSent = ref(false);
const loading = ref(false);
// form rules

// ui check

const numberRules = ref([
  (v: any) => !!v || "شماره همراه الزامی است",
  (v: number) => !isNaN(v) || "باید شماره باشد",
  (v: number[]) => (v[0] == 0 && v[1] == 9) || "فرمت صحیح 09000000000 می باشد",
  (v: string | any[]) => v.length == 11 || "شماره همراه باید 11 رقم باشد",
]);
const codeRules = ref([
  (v: number) => !isNaN(v) || "باید شماره باشد",
  (v: string | any[]) => v.length == 6 || "باید 6 رقمی باشد",
]);

// logic check

const phoneCheck = computed(() => {
  let n = user.value.phone;
  return n.length === 11 && !isNaN(n);
});

//-----------

// form opertaions
const sendCode = async () => {
  codeSent.value = await useAuthStore().sendCode(user.value.phone);
};

const login = async () => {
  loading.value = true;
  try {
    await useAuthStore().login(user.value);
    loading.value = false;
    notify({
      group: "notification",
      type: "success",
      title: "موفق",
      text: "ورود موفقیت آمیز بود",
      
    });
  } catch (e: any) {
    const error: string | any = Object.values(e.response.data.errors)[0];
    loading.value = false;
    notify({
      group: "notification",
      type: "error",
      title: "ناموفق",
      text: error,
    });
  }
};
</script>
<template>
  <div>
    <v-row>
      <v-col
        class="d-flex flex-column align-center justify-center"
        dir="rtl"
        :style="{ height: !md ? '100vh' : '' }"
        cols="12"
        sm="7"
      >
        <h3 class="ym mt-2">BEFARMAN | بفرمان</h3>
        <v-card
          class="ym pa-4"
          width="95%"
          dir="rtl"
          :title="$route.meta.title"
          :subtitle="$route.name"
          prepend-icon="mdi-account"
        >
          <v-card-text>
            <div v-if="!codeSent">
              <v-text-field
                v-model="user.phone"
                variant="underlined"
                label="شماره همراه خود را وارد نمایید"
                prepend-icon="mdi-phone"
                :rules="numberRules"
              >
              </v-text-field>
              <v-btn
                :block="md"
                class="rtl-icon float-left"
                color="primary"
                append-icon="mdi-send-clock"
                :disabled="!phoneCheck"
                @click="sendCode"
              >
                ارسال کد احراز هویت
              </v-btn>
            </div>
            <div v-else>
              <v-row>
                <v-text-field
                  v-model="user.code"
                  variant="underlined"
                  label="کد ارسالی را وارد نمایید"
                  prepend-icon="mdi-barcode"
                  :rules="codeRules"
                ></v-text-field>
              </v-row>
              <v-row dir="ltr">
                <v-col>
                  <v-btn
                    block
                    class="float-left"
                    color="secondary"
                    append-icon="mdi-account-check"
                    :disabled="!user.code"
                    @click="login"
                    :loading="loading"
                  >
                    بررسی</v-btn
                  >
                </v-col>
                <v-col>
                  <v-btn
                    block
                    class="float-left"
                    color="primary"
                    append-icon="mdi-account-check"
                    @click="sendCode"
                  >
                    ارسال مجدد کد</v-btn
                  >
                </v-col>
                <v-col>
                  <v-btn
                    block
                    class="float-left"
                    color="orange"
                    append-icon="mdi-account-check"
                    @click="codeSent = false"
                  >
                    تغییر شماره ({{ user.phone }})</v-btn
                  >
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        v-if="width > 600"
        :style="{
          background: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
      </v-col>
    </v-row>
  </div>
</template>
