import { useModalStore } from "@/store/modal";
import type { dynamicObject } from "@/types/common";
import { getCurrentInstance } from "vue";
export function useModal() {
  const app: any = getCurrentInstance();
  const modalStore = useModalStore();
  const { openModal, closeModal } = modalStore;

  app.appContext.config.globalProperties.$_openModal = (
    name: string,
    data = {}
  ) => {
    openModal(name, data);
  };
  app.appContext.config.globalProperties.$_closeModal = () => {
    closeModal();
  };
}
