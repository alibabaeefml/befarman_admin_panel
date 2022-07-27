<script setup>
import defaultThumb from '@/assets/Images/avatars/car-avatar.jpg'
import { ref } from '@vue/reactivity';
import DeleteBtn from '@components/Global/Buttons/DeleteBtn.vue';
import EditBtn from '@components/Global/Buttons/EditBtn.vue';
defineEmits(['showDeleteModal'])
const props = defineProps(['car', 'statuses', 'archived']);
const { id, pName, eName, user, cost, thumb } = props.car;
const rentCarActions = ref(false);
</script>

<template>
    <div>
        <v-card class="border mt-3 text-center">
            <v-card-text style="direction:rtl;font-family: ym;">
                <v-row class="align-center">
                    <v-col cols="12" md="3" xs="12">
                        <v-img :src="thumb ? thumb : defaultThumb" width="100%" style="border-radius:10px" />
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                        <div class="d-flex flex-column">
                            <div class="peTitle">
                                {{ pName }}
                            </div>
                            <div class="enSub mt-2">
                                {{ eName }}
                            </div>

                            <div class="mt-6">
                                <v-select :style="{ color: car.status.color + '!important' }" v-model="car.status.name"
                                    :disabled="archived" label="وضعیت" :items="statuses" item-title="name"
                                    variant="underlined"></v-select>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                        <div class="d-flex justify-center flex-column mt-4 pr-2">
                            <div>
                                مالک خودرو
                            </div>
                            <div class="peTitle mt-1">
                                {{ user.name }}
                            </div>
                            <div class="enSub mt-1">
                                {{ user.number }}
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">
                        <div class="d-flex justify-center flex-column mt-4 pr-2" style="font-size:20px">
                            <div class="mxb">
                                <h2>{{ cost }}</h2>
                            </div>
                            <div class="yl mt-2">
                                هزینه روزانه - تومان
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions style="position:absolute;bottom:0">
                <v-btn :color="archived?'orange':'primary'" icon @click="archived ? restoreCar : rentCarActions = !rentCarActions">
                    <v-icon>{{ archived ? 'mdi-restore' : !rentCarActions ? 'mdi-dots-vertical' : 'mdi-menu-down'}}</v-icon>
                    <v-tooltip v-if="archived" activator="parent" location="right">بازگشت خودرو</v-tooltip>
                </v-btn>
                <div class="rentcaractions" v-if="rentCarActions">
                    <delete-btn @click="$emit('showDeleteModal')"></delete-btn>
                    <edit-btn></edit-btn>
                    <v-btn color="secondary" variant="elevated" icon>
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

.rentcaractions>* {
    margin: 5px;
}
</style>