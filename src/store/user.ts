import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { User } from "@/types/user";
import UserRepository from "../abstraction/repositories/userRepository";
export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);
  const getUsers = computed(() => users.value);
  const repository = new UserRepository();
  const indexUsers = async (paginate) => {
    const { data } = await repository.index(paginate);
    users.value = data;
  };
  const showUser = async (user) => {
    const { data } = await repository.show(user);
    return data;
  };
  return { users, indexUsers, showUser, getUsers };
});
