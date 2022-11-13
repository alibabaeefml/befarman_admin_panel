<script setup>
import { computed, ref, watch } from "vue";
import TrimRepository from "@/abstraction/repositories/trimRepository";

const props = defineProps({
  value: {
    default: null,
  },
  label: {
    default: "نوع خودرو",
  },
  carId: {
    default: null,
  },
});
const emit = defineEmits(["input"]);

const trims = ref([]);

const trimId = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});
const repository = new TrimRepository();
watch(
  () => props.carId,
  async (value) => {
    emit("input", null);
    if (value && !Array.isArray(trims[value])) {
      trims.value[value] = [];
      trims.value[value] = await repository.indexWithCar(value);
    }
  }
);
</script>
<template>
  <v-autocomplete
    :label="label"
    :items="trims[carId]"
    item-title="name_fa"
    item-value="id"
    v-model="trimId"
    prepend-icon="mdi-car-info"
    variant="underlined"
    :disabled="!carId"
  ></v-autocomplete>
</template>
