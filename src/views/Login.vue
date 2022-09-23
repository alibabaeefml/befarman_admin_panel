<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useAuthStore } from '@/store/auth.ts'

const props = defineProps(["dialog"])
const numberInput = ref(true)
defineEmits(['toggleModal'])

const width = computed(() => useDisplay().width.value)
const height = computed(() => useDisplay().height.value)
const md = computed(() => useDisplay().width.value < 1070);

//-----------------

// form values
const user = ref({phone:'',code:''});
const codeSent = ref(false);

// form rules
const numberRules = ref([
    v => !!v || 'شماره همراه الزامی است',
    v => !isNaN(v) || 'باید شماره باشد',
    v => (v[0] == 0 && v[1] == 9) || 'فرمت صحیح 09000000000 می باشد',
    v => v.length == 11 || 'شماره همراه باید 11 رقم باشد',
]);

const phoneCheck = computed(() => {
    let n = user.value.phone;
    return n.length === 11 && !isNaN(parseFloat(n))
})

//-----------

// form opertaions
const sendCode = () => {
    codeSent.value = useAuthStore().sendCode(user.value.phone)
}

const login = () => {
    useAuthStore().login(user.value);
}
</script>
<template>
    <div>
        <v-row>
            <v-col :style="{ height: !md ? '100vh' : '' }" cols="12" sm="7">
                <v-card class="ym pa-4 ma-4" :style="{ top: !md ? '40%' : '20px' }" dir="rtl" :title="$route.meta.title"
                    :subtitle="$route.name" prepend-icon="mdi-account">
                    <v-card-text>
                        <div v-if="!codeSent">
                            <v-text-field v-model="user.phone" variant="underlined"
                                label="شماره همراه خود را وارد نمایید" prepend-icon="mdi-phone" :rules="numberRules">
                            </v-text-field>
                            <v-btn :block="md" class="rtl-icon float-left" color="primary" append-icon="mdi-send-clock"
                                :disabled="!phoneCheck" @click="sendCode">
                                ارسال کد احراز هویت
                            </v-btn>
                        </div>
                        <div v-else>
                            <v-text-field v-model="user.code" variant="underlined" label="کد ارسالی را وارد نمایید"
                                prepend-icon="mdi-barcode" :rules="numberRules"></v-text-field>
                            <v-btn :block="md" class="float-left" color="secondary" append-icon="mdi-account-check"
                                @click="login">
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
</template>