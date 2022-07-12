<script setup>
import BaseHeader from "./BaseHeader.vue"
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useDisplay } from "vuetify/lib/framework.mjs";
const props = defineProps(["dialog", "title", "subtitle", "icon"]);
defineEmits(['toggleModal'])

const modalWidth = computed(
    () => {
        const width = useDisplay().width.value;
        if (width < 600) {
            return width - 100
        } else {
            return 500
        }
    }
)

</script>

<template>
    <div class="text-center">
        <v-dialog v-model="dialog" persistent>
            <v-card class="v-card" :width="modalWidth">
                <v-card-title class="modal-title">
                    <BaseHeader @toggleModal="$emit('toggleModal')" :title="title" :subtitle="subtitle" :icon="icon" />
                </v-card-title>

                <v-card-actions class="modal-body">
                    <slot></slot>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<style scoped>
.v-card {
    border-radius: 30px !important;
    font-family: yl;
}

.modal-title {
    padding: 0 !important;
}

.modal-body {
    direction: rtl;
    padding: 0px !important;
}
</style>>