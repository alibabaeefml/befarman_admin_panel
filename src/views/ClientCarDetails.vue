<script setup>
import { ref } from 'vue';
import Documents from '@components/ClientCar/Documents.vue';
import MoreDetails from '@components/ClientCar/MoreDetails.vue';
const more = ref(false);
const docModal = ref(false);
</script>
<template>
    <v-card dir="rtl" class="ma-4 ym" title="جزئیات خودرو" subtitle="CAR DETAILS" prepend-icon="mdi-car-side">
        <v-row dir="rtl" class="pa-5">
            <v-col cols="12" md="6" sm="12">
                <v-carousel dir="ltr" interval="5000" color="white" cycle hide-delimiter-background show-arrows="hover">
                    <v-carousel-item v-for="(item, i) in 5" :key="i" src="/src/assets/Images/bmw_x6.jpg" cover>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="text-center">
                <v-row>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>مالک خودرو</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>رنگ خودرو</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>وضعیت رنگ خودرو</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>سوخت</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>شماره پلاک خودرو</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>مالک خودرو</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>سال تولید خودرو</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>آخرین تاریخ تعویض روغن</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>نصب GPS بفرمان روی ماشین</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>تخفیف بیمه</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>GPS</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="yl">
                        <div>
                            <h4>بیمه</h4>
                            <h2>data</h2>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-btn @click="more = !more" block :append-icon="more ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            color="primary" variant="outlined">جزئیات بیشتر
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn @click="docModal = !docModal" block append-icon="mdi-file-document" color="black"
                            variant="outlined">مدارک
                        </v-btn>
                    </v-col>
                </v-row>
                <more-details v-if="more"></more-details>
            </v-col>
            <documents :doc-modal="docModal" @toggle-modal="docModal = false"></documents>
        </v-row>
    </v-card>

    <v-btn to="/Admin/Rental-Cars" class="add-btn" icon size="large" color="primary">
        <v-icon>mdi-arrow-left</v-icon>
        <v-tooltip activator="parent">بازگشت</v-tooltip>
    </v-btn>
</template>