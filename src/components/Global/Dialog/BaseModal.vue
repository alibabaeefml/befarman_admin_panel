<script setup>

import { ref, onBeforeUnmount, computed, getCurrentInstance } from 'vue'
import { useModalStore } from "@/store/modal";

const modalStore = useModalStore();
const { getModal, isModal, closeModal } = modalStore;


const instance = getCurrentInstance();

const props = defineProps({
    fullscreen: { default: undefined },
    width: { default: null },
    maxWidth: { default: null },
    name: { default: null },
    transition: { default: 'slide-x-transition' },
});

const isOpenModal = ref(false);

const modalName = computed(() => props.name ? props.name : instance.parent.appContext.app._component.name);

const data = computed(() => getModal(modalName.value));

const modal = computed({
    get() {
        const isOpen = isModal(modalName.value);
        emitModal(isOpen);
        return isOpen;
    },
    set(value) {
        if (!value) {
            closeModal();
        }
    }
});

const emit = defineEmits(['close', 'open'])

const emitModal = (isOpen) => {
    if (isOpenModal.value && !isOpen) {
        isOpenModal.value = false;
        emit('close');
    } else if (!isOpenModal.value && isOpen) {
        isOpenModal.value = true;
        emit('open', data.value.data);
    }
}
onBeforeUnmount(() => emitModal(false))
</script>

<template>
    <v-dialog :fullscreen="fullscreen" v-model="modal" :max-width="maxWidth" v-if="modal" :width="width" :transition="transition">
        <v-card class="v-card">
            <slot :modal="modal" :data="data.data" ></slot>
        </v-card>
    </v-dialog>
</template>
<style scoped>
.v-card {
    border-radius: 30px !important;
    font-family: yl;
}
</style>>
