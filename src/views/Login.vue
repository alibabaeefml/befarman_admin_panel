<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const props = defineProps(["dialog"])
const numberInput = ref(true)
defineEmits(['toggleModal'])

const width = computed(() => useDisplay().width.value)
const height = computed(() => useDisplay().height.value)
const sm = computed(() => useDisplay().smAndDown.value);

// form ruels
const valid = ref(false);
const phoneNumber = ref('');
const numberRules = ref([
    v => !!v || 'شماره همراه الزامی است',
    v => !isNaN(v) || 'باید شماره باشد',
    v => (v[0] == 0 && v[1] == 9) || 'فرمت صحیح 09000000000 می باشد',
    v => v.length == 11 || 'شماره همراه باید 11 رقم باشد',
]);

const codeSent = ref(false)
</script>
<template>
    <div class="container" :style="{ width: width + 'px', height: height + 'px' }">
        <v-card class="login-card" :style="{ width: sm ? '85%' : '30%', left: sm ? '0' : null }">
            <div v-if="!codeSent">
                <v-card-title class="login-title">
                    <v-icon>mdi-account</v-icon>ورود
                </v-card-title>
                <v-card-subtitle class="login-sub">LOGIN</v-card-subtitle>
                <v-card-text class="login-body">
                    <v-text-field v-model="phoneNumber" variant="underlined" label="شماره همراه خود را وارد نمایید"
                        prepend-icon="mdi-phone" :rules="numberRules"></v-text-field>
                    <v-btn class="send-code-btn" color="primary" append-icon="mdi-send-clock">ارسال کد احراز هویت
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
                    <v-btn class="send-code-btn" color="secondary" append-icon="mdi-account-check">بررسی</v-btn>
                </v-card-text>
            </div>
        </v-card>
    </div>
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
    padding: 1rem 1.5rem;
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