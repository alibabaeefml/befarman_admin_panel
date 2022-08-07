<script setup>
import SmsFilter from '../../components/Sms/Sms-Filter.vue';
import SmsItem from '../../components/Sms/Sms-Item.vue';
</script>

<template>
    <sms-filter></sms-filter>
    <smsItem v-for="sms of 5" :key="sms.id" :sms="sms">
    </smsItem>
</template>


