import { useModalStore } from "@/store/modal";
import { getCurrentInstance, ref } from 'vue'

export function useModal() {
    const app = getCurrentInstance()
    const modalStore = useModalStore();
    const { openModal, closeModal, getActiveModal } = modalStore;

    app.appContext.config.globalProperties.$_openModal = (name, data = {}) => {
        openModal(name, data)
    }
    app.appContext.config.globalProperties.$_closeModal = () => {
        closeModal()
    }
}