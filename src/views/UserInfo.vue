<script setup>

</script>

<template>

    <v-row dir="rtl" class=" align-center ma-4 ym">
        <v-col cols="12" md="3" sm="12" class="">
            <v-card title="مدارک کاربر" subtitle="USER DOCS">
                <v-carousel dir="ltr" height="200" color="grey" interval="5000" cycle hide-delimiter-background
                    show-arrows="hover">
                    <v-carousel-item v-for="(item, i) in 5" :key="i"
                        src="/src/assets/Images/avatars/certificate-avatar.jpg" cover>
                    </v-carousel-item>
                </v-carousel>
            </v-card>

        </v-col>
        <v-col cols="12" md="9" sm="12">
            <v-card class="pa-5" title="اطلاعات کاربر" subtitle="USER INFO" prepend-icon="mdi-account-details">
                <v-row class="text-center">
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>نام و نام خانوادگی کاربر</h4>
                            <h2>کاربر مهمان</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>شماره تلفن</h4>
                            <h2>09365875893</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>کد ملی</h4>
                            <h2>000000000</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>سال تولد</h4>
                            <h2>0000/00/00</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>تابعیت</h4>
                            <h2>ایرانی</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>شماره گذرنامه</h4>
                            <h2>00000000</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>شماره گواهی نامه</h4>
                            <h2>000000000</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>نام پدر</h4>
                            <h2>پدر کاربر</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>شهر تولد</h4>
                            <h2>تهران</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>شهر سکونت</h4>
                            <h2>تهران</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>نوع محل سکونت</h4>
                            <h2>مالک</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>آدرس</h4>
                            <h2>تهران/شهرک غرب</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>تلفن منزل</h4>
                            <h2>000000000000</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>میزان تحصیلات</h4>
                            <h2>دکتری</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>شغل</h4>
                            <h2>دکتر داخلی</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>تلفن محل کار</h4>
                            <h2>000000000000</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>نام بانک</h4>
                            <h2>ملی</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>شماره حساب</h4>
                            <h2>000000000000</h2>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>

    <v-btn :to="{name:'users'}" class="add-btn" icon color="primary" size="large">
        <v-icon>mdi-arrow-left</v-icon>
        <v-tooltip activator="parent">بازگشت</v-tooltip>
    </v-btn>
</template>