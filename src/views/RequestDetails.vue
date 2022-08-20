<script setup>
import { computed } from '@vue/reactivity';
import { useDisplay } from 'vuetify/lib/framework.mjs';
const md = computed(() => useDisplay().smAndUp.value)
</script>

<template>
    <div dir="rtl" class="ma-5 ym">
        <v-card title="پراید" subtitle="PRIDE">
            <v-card-text>
                <v-row class="align-center">
                    <v-col cols="12" md="4" sm="12">
                        <v-carousel height="200" dir="ltr" interval="5000" color="white" cycle hide-delimiter-background
                            show-arrows="hover">
                            <v-carousel-item v-for="(item, i) in 5" :key="i" src="/src/assets/Images/bmw_x6.jpg" cover>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                    <v-col cols="12" md="8" sm="12" class="text-center">
                        <v-row>
                            <v-col cols="12" md="4">
                                <div class="d-flex justify-center flex-column">
                                    <div>
                                        مالک خودرو
                                    </div>
                                    <div class="peTitle mt-1">
                                        کاربر
                                    </div>
                                    <div class="enSub mt-1">
                                        09000000000
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <div class="d-flex justify-center flex-column">
                                    <div>
                                        درخواست دهنده
                                    </div>
                                    <div class="peTitle mt-1">
                                        کاربر
                                    </div>
                                    <div class="enSub mt-1">
                                        09000000000
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <div class="d-flex justify-center align-center flex-column yl">
                                    <div>
                                        <h3>تاریخ شروع:</h3>
                                    </div>
                                    <div>
                                        <h4>0000/00/00</h4>
                                    </div>
                                    <div class="mt-2">
                                        <h3>تاریخ پایان:</h3>
                                    </div>
                                    <div>
                                        <h4>0000/00/00</h4>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>

        </v-card>
        <v-card class="mt-4 pa-4" title="آدرس ها" subtitle="LOCATIONS">

            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6">
                        <h2>مکان تحویل:</h2>
                        <h3 class="yl mt-2">تهران</h3>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h2>مکان استرداد:</h2>
                        <h3 class="yl mt-2">تهران</h3>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-row class="mt-4">
            <v-col cols="12" md="6">
                <v-card class="pa-2 overflow-auto " title="وضعیت" subtitle="STATUS" max-height="300">
                     <div class="mt-2 pa-2 curved d-flex align-center justify-space-between"
                        :style="{ background: 'green', color: 'white' }">
                        <div>
                            <v-icon size="large">mdi-account-check</v-icon>
                            تایید توسط ادمین
                        </div>
                        <div v-if="md" style="background:white;height:1px;width: 50%;"></div>
                        <div>تاریخ: 0000/00/00</div>
                    </div>
                    <div class="mt-2 pa-2 curved d-flex align-center justify-space-between"
                        :style="{ background: 'rgb(52, 149, 219)', color: 'white' }">
                        <div>
                            <v-icon size="large">mdi-check</v-icon>
                            استرداد ماشین توسط اجاره کننده
                        </div>
                        <div v-if="md" style="background:white;height:1px;width: 50%;"></div>
                        <div>تاریخ: 0000/00/00</div>
                    </div>
                    <div  class="mt-2 pa-2 curved d-flex align-center justify-space-between rtl-icon"
                        :style="{ background: 'rgb(238, 53, 82)', color: 'white' }">
                        <div>
                            <v-icon size="large">mdi-account-remove</v-icon>
                            رد شده توسط ادمین
                        </div>
                        <div v-if="md" style="background:white;height:1px;width: 50%;"></div>
                        <div>تاریخ: 0000/00/00</div>
                    </div>
                    <div class="mt-2 pa-2 curved d-flex align-center justify-space-between"
                        :style="{ background: 'green', color: 'white' }">
                        <div>
                            <v-icon size="large">mdi-account-check</v-icon>
                            تایید توسط ادمین
                        </div>
                        <div v-if="md" style="background:white;height:1px;width: 50%;"></div>
                        <div>تاریخ: 0000/00/00</div>
                    </div>
                    <div class="mt-2 pa-2 curved d-flex align-center justify-space-between"
                        :style="{ background: 'green', color: 'white' }">
                        <div>
                            <v-icon size="large">mdi-account-check</v-icon>
                            تایید توسط ادمین
                        </div>
                        <div v-if="md" style="background:white;height:1px;width: 50%;"></div>
                        <div>تاریخ: 0000/00/00</div>
                    </div>
                    <div class="mt-2 pa-2 curved d-flex align-center justify-space-between"
                        :style="{ background: 'green', color: 'white' }">
                        <div>
                            <v-icon size="large">mdi-account-check</v-icon>
                            تایید توسط ادمین
                        </div>
                        <div v-if="md" style="background:white;height:1px;width: 50%;"></div>
                        <div>تاریخ: 0000/00/00</div>
                    </div>
                    <div class="mt-2 pa-2 curved d-flex align-center justify-space-between"
                        :style="{ background: 'green', color: 'white' }">
                        <div>
                            <v-icon size="large">mdi-account-check</v-icon>
                            تایید توسط ادمین
                        </div>
                        <div v-if="md" style="background:white;height:1px;width: 50%;"></div>
                        <div>تاریخ: 0000/00/00</div>
                    </div>
                </v-card>
            </v-col>
            <v-row>
                <v-col cols="12" md="12">
                    <v-card class="mt-4 pa-4" title="زمان ها و تمدید ها" subtitle="DURATION">

                    </v-card>
                </v-col>
                <v-col cols="12" md="12">
                    <v-card class="mt-4 pa-4" title="تحویل و استرداد ها" subtitle="DELIVERY AND REFUND">

                    </v-card>
                </v-col>
            </v-row>

        </v-row>
        <router-link :to="{name:'requests'}">
            <v-btn class="add-btn" icon color="primary" size="large">
                <v-icon>mdi-arrow-left</v-icon>
                <v-tooltip activator="parent">بازگشت</v-tooltip>
            </v-btn>
        </router-link>
    </div>
</template>