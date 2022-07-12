<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const props = defineProps(["dialog"])
const numberInput = ref(true)
defineEmits(['toggleModal'])

const width = computed(() => useDisplay().width.value)
const height = computed(() => useDisplay().height.value)
const sm = computed(() => width.value < 800);
// form ruels
const valid = ref(false);
const phoneNumber = ref('');
const numberRules = ref([
    v => !!v || 'شماره همراه الزامی است',
    v => (v[0] == 0 && v[1] == 9) || 'فرمت صحیح 09000000000 می باشد',
    v => v.length == 11 || 'شماره همراه باید 11 رقم باشد',
]);
const codeSent = ref(false)
</script>
<template>
    <div class="container" :style="{ width: width + 'px', height: height + 'px' }">
        <v-card class="login-card" :style="{ width: sm ? '60%' : '30%', left: sm ? '20%' : null }">
            <div v-if="!codeSent">
                <v-card-title class="login-title">
                    <v-icon>mdi-account</v-icon>ورود
                </v-card-title>
                <v-card-subtitle class="login-sub">LOGIN</v-card-subtitle>
                <v-card-text class="login-body">
                    <v-text-field v-model="phoneNumber" variant="underlined" label="شماره همراه خود را وارد نمایید"
                        prepend-icon="mdi-phone" :rules="numberRules"></v-text-field>
                    <v-btn class="send-code-btn" color="black">
                        <v-icon>mdi-send-clock</v-icon>ارسال کد احراز هویت
                    </v-btn>
                </v-card-text>
            </div>
            <div v-else>
                <v-card-title class="login-title">
                    <v-icon>mdi-account</v-icon>ورود
                </v-card-title>
                <v-card-subtitle class="login-sub">LOGIN</v-card-subtitle>
                <v-card-text class="login-body">
                    <v-text-field v-model="phoneNumber" variant="underlined" label="کد ارسالی را وارد نمایید"
                        prepend-icon="mdi-barcode" :rules="numberRules"></v-text-field>
                    <v-btn class="send-code-btn" color="black">
                        <v-icon>mdi-account-check</v-icon>بررسی
                    </v-btn>
                </v-card-text>
            </div>
        </v-card>
    </div>
    <!-- <base-modal @toggleModal="$emit('toggleModal')" :dialog="dialog" title="ورود" subtitle="LOGIN" icon="mdi-account">
        <v-card class="login-card">
            <template v-if="numberInput">
                <v-text-field class="" @keyup.enter="sendCodeAndCheckResults" label="شماره تماس" append-icon="mdi-phone"
                    v-model="phoneNumber"></v-text-field>
                <v-btn block  @click="sendCodeAndCheckResults"
                    style="background-color: #32cad5; color: #fff">
                    ارسال کد احراز هویت
                    <v-icon>mdi-paper-airplane-outline</v-icon>
                </v-btn>
            </template>
            <template v-else>
                <v-text-field @keyup.enter="confirmCode" class="login_input" label="کد ارسالی"
                    append-icon=" WMi-asterisk" v-model="confirmationCode"></v-text-field>
                <v-btn block elevation="2" medium rounded style="background-color: #000000; color: #ffffff"
                    @click="confirmCode">
                    تایید کد احراز هویت
                    <v-icon> WMi-logout-1</v-icon>
                </v-btn>
            </template>
        </v-card>
    </base-modal> -->
</template>
<style scoped>
.container {
    background: url('@/assets/images/loginBG.jpg');
    background-size: cover;
    background-position: center;
    color: white;
}

.login-card {
    position: absolute;
    left: 35%;
    top: 30%;
    font-family: ym;
    direction: rtl;
    padding: 1rem 2rem;
}

.login-title {
    font-size: 20px;
}

.login-sub {
    font-family: mm;
    color: white;
    background: black;
    opacity: 1;
    letter-spacing: 5px;
}

.login-body {
    margin: 10px 0 0 0;
}

.send-code-btn {
    width: 100%;
    direction: ltr;
}
</style>