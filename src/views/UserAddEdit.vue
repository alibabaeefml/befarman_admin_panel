<script setup>
defineProps(['title'])
const educationRates = ['پایین تر از دیپلم', 'دیپلم', 'کاردانی', 'لیسانس', 'فوق لیسانس', 'دکتری', 'سایر'];
const locationTypes = ['شخصی', 'استیجاری', 'سایر'];
const citizenships = ['ایرانی', 'اتباع'];
const bankNames = ['ملی', 'سپه', 'ملت', 'کشاورزی', 'مسکن', 'صادرات', 'پارسیان', 'شهر', 'دی', 'تجارت', 'رفاه', 'گردشگری', 'رسالت', 'انصار', 'مهر اقتصاد', 'سایر'];
</script>

<template>
    <v-card dir="rtl" class="ym" :title="$route.meta.title" :subtitle="$route.name" prepend-icon="mdi-account-plus">
        <v-card-text>
            <v-card class="pa-4" title="اطلاعات شخصی" subtitle="PERSONAL INFO" prepend-icon="mdi-information">
                <v-row>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="نام کاربر" prepend-icon="mdi-account">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="نام خانوادگی کاربر" prepend-icon="mdi-account">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="نام پدر" prepend-icon="mdi-account">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="شماره همراه" prepend-icon="mdi-cellphone">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="کد ملی" prepend-icon="mdi-card-account-details">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="شهر تولد" prepend-icon="mdi-city-variant-outline">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="سال تولد" prepend-icon="mdi-calendar">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="شماره گواهینامه"
                            prepend-icon="mdi-card-account-details">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-select :items="educationRates" editable variant="underlined" label="میزان تحصیلات"
                            prepend-icon="mdi-school">
                        </v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-select :items="citizenships" editable variant="underlined" label="تابعیت"
                            prepend-icon="mdi-flag">
                        </v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="شماره گذرنامه" prepend-icon="mdi-passport">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="استان" prepend-icon="mdi-city">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="شهر" prepend-icon="mdi-city">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-select :items="locationTypes" editable variant="underlined" label="نوع محل سکونت"
                            prepend-icon="mdi-account">
                        </v-select>
                    </v-col>
                    <v-col cols="12" lg="6" md="6">
                        <v-text-field variant="underlined" label="آدرس" prepend-icon="mdi-map-marker">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="تلفن منزل" prepend-icon="mdi-phone">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="شغل" prepend-icon="mdi-account-hard-hat">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="آدرس محل کار" prepend-icon="mdi-map-marker">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="تلفن محل کار" prepend-icon="mdi-phone">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-select :items="locationTypes" editable variant="underlined" label="نام بانک"
                            prepend-icon="mdi-bank">
                        </v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="4">
                        <v-text-field variant="underlined" label="شماره حساب بانک">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="pa-4 mt-4" title="آشنایان" subtitle="RELATIVES" prepend-icon="mdi-account-group">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field variant="underlined" label="نام" prepend-icon="mdi-account">
                        </v-text-field>

                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="underlined" label="نسبت" prepend-icon="mdi-relation-many-to-many">
                        </v-text-field>

                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="underlined" label="شماره همراه" prepend-icon="mdi-cellphone">
                        </v-text-field>

                    </v-col>
                    <v-col cols="12">
                        <v-text-field variant="underlined" label="آدرس" prepend-icon="mdi-map-marker">
                        </v-text-field>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field variant="underlined" label="نام" prepend-icon="mdi-account">
                        </v-text-field>

                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="underlined" label="نسبت" prepend-icon="mdi-relation-many-to-many">
                        </v-text-field>

                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="underlined" label="شماره همراه" prepend-icon="mdi-cellphone">
                        </v-text-field>

                    </v-col>
                    <v-col cols="12">
                        <v-text-field variant="underlined" label="آدرس" prepend-icon="mdi-map-marker">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="pa-4 mt-4" title="مدارک" subtitle="DOCUMENTS" prepend-icon="mdi-file-document">
                <v-file-input label="مدارک خود را بارگذاری نمایید" variant="outlined" prepend-icon="mdi-image"></v-file-input>
            </v-card>
        </v-card-text>
        <v-card-actions style="background-color: #ededed;" class="justify-center">
            <v-btn to="/Admin/Users" variant="elevated" color="pink" icon @click="$emit('toggleModal')" class="ma-1">
                <v-icon color="white">mdi-close</v-icon>
            </v-btn>
            <v-btn variant="elevated" color="cyan" icon class="ma-1">
                <v-icon color="white">mdi-check</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
    <v-btn to="/Admin/Users" class="add-btn" icon color="primary" size="large">
        <v-icon>mdi-arrow-left</v-icon>
        <v-tooltip activator="parent">بازگشت</v-tooltip>
    </v-btn>
</template>