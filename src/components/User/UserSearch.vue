<script setup>
import { ref, computed } from "vue";
import { useUser } from "@/composables/user/user";
import debouncedFunction from "@/composables/global/autoCompletedFilter";

const props = defineProps({
  value: {
    default: null,
  },
  label: {
    default: "",
  },
  noDataText: {
    default: "",
  },
});
const emit = defineEmits(["input"]);

const userMethod = useUser();
const users = ref([]);

const selectedUserId = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("input", value);
  },
});
const created = async () => {
  users.value = await userMethod.searchUser();
};
created();
const filterUser = async (event) => {
  debouncedFunction(event, async () => {
    const filters = {
      name: {
        type: "like",
        val: event.target.value,
      },
      phone: {
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
      users.value = await userMethod.searchUser(params);
    } catch (err) {
      console.log(err);
    }
  });
};
filterUser(props.value);
</script>
<template>
  <v-autocomplete
    :label="label"
    :items="users"
    @keydown="filterUser"
    item-value="id"
    item-title="name"
    prepend-icon="mdi-account"
    v-model="selectedUserId"
    variant="underlined"
    :no-data-text="noDataText"
  >
    <template #selection="{ item }">
      <div>
        <span>{{  item.raw.name }}</span>
        <span style="font-size: small"
          >({{  item.raw.phone }})</span
        >
      </div>
    </template>
  </v-autocomplete>
</template>
