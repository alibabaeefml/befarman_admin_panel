<script setup>
import { ref } from 'vue';
defineProps(['archived']);
defineEmits(['smsModal', 'deleteModal'])
const actions = ref(false);
</script>

<template>
    <div>
        <v-card class="border mt-3 text-center d-flex align-center" min-height="200">
            <v-card-text dir="rtl" class="yl">
                <v-row class="align-center">
                    <v-col cols="12" md="3" sm="12">
                        <h1 class="md-txt">کاربر مهمان</h1>
                        <h2>09000000000</h2>
                        <v-btn class="ym" to="/Admin/User-Info" block prepend-icon="mdi-account-details" color="secondary"
                            variant="outlined">اطلاعات کاربر</v-btn>
                    </v-col>
                    <v-col class="d-flex align-center justify-center text-right" style="color:rgb(238, 53, 82)"
                        cols="12" md="3" sm="12">
                        <h1 class="lg-txt mb">0</h1>
                        <h3 class=" sm-txt mr-2" style="width:90px">خودرو قابل اجاره</h3>
                    </v-col>
                    <v-col class="d-flex align-center justify-center text-right" style="color:#32cad5" cols="12" md="3"
                        sm="12">
                        <h1 class="lg-txt mb">0</h1>
                        <h3 class=" sm-txt mr-2" style="width:90px">درخواست خودرو</h3>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                        <div class="d-flex flex-column" style="font-size:20px">
                            <h2 class="mxb">150000</h2>
                            <h4>هزینه روزانه - تومان</h4>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions style="position:absolute;bottom:0">

                <v-btn v-if="!archived" color="primary" icon @click="actions = !actions">
                    <v-icon>{{ !actions ? 'mdi-dots-vertical' : 'mdi-menu-down' }}</v-icon>
                </v-btn>
                <v-btn v-else color="orange" icon @click="restoreCar">
                    <v-icon>mdi-restore</v-icon>
                    <v-tooltip v-if="archived" activator="parent" location="bottom">بازگشت کاربر</v-tooltip>
                </v-btn>
                <div class="actionsGroup" v-if="actions">
                    <v-btn icon color="primary" variant="elevated" @click="$emit('deleteModal')">
                        <v-icon>mdi-delete</v-icon>
                        <v-tooltip activator="parent" location="bottom">حذف کاربر</v-tooltip>
                    </v-btn>
                    <v-btn icon color="red" variant="elevated">
                        <v-icon color="white">mdi-close</v-icon>
                        <v-tooltip activator="parent" location="bottom">لغو تایید</v-tooltip>
                    </v-btn>
                    <v-btn icon color="black" variant="elevated" to="/Admin/Edit-User">
                        <v-icon>mdi-pencil</v-icon>
                        <v-tooltip activator="parent" location="bottom">ویرایش کاربر</v-tooltip>
                    </v-btn>
                    <v-btn icon color="orange" variant="elevated" @click="$emit('smsModal')">
                        <v-icon color="white">mdi-message-text</v-icon>
                        <v-tooltip activator="parent" location="bottom">ارسال پیام</v-tooltip>
                    </v-btn>
                    <v-btn icon color="secondary" variant="elevated" @click="$emit('showCommentsModal')">
                        <v-icon color="white">mdi-comment</v-icon>
                        <v-tooltip activator="parent" location="bottom">نظرات</v-tooltip>
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
</style>