import { defineStore } from "pinia";
import { ref, computed } from "vue";

export declare interface Modal {
  name: string;
  data: any;
}

export const useModalStore = defineStore("modal", () => {
  const modals = ref<Modal[]>([]);

  const isModal = (name: string) =>
    modals.value.findIndex((x: Modal) => x.name == name) != -1;

  const getModal = (name: string) =>
    modals.value.find((x: Modal) => x.name == name);

  const getActiveModal = computed(() => modals.value[modals.value.length]);

  const openModal = (name: string, data: any = {}) => {
    if (modals.value.findIndex((x) => x.name === name) === -1) {
      modals.value.push({ name, data });
    }
  };

  const closeModal = () => {
    if (modals.value.length) {
      modals.value.pop();
    }
  };

  return { isModal, getModal, getActiveModal, openModal, closeModal, modals };
});
