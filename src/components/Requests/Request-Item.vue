<script setup>
import defaultThumb from '@/assets/Images/avatars/car-avatar.jpg';
import { ref } from '@vue/reactivity';
defineProps(['request', 'archived']);
defineEmits(['editModal','showDeleteModal']);
const reqActions = ref(false);
</script>
<template>
    <div>
        <v-card class="border mt-3 text-center d-flex align-center" min-height="200">
            <v-card-text dir="rtl" class="ym">
                <v-row class="align-center">
                    <v-col cols="12" md="3" xs="12">
                        <v-img :src="thumb ? thumb : defaultThumb" width="100%" style="border-radius:10px" />
                        <div class="req-status pa-2 curved" :style="{ background: 'green' }">
                            <v-icon size="large">mdi-account-check</v-icon>
                            تایید توسط ادمین
                        </div>
                    </v-col>
                    <v-col cols="12" md="1" sm="12">
                        <div class="d-flex flex-column">
                            <div class="peTitle">
                                پراید
                            </div>
                            <div class="enSub mt-2">
                                PRIDE
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <v-row>
                            <v-col cols="12" md="6">
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
                            <v-col cols="12" md="6">
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
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <v-row>
                            <v-col cols="12" md="6" class="d-flex justify-center mt-2">
                                <div class="d-flex align-center" style="font-size:20px">
                                    <div class="mb">
                                        <h1 style="font-size:100px">5</h1>
                                    </div>
                                    <div class="yl">
                                        روز زمان درخواست
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="d-flex justify-center flex-column mt-2" style="font-size:20px">
                                    <div class="mxb">
                                        <h2>150000</h2>
                                    </div>
                                    <div class="yl mt-2">
                                        هزینه روزانه - تومان
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions style="position:absolute;bottom:0">
                <v-btn color="primary" icon @click="reqActions = !reqActions">
                    <v-icon>{{ !reqActions ? 'mdi-dots-vertical' : 'mdi-menu-down' }}</v-icon>
                </v-btn>
                <div class="actionsGroup" v-if="reqActions">
                    <v-btn v-if="!archived" icon color="primary" variant="elevated" @click="$emit('editModal')">
                        <v-icon>mdi-delete</v-icon>
                        <v-tooltip activator="parent" location="right">حذف درخواست</v-tooltip>
                    </v-btn>
                    <v-btn icon color="black" variant="elevated" @click="$emit('editModal')">
                        <v-icon>mdi-pencil</v-icon>
                        <v-tooltip activator="parent" location="left">ویرایش درخواست</v-tooltip>
                    </v-btn>
                    <v-btn icon color="orange" variant="elevated">
                        <v-icon color="white">mdi-information</v-icon>
                        <v-tooltip activator="parent" location="right">جزئیات درخواست</v-tooltip>
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </div>
</template>
<style scoped>
.v-card:hover {
    box-shadow: 0px 3px 10px -1px rgb(0 0 0 / 20%);
}

.req-status {
    color: white;
}
</style>