<script setup>
import defultThumb from '@/assets/Images/avatars/car-avatar.jpg'
const props = defineProps(['car']);
const car = props.car;
</script>
<template>
    <v-col cols="12" md="3" sm="6">
        <v-card>
            <v-img :src="car.thumbnail ? car.thumbnail : defultThumb">
            </v-img>
            <v-card-text>
                <div>
                    <h1 style="font-family:ym">{{ car.name }}</h1>
                    <h3 style="font-family:mm;letter-spacing: 5px;" class="text-disabled">{{ car.name_en }}</h3>
                    <span style="position: absolute;left:5px;bottom: 5px;">{{ car.brand.name }}</span>
                </div>
            </v-card-text>
            <v-card-actions style="border-top:.5px solid rgba(0,0,0,.1);" class="justify-center">
                <v-btn icon color="primary" @click.native="deleteCar(car.id)" variant="elevated">
                    <v-icon>mdi-delete</v-icon>
                    <v-tooltip activator="parent" location="right">حذف خودرو</v-tooltip>
                </v-btn>

                <v-btn icon color="black" @click.native="$_openModal('add-car', {car})" variant="elevated">

                    <v-icon>mdi-pencil</v-icon>
                    <v-tooltip activator="parent" location="left">ویرایش خودرو</v-tooltip>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>