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
    const data = await repository.login({ phone, code });

    if (data?.user && !!data?.user.is_admin) {
      // update pinia state
      user.value = data.user;
      token.value = data.token;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      StoreManagement.set("user", data.user);
      StoreManagement.set("token", data.token);

      // token
      ApiService.setAuthHeader(data.token);

      // redirect
      router.push({ name: "dashboard" });
      return;
    }
    router.go(0);
    return 
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
