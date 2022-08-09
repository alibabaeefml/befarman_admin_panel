<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const props = defineProps(["dialog"])
const numberInput = ref(true)
defineEmits(['toggleModal'])

const width = computed(() => useDisplay().width.value)
const height = computed(() => useDisplay().height.value)
const md = computed(() => useDisplay().width.value < 1070);

// form ruels
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
    <div>
        <v-row>
            <v-col :style="{ height: !md ? '100vh' : '' }" cols="12" sm="7">
                <v-card class="ym pa-4 ma-4"
                    :style="{ top: !md ? '40%' : '20px' }" dir="rtl"
                    :title="$route.meta.title" :subtitle="$route.name" prepend-icon="mdi-account">
                    <v-card-text>
                        <div v-if="!codeSent">
                            <v-text-field v-model="phoneNumber" variant="underlined"
                                label="شماره همراه خود را وارد نمایید" prepend-icon="mdi-phone" :rules="numberRules">
                            </v-text-field>
                            <v-btn :block="md" class="rtl-icon float-left" color="primary" append-icon="mdi-send-clock">
                                ارسال کد احراز هویت
                            </v-btn>
                        </div>
                        <div v-else>
                            <v-text-field v-model="phoneNumber" variant="underlined" label="کد ارسالی را وارد نمایید"
                                prepend-icon="mdi-barcode" :rules="numberRules"></v-text-field>
                            <v-btn :block="md" class="float-left" color="secondary" append-icon="mdi-account-check">
                                بررسی</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="5"
                style="height:100vh;background:url('src/assets/images/loginBG.jpg');background-position: center;background-size: cover;">
            </v-col>

        </v-row>
    </div>
    <!-- <div class="container" :style="{ width: width + 'px', height: height + 'px' }">
        <v-card class="login-card" :style="{ width: sm ? '85%' : '30%', left: sm ? '0' : null }">
            <div>
                <v-card-title class="login-title">
                    <v-icon>mdi-account</v-icon>
                </v-card-title>
                <v-card-subtitle class="login-sub">LOGIN</v-card-subtitle>
                <div v-if="!codeSent">
                    <v-card-text class="login-body">
                        <v-text-field v-model="phoneNumber" variant="underlined" label="شماره همراه خود را وارد نمایید"
                            prepend-icon="mdi-phone" :rules="numberRules"></v-text-field>
                        <v-btn block class="rtl-icon" color="primary" append-icon="mdi-send-clock">ارسال کد احراز هویت
                        </v-btn>
                    </v-card-text>
                </div>
                <div v-else>
                    <v-card-text class="login-body">
                        
                    </v-card-text>
                </div>
            </div>
        </v-card>
    </div> -->
</template>