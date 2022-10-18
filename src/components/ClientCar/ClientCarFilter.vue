<script setup>
import Filters from '@components/Global/Filters/Filters.vue'
import { ref } from '@vue/reactivity';
import { getStatuses } from '@/composables/status/status';
const years = ref([]);
// update years array each year
const year = new Date().getFullYear() - 621;
for (let i = 1380; i <= year; i++) {
    years.value.push(i)
};
defineProps(['tab', 'statuses'])


</script>

<template>
    <Filters>
        <v-row class="pa-4">
            <v-col cols="12" md="3">
                <v-text-field prepend-icon="mdi-car" label="نام خوردرو" variant="underlined">
                </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field prepend-icon="mdi-account" label="نام مالک" variant="underlined"></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-select :items="years" prepend-icon="mdi-calendar" label="سال تولید" variant="underlined">
                </v-select>
            </v-col>
            <v-col cols="12" md="3">
                <v-select :disabled="tab !== 'one'" :items="getStatuses" item-title="name_fa" prepend-icon="mdi-check"
                    label="وضعیت" variant="underlined"></v-select>
            </v-col>
        </v-row>
    </Filters>
</template>
