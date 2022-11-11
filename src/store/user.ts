import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { User } from "@/types/user";
import { defaultPaginate, type Paginate } from "@/types/paginate";
import UserRepository from "../abstraction/repositories/userRepository";
export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);
  const archivedUsers = ref<User[]>([]);
  const paginate = ref<Paginate>(defaultPaginate);
  const getUsers = computed(() => users.value);
  const getArchivedUsers = computed(() => archivedUsers.value);
  const repository = new UserRepository();
  const indexUsers = async (paginate) => {
    const { data } = await repository.index(paginate);
    users.value = data;
  };
  const showUser = async (user) => {
    const { data } = await repository.show(user);
    return data;
  };
  return {
    users,
    archivedUsers,
    indexUsers,
    showUser,
    getUsers,
    paginate,
    getArchivedUsers,
  };
});
