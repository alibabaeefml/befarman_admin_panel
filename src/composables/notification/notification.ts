import { useNotificationStore } from "@/store/notification";
import { getCurrentInstance } from "vue";

export function useNotification() {
  const app = getCurrentInstance();
  const notificationStore = useNotificationStore();
  const { openNotification, closeNotification } = notificationStore;

  app.appContext.config.globalProperties.$_openNotification = (name, data = {}) => {
    openNotification(name, data);
  };
  app.appContext.config.globalProperties.$_closeNotification = () => {
    closeNotification();
  };
}
