import { useModalStore } from "@/store/modal";
import { getCurrentInstance } from "vue";

export function useModal() {
  const app = getCurrentInstance();
  const modalStore = useModalStore();
  const { openModal, closeModal } = modalStore;

  app.appContext.config.globalProperties.$_openModal = (name, data = {}) => {
    openModal(name, data);
  };
  app.appContext.config.globalProperties.$_closeModal = () => {
    closeModal();
  };
}
