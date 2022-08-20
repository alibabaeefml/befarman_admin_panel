<script setup>
import defultThumb from '@/assets/Images/avatars/car-avatar.jpg'
const props = defineProps(['data']);
const { id, pName, eName, thumb, brand } = props.data;
</script>
<template>
    <v-col cols="12" md="3" sm="6">
        <v-card>
            <v-img :src="thumb ? thumb : defultThumb">
            </v-img>
            <v-card-text>
                <div>
                    <h1 style="font-family:ym">{{ pName }}</h1>
                    <h3 style="font-family:mm;letter-spacing: 5px;" class="text-disabled">{{ eName }}</h3>
                    <span style="position: absolute;left:5px;bottom: 5px;">{{ brand }}</span>
                </div>
            </v-card-text>
            <v-card-actions style="border-top:.5px solid rgba(0,0,0,.1);" class="justify-center">
                <v-btn icon color="primary" variant="elevated">
                    <v-icon>mdi-delete</v-icon>
                    <v-tooltip activator="parent" location="right">حذف خودرو</v-tooltip>
                </v-btn>
                <v-btn icon color="black" variant="elevated" @click="$_openModal('add-car', { title: 'ویرایش خودرو', icon: 'mdi-car', subtitle: 'EDIT CAR' })">
                    <v-icon>mdi-pencil</v-icon>
                    <v-tooltip activator="parent" location="left">ویرایش خودرو</v-tooltip>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>