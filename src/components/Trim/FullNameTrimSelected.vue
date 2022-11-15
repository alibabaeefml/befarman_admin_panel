<script setup>
import { computed, ref } from "vue";
import { storeToRefs } from "pinia/dist/pinia";
import { useTrimStore } from "@/store/trim";

const props = defineProps({
  value: {
    default: null,
  },
  label: {
    default: "نوع خودرو",
  },
});

const emit = defineEmits(["input"]);

const trimId = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});

const { getAllTrims } = storeToRefs(useTrimStore());
useTrimStore().loadAllTrims();

const customFilter = (item, queryText, itemText) => {
  return item.indexOf(queryText) > -1;
};
</script>
<template>
  <v-autocomplete
    :label="label"
    :items="getAllTrims"
    :custom-filter="customFilter"
    item-title="name_fa"
    item-value="id"
    v-model="trimId"
    prepend-icon="mdi-car-info"
    variant="underlined"
    :menu-props="{ maxHeight: 400 }"
  ></v-autocomplete>
</template>
