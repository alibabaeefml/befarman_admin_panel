<script setup>
import Filters from '@components/Global/Filters/Filters.vue'
import { ref } from '@vue/reactivity';
</script>

<template>
    <Filters>
        <v-row class="pa-4">
            <v-col cols="12" md="3">
                <v-text-field prepend-icon="mdi-car" label="نام" variant="underlined">
                </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field prepend-icon="mdi-account" label="نام خانواده" variant="underlined"></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field prepend-icon="mdi-car" label="کد ملی" variant="underlined">
                </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field  prepend-icon="mdi-car" label="شماره همراه" variant="underlined">
                </v-text-field>
            </v-col>
        </v-row>
    </Filters>
</template>