import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useModalStore = defineStore('modal', () => {
    const modals = ref([])

    const isModal = name => modals.value.findIndex(x => x.name == name) != -1


    const getModal = name => modals.value.find(x => x.name == name)

    const getActiveModal = computed(() => modals.value[modals.value.length])

    const openModal = (name, data = {}) => {
        if (modals.value.findIndex((x) => x.name === name) === -1) {
            modals.value.push({ name, data });
        }
    }

    const closeModal = () => {
        if (modals.value.length) {
            modals.value.pop();
        }
    }

    return { isModal, getModal, getActiveModal, openModal, closeModal, modals }
})