<script setup>
import SmsFilter from "@components/Sms/SmsFilter.vue";
import SmsItem from "@components/Sms/SmsItem.vue";
</script>

<template>
  <div>
    <SmsFilter />
    <SmsItem v-for="sms of 5" :key="sms.id" :sms="sms" />
  </div>
</template>
