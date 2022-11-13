import { defineStore } from "pinia";
import { ref, computed } from "vue";

export declare interface Notification {
  name: string;
  data: any;
}

export const useNotificationStore = defineStore("Notification", () => {
  const notifications = ref<Notification[]>([]);

  const isNotification = (name: string) =>
    notifications.value.findIndex((x: Notification) => x.name == name) != -1;

  const getNotification = (name: string) =>
    notifications.value.find((x: Notification) => x.name == name);

  const getActiveNotification = computed(
    () => notifications.value[notifications.value.length]
  );

  const openNotification = (name: string, data: any = {}) => {
    if (notifications.value.findIndex((x) => x.name === name) === -1) {
      notifications.value.push({ name, data });
    }
  };

  const closeNotification = () => {
    if (notifications.value.length) {
      notifications.value.pop();
    }
  };

  return {
    isNotification,
    getNotification,
    getActiveNotification,
    openNotification,
    closeNotification,
    notifications,
  };
});
