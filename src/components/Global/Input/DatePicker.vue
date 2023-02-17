<script setup lang="ts">
import Datepicker from "vue3-persian-datetime-picker";
import { computed } from "@vue/reactivity";
const props = defineProps({
  label: { type: String, default: "تاریخ" },
  value: { type: String, default: "0000-00-00" },
});

const emit = defineEmits(["input"]);

const date = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});
</script>

<template>
  <Datepicker
    type="datetime"
    :label="label"
    v-model="date"
  ></Datepicker>
</template>

<style scoped></style>
