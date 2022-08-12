<script setup>
import BaseModal from '../Global/BaseModal/BaseModal.vue';
defineProps(['docModal'])
// defineEmits(['kos'])
</script>

<template>
    <BaseModal title="مدارک خودرو" subtitle="CAR DOCUMENTS" icon="mdi-file-document" :dialog="docModal">
        <v-carousel dir="ltr" interval="5000" color="white" cycle hide-delimiter-background show-arrows="hover">
            <v-carousel-item v-for="(item, i) in 5" :key="i" src="/src/assets/Images/avatars/certificate-avatar.jpg"
                cover>
            </v-carousel-item>
        </v-carousel>
    </BaseModal>
</template>