<script setup>
import debouncedFunction from "@/composables/global/autoCompletedFilter";
import { computed, ref, watch } from "vue";
import { useCar } from "@/composables/car/car";

const props = defineProps({
  value: {
    default: null,
  },
  brandId: {
    default: null,
  },
  label: {
    default: "مدل خودرو",
  },
  disabled: {
    default: false,
  },
});
const emit = defineEmits(["input"]);

const cars = ref([]);

const carId = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});
const { searchCar } = useCar();

watch(
  () => props.brandId,
  async (value) => {
    if (value) {
      const filters = {
        brand_id: {
          type: "in",
          val: value,
        },
      };
      const params = {
        filters,
        pagination: { page: 1 },
      };
      cars.value = await searchCar(params);
    }
  }
);

const filterCar = async (event) => {
  debouncedFunction(event, async () => {
    const filters = {
      name_fa: {
        type: "like",
        val: event.target.value,
      },
      brand_id: {
        type: "in",
        val: props.brandId,
      },
    };
    const params = {
      filters,
      pagination: { page: 1 },
    };
    try {
      cars.value = await searchCar(params);
    } catch (err) {
      console.log(err);
    }
  });
};
</script>
<template>
  <v-autocomplete
    :label="label"
    :items="cars"
    item-title="name_fa"
    item-value="id"
    @keydown="filterCar"
    v-model="carId"
    variant="underlined"
    prepend-icon="mdi-car-info"
    :disabled="disabled"
  ></v-autocomplete>
</template>
