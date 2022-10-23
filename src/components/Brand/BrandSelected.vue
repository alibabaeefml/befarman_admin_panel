<script setup>
import { storeToRefs } from "pinia/dist/pinia";
import { useBrandStore } from "@/store/brand";
import { computed } from "vue";

const props = defineProps({
    value: {
        default: null
    },
    label: {
        default: "برند خودرو"
    }
});
const emit = defineEmits(['input'])

const brandId = computed({
    get() {
        return props.value
    },
    set(value) {
        emit('input', value);
    }
})

const { getBrands } = storeToRefs(useBrandStore());
// fetch all brands
useBrandStore().loadBrands();
</script>
<template>
        <v-autocomplete
            :label="label"
            :items="getBrands"
            item-title="name_fa"
            item-value="id"
            v-model="brandId"
            prepend-icon="mdi-alpha-b-circle"
            variant="underlined"
          ></v-autocomplete>
</template>