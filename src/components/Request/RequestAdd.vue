<script setup>
import { ref } from '@vue/reactivity';
import defaultThumb from '@/assets/Images/avatars/car-avatar.jpg';
import BaseModal from '../Global/BaseModal/BaseModal.vue';
defineEmits(['toggleModal']);
defineProps(['dialog', 'add'])
</script>
<template>
    <BaseModal :dialog="dialog" :title="add ? 'اضافه کردن درخواست' : 'ویرایش درخواست'" 
        :subtitle="add ? 'ADD NEW REQUEST' : 'EDIT REQUEST'" icon="mdi-car-side" @toggleModal="$emit('toggleModal')">
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <v-row class="d-flex align-center">
                        <v-col cols="12" md="6">
                            <v-img :src="defaultThumb" />
                        </v-col>
                        <v-col cols="12" md="2">
                            <div class="d-flex flex-column">
                                <div class="peTitle">
                                    پراید
                                </div>
                                <div class="enSub">
                                    PRIDE
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div class="d-flex align-center justify-center curved text-center"
                                :style="{ background: 'pink', color: '#e91e63' }">
                                <div>
                                    <h1 class="mb" style="font-size:70px">5%</h1>
                                </div>
                                <div>
                                    <h4>درصد<br>رضایت</h4>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="align-center text-center">
                <v-col cols="12" md="3" sm="12">
                    <v-text-field label="تاریخ شروع" variant="underlined" />
                </v-col>
                <v-col cols="12" md="3" sm="12">
                    <v-text-field label="تاریخ پایان" variant="underlined" />
                </v-col>
                <v-col cols="12" md="3" sm="12">
                    <div class="d-flex align-center" style="font-size:20px">
                        <div class="mb">
                            <h1 style="font-size:100px">5</h1>
                        </div>
                        <div class="yl">
                            روز زمان درخواست
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="3" sm="12">
                    <div class="d-flex justify-center flex-column" style="font-size:20px">
                        <div class="mxb">
                            <h2>150000</h2>
                        </div>
                        <div class="yl">
                            هزینه روزانه - تومان
                        </div>
                    </div>
                </v-col>
            </v-row>

        </v-card-text>
        <v-card-actions style="background-color: #ededed;" class="justify-center">
            <v-btn variant="elevated" color="pink" icon @click="$emit('toggleModal')">
                <v-icon color="white">mdi-close</v-icon>
            </v-btn>
            <v-btn variant="elevated" color="cyan" icon>
                <v-icon color="white">mdi-check</v-icon>
            </v-btn>
        </v-card-actions>
    </BaseModal>
</template>