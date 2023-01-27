<script setup lang="ts">
import Datepicker from "vue3-persian-datetime-picker";
const props = defineProps({
  label: { type: String, default: "تاریخ" },
  value: {},
});
</script>

<template>
  <Datepicker :label="label" v-model="value"></Datepicker>
</template>

<style scoped></style>
