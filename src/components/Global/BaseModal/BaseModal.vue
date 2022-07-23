<script setup>
import BaseHeader from "./BaseHeader.vue"
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useDisplay } from "vuetify/lib/framework.mjs";
const props = defineProps(["dialog", "title", "subtitle", "icon"]);
defineEmits(['toggleModal'])
const sm = computed(() => useDisplay().width.value < 800);

</script>

<template>
    <div class="text-center">
        <v-dialog v-model="dialog" persistent style="direction: rtl!important">
            <v-card class="v-card"
                :style="{ maxWidth: '100%', width: !sm ? '800px' : '100%', right: !sm ? '0' : '30px' }">
                <v-card-title style="padding:0">
                    <BaseHeader @toggleModal="$emit('toggleModal')" :title="title" :subtitle="subtitle" :icon="icon" />
                </v-card-title>
                <slot></slot>
            </v-card>
        </v-dialog>
    </div>
</template>
<style scoped>
.v-card {
    border-radius: 30px !important;
    font-family: yl;
}
</style>>