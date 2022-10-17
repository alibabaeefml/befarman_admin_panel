<script setup>
import DatePicker from 'vue3-persian-datetime-picker';
import defaultThumb from "@/assets/Images/avatars/car-avatar.jpg";
import { ref } from '@vue/reactivity';
import { getStatuses } from '@/composables/status/status';

defineEmits(['showDeleteModal', 'showCommentsModal', 'showDateChangeModal']);
const props = defineProps(['car', 'archived']);
const rentCarActions = ref(false);

</script>

<template>
    <div>
        <v-card class="border mt-3 text-center">
            <v-card-text style="direction:rtl;font-family: ym;">
                <v-row class="align-center">
                    <v-col cols="12" md="3" xs="12" class="justify-center">
                        <v-img :src="car.thumbnail ? car.thumbnail : defaultThumb" max-width="400" max-height="200"
                            style="border-radius:10px" />
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                        <div class="d-flex flex-column">
                            <div class="peTitle">
                                {{car.car.name_fa}}
                            </div>
                            <div class="enSub">
                                {{car.car.name_en}}
                            </div>

                            <div class="mt-6">
                                <v-select v-model="car.status_detail.name_fa"
                                    :style="{ color: car.status_detail.color + '!important' }"
                                     :disabled="archived"
                                    label="وضعیت" :items="getStatuses" item-title="name_fa" variant="underlined">
                                </v-select>
                            </div>
                            <v-btn :to="{name:'CLIENT CAR DETAILS',params:{id:':id'}}" block prepend-icon="mdi-unknown"
                                color="secondary" variant="outlined">جزئیات
                                خودرو
                            </v-btn>

                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                        <div class="d-flex justify-center flex-column mt-4 pr-2">
                            <div>
                                مالک خودرو
                            </div>
                            <div class="peTitle">
                                {{car.user.name}}
                            </div>
                            <div class="enSub" style="user-select:text">
                                {{car.user.phone}}
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                        <div class="d-flex justify-center flex-column mt-4 pr-2" style="font-size:20px">
                            <div class="mxb">
                                <h2> {{car.cost}}</h2>
                            </div>
                            <div class="yl">
                                هزینه روزانه - تومان
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions style="position:absolute;bottom:0">
                <v-btn v-if="!archived" color="primary" icon @click="rentCarActions = !rentCarActions">
                    <v-icon>{{ !rentCarActions ? 'mdi-dots-vertical' : 'mdi-menu-down' }}</v-icon>
                </v-btn>
                <v-btn v-else color="orange" icon @click="restoreCar">
                    <v-icon>mdi-restore</v-icon>
                    <v-tooltip v-if="archived" activator="parent" location="right">بازگشت خودرو</v-tooltip>
                </v-btn>
                <div class="actionsGroup" v-if="rentCarActions">
                    <v-btn icon color="primary" variant="elevated" @click="$emit('showDeleteModal')">
                        <v-icon>mdi-delete</v-icon>
                        <v-tooltip activator="parent" location="right">حذف خودرو</v-tooltip>
                    </v-btn>
                    <v-btn icon color="black" variant="elevated" :to="{name:'EDIT CLIENT CAR',params:{id:car.id}}">
                        <v-icon>mdi-pencil</v-icon>
                        <v-tooltip activator="parent" location="left">ویرایش خودرو</v-tooltip>
                    </v-btn>
                    <v-btn icon color="secondary" variant="elevated" @click="$_openModal('clientCarComments')">
                        <v-icon color="white">mdi-comment</v-icon>
                        <v-tooltip activator="parent" location="right">نظرات</v-tooltip>
                    </v-btn>
                    <v-btn icon color="orange" variant="elevated" @click="$emit('showDateChangeModal')">

                        <v-icon color="white">mdi-calendar</v-icon>
                        <v-tooltip activator="parent" location="right">تاریخ رزرو</v-tooltip>
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