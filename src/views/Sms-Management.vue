<script setup>
import SmsFilter from '@components/Sms/SmsFilter.vue';
import SmsItem from '@components/Sms/SmsItem.vue';
</script>

<template>
    <SmsFilter />
    <SmsItem v-for="sms of 5" :key="sms.id" :sms="sms" />
</template>


