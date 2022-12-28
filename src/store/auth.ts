import { defineStore } from "pinia";
import { ref } from "vue";
import AuthRepository from "@/abstraction/repositories/authRepository";
import StoreManagement from "@/utils/store-management";
import ApiService from "@/services/api.services";
import type { UserAuth } from "@/types/userAuth";
const repository = new AuthRepository();
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<UserAuth | null>(StoreManagement.get("user"));
  const token = ref<String | null>(StoreManagement.get("token", "cookie"));

  const sendCode = async (phone: string) => {
    repository.sendCode(phone);
    return true;
  };

  const login = async ({ phone, code }: { phone: string; code: string }) => {
    const user: any = await repository.login({ phone, code });
    if (user && !!user.is_admin) {
      // update pinia state
      // store user details and jwt in local storage to keep user logged in between page refreshes
      StoreManagement.set("user", user);
      StoreManagement.set("token", user.token);

      // token
      ApiService.setAuthHeader(user.token);

      // redirect
      router.push({ name: "dashboard" });
      return user;
    }
    window.location.reload()
        return null;
  };

  const logout = () => {
    repository.logout();
    user.value = null;
    token.value = null;
    StoreManagement.remove("user");
    StoreManagement.remove("token", "cookie");
    router.push({ name: "login" });
  };

  return { sendCode, login, logout, user, token };
});
