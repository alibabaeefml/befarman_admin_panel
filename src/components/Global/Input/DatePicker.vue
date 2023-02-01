<script setup lang="ts">
import Datepicker from "vue3-persian-datetime-picker";
const props = defineProps({
  label: { type: String, default: "تاریخ" },
  value: { type: String, default: "0000-00-00" },
});
</script>

<template>
  <Datepicker
    type="datetime"
    :label="label"
    v-model="value"
    @change="$emit('changeDate', value)"
  ></Datepicker>
</template>

<style scoped></style>
