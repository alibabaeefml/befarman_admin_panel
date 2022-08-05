<script setup>
import BaseModal from '../Global/BaseModal/BaseModal.vue';
defineProps(['dialog']);
defineEmits(['toggleModal']);
</script>

<template>
    <BaseModal title="تأیید حذف درخواست" subtitle="REQUEST DELETE CONFIRMATION" icon="mdi-delete" :dialog="dialog"
        @toggleModal="$emit('toggleModal')">
        <v-card-text class="text-center">
            <h2>از حذف کاربر مطمئن هستید !؟</h2>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" variant="elevated" @click="$emit('toggleModal')">خیر</v-btn>
            <v-btn color="secondary" variant="elevated">بله</v-btn>
        </v-card-actions>
    </BaseModal>
</template>