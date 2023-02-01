<script setup lang="ts">
import { useClientCar } from "@/composables/clientCar/clientCar";
import { ref, computed } from "vue";
import debouncedFunction from "@/composables/global/autoCompletedFilter";
const { indexClientCar, getClientCars, paginate } = useClientCar();
const props = defineProps({
  value: { type: Number, default: null },
  car_number: { type: String, default: null },
});

indexClientCar({});

const clientCarMethod = useClientCar();
const clientCars = ref([]);
const isLoading = ref(false);

const emit = defineEmits(["input"]);
const selectedClientCarId = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});
const created = async () => {
  isLoading.value = true;
  const filters = {
    car_number: {
      type: "like",
      val: props.car_number,
    },
  };
  const params = {
    filters,
    pagination: { page: 1 },
  };
  clientCars.value = await clientCarMethod.searchClientCar(params);
  isLoading.value = false;
};
created();
const filterClientCar = async (event: any) => {
  debouncedFunction(event, async () => {
    const filters = {
      name: {
        type: "like",
        val: event.target.value,
      },
      car_number: {
        type: "like",
        val: event.target.value,
      },
      mode: "or",
    };
    const params = {
      filters,
      pagination: { page: 1 },
    };
    try {
      isLoading.value = true;
      clientCars.value = await clientCarMethod.searchClientCar(params);
      isLoading.value = false;
    } catch (err) {
      console.log(err);
    }
  });
};
filterClientCar(props.value);
</script>

<template>
  <v-autocomplete
    label="خودرو"
    clearable
    :items="clientCars"
    item-title="name"
    item-value="id"
    @keydown="filterClientCar"
    prepend-icon="mdi-car"
    v-model="selectedClientCarId"
    variant="underlined"
    :loading="isLoading"
    no-data-text="خودرویی یافت نشد"
  >
    <template #selection="{ item }">
      <div class="d-flex align-items-center" style="gap:5px">
        <span>{{ item.raw.name }}</span>
        <span style="font-size: small">({{ item.raw.car_number }})</span>
      </div>
    </template>
  </v-autocomplete>
</template>
