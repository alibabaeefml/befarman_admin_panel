<script setup>
import { ref } from 'vue';

const actions = ref(false)
</script>

<template>
    <div>
        <v-card class="border mt-3 text-center d-flex align-center" min-height="200">
            <v-card-text dir="rtl" class="ym">
                <v-row class="align-center">
                    <v-col cols="12" md="3" sm="12">
                        <h1>کاربر مهمان</h1>
                        <h2>09000000000</h2>
                    </v-col>
                    <v-col class="d-flex align-center text-right" style="color:rgb(238, 53, 82)"
                        cols="12" md="3" sm="12">
                        <h1 class="lg-txt mb">0</h1>
                        <h3 class="yl sm-txt mr-2" style="width:90px">خودرو قابل اجاره</h3>
                    </v-col>
                    <v-col class="d-flex align-center text-right" style="color:#32cad5" cols="12"
                        md="3" sm="12">
                        <h1 class="lg-txt mb">0</h1>
                        <h3 class="yl sm-txt mr-2" style="width:90px">درخواست خودرو</h3>
                    </v-col>
                    <v-col cols="12" md="3" sm="12">

                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions style="position:absolute;bottom:0">
                <v-btn color="primary" icon @click="actions = !actions">
                    <v-icon>{{ !actions ? 'mdi-dots-vertical' : 'mdi-menu-down' }}</v-icon>
                </v-btn>
                <div class="actionsGroup" v-if="actions">
                    <v-btn v-if="!archived" icon color="primary" variant="elevated" @click="$emit('deleteModal')">
                        <v-icon>mdi-delete</v-icon>
                        <v-tooltip activator="parent" location="right">حذف درخواست</v-tooltip>
                    </v-btn>
                    <v-btn icon color="black" variant="elevated" @click="$emit('editModal')">
                        <v-icon>mdi-pencil</v-icon>
                        <v-tooltip activator="parent" location="left">ویرایش درخواست</v-tooltip>
                    </v-btn>
                    <router-link to="/Admin/Request-Details">
                        <v-btn icon color="orange" variant="elevated">
                            <v-icon color="white">mdi-information</v-icon>
                            <v-tooltip activator="parent" location="right">جزئیات درخواست</v-tooltip>
                        </v-btn>
                    </router-link>
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