<script setup>
import BaseModal from '../Global/BaseModal/BaseModal.vue';
defineProps(['dialog']);
defineEmits(['toggleModal']);
</script>

<template>
    <BaseModal title="ارسال پیام" subtitle="SEND MESSAGE" icon="mdi-message-text" :dialog="dialog"
        @toggleModal="$emit('toggleModal')">
        <v-card-text class="text-center">
           <v-textarea prependIcon="mdi-text" label="متن پیام" variant="underlined">

           </v-textarea>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" variant="elevated" @click="$emit('toggleModal')" icon="mdi-close"></v-btn>
            <v-btn class="rtl-icon" color="secondary" variant="elevated" icon="mdi-send"></v-btn>
        </v-card-actions>
    </BaseModal>
</template>